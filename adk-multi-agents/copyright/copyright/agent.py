import cv2
import json

from imwatermark import WatermarkEncoder, WatermarkDecoder
from pydantic import BaseModel

from google.adk.tools import ToolContext
from google.adk.agents import Agent


MODEL = 'gemini-1.5-flash-002'
ORIGINAL_PATH = './data/original'
PROTECTED_PATH = './data/protected'

# 20250618 nft 관련 정보는 -> 추후 디코딩 -> 새로 인코딩
metadata = {
  "id": 1234,
  "creation_id": 5678,
  "nft_token_id": "pending",
  "copyright_notice": "© 2025 Minha Sohn. All rights reserved.",
  "license_type": "non_commercial",
  "allow_ai_training": True,
  "allow_commercial_use": False,
  "allow_derivatives": False,
  "created_at": "2025-06-18T20:00:00+09:00"
}

watermark_string = json.dumps(metadata)


def encode_image(tool_context: ToolContext)-> str:
    image_path = tool_context.state.get('image_path')
    metadata = tool_context.state.get('metadata')
    if not image_path or not metadata:
        return "[encode_image] Error: image_path or metadata not found in state."
  
    try:
        bgr = cv2.imread(image_path)
        if bgr is None:
            raise FileNotFoundError(f"Image not found: {image_path}")

        encoder = WatermarkEncoder()
        encoder.set_watermark('bytes', metadata.encode('utf-8'))
        bgr_encoded = encoder.encode(bgr, 'dwtDct')

        output_path = image_path.replace('.png', '_wm.png')
        success = cv2.imwrite(output_path, bgr_encoded)
        
        if not success:
            raise IOError("Failed to save image.")

        return output_path
    
    except Exception as e:
        print(f"[encode_image error] {e}")
        return ""
    
    
# def decode_image(image_path = PROTECTED_PATH):
#     print('[decode] 시작')
#     bgr = cv2.imread(image_path + '/ex1_wm.png')
#     if bgr is None:
#         raise ValueError('워터마크된 이미지 파일을 읽을 수 없습니다.')
    
#     watermark_bytes = WATERMARK.encode('utf-8')
#     decoder = WatermarkDecoder('bytes', len(watermark_bytes) * 8)
    
#     watermark = decoder.decode(bgr, 'dwtDct')

#     print('[decode] 완료')
#     print('raw watermark bytes:', watermark)
#     print('decoded watermark: ', watermark.decode('utf-8', errors='replace'))


invisible_watermark_agent_instruction = """
**Role**
- You are an image processing agent responsible for applying an invisible watermark to artwork images.
- Your sole function is to encode the given metadata into the image without altering its visual appearance.

**Tools**
- You have access to one tool: `encode_image`.

**Task**
1. If the user asks you to apply a watermark, begin by invoking the `save_prd` tool.
2. Once the metadata and image path have been stored in the Use `encode_image` to embed the metadata into the image using an invisible watermarking technique (e.g., DWT/DCT).
3. Save the watermarked image in the same directory with `_wm` suffix (e.g., `artwork_wm.png`).
4. If any error occurs during encoding, return `isSucceed: False` and leave `path` empty.


**Output**
- Return a dictionary in the following format:

{
  "isSucceed": true,       // or false on failure
  "path": "/path/to/output/image.jpg"
}
"""


def save_prd(image_path: str, metadata: str, tool_context: ToolContext):
    tool_context.state['image_path'] = image_path
    tool_context.state['metadata'] = json.dumps(metadata)


root_agent = Agent(
  model=MODEL,
  name="invisible_watermark_agent",
  description="Applies an invisible watermark to an artwork image using robust encoding methods. The watermark includes copyright metadata in JSON format to protect the creator’s rights.",
  instruction=invisible_watermark_agent_instruction,
  tools=[save_prd, encode_image]
)




