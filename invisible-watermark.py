import cv2
from imwatermark import WatermarkEncoder, WatermarkDecoder

ORIGINAL_PATH = './data/original'
PROTECTED_PATH = './data/protected'
WATERMARK = 'test'

def encode_image(image_path = ORIGINAL_PATH, watermark = WATERMARK):
    print('[encode] 시작')
    bgr = cv2.imread(image_path + '/ex1.png')
    if bgr is None:
        raise ValueError('이미지 파일을 읽을 수 없습니다.')

    encoder = WatermarkEncoder()
    encoder.set_watermark('bytes', watermark.encode('utf-8'))
    bgr_encoded = encoder.encode(bgr, 'dwtDct')

    success = cv2.imwrite(PROTECTED_PATH + '/ex1_wm.png', bgr_encoded)
    print('Watermarked image 저장 성공 여부:', success)

    print('[encode] 완료')
    
    
def decode_image(image_path = PROTECTED_PATH):
    print('[decode] 시작')
    bgr = cv2.imread(image_path + '/ex1_wm.png')
    if bgr is None:
        raise ValueError('워터마크된 이미지 파일을 읽을 수 없습니다.')
    
    watermark_bytes = WATERMARK.encode('utf-8')
    decoder = WatermarkDecoder('bytes', len(watermark_bytes) * 8)
    
    watermark = decoder.decode(bgr, 'dwtDct')

    print('[decode] 완료')
    print('raw watermark bytes:', watermark)
    print('decoded watermark: ', watermark.decode('utf-8', errors='replace'))


if __name__ == "__main__":
  try:
    encode_image();
    
    decode_image();
  except Exception as e:
    print(e)
