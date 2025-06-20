import cv2
import json

from imwatermark import WatermarkEncoder, WatermarkDecoder
from pydantic import BaseModel

from google.adk.tools import ToolContext
from google.adk.agents import Agent


MODEL = 'gemini-1.5-flash-002'
ORIGINAL_PATH = './data/original'
PROTECTED_PATH = './data/protected'

root_agent = Agent(
  model=MODEL,
  name="copyright_multiagent",
  # description="Applies an invisible watermark to an artwork image using robust encoding methods. The watermark includes copyright metadata in JSON format to protect the creator’s rights.",
  # instruction=invisible_watermark_agent_instruction,
  # tools=[save_prd, encode_image]
)




