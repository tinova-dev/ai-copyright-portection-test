## AI copyright protection list

| Type               | Name                        | Description                                                                                                                                                  | Links                                                                            |
| ------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Watermark          | Invisible Watermark         | Invisible Watermark                                                                                                                                          |                                                                                  |
| Adversarial Noise  | glaze                       | glaze                                                                                                                                                        |                                                                                  |
|                    | nightshade                  | nightshade                                                                                                                                                   |                                                                                  |
|                    | fgsm                        |                                                                                                                                                              | https://capital-g.github.io/adversarial-noise-workshop/01-FGSM.html#id3          |
|                    | One Pixel Attack            |                                                                                                                                                              | https://capital-g.github.io/adversarial-noise-workshop/02-one-pixel-attack.html  |
|                    | Adversarial Patch Detection |                                                                                                                                                              | https://capital-g.github.io/adversarial-noise-workshop/03-adversarial-patch.html |
| Image Similarity   | CLIP                        | 텍스트-이미지, 이미지-이미지 임베딩을 통해 전체 스타일 + 구성 유사도 판단 가능. "이 AI 그림이 이 작가의 작품 스타일과 비슷한가?" 질문을 할 수 있음           | https://github.com/mlfoundations/open_clip                                       |
|                    | LPIPS                       | 사람의 시각적 인지와 유사한 방식으로 두 이미지 간의 시각적 유사도를 측정하는 지표. 사람의 시각과 유사한 방식으로 유사도 평가 (도용 판단의 1차 필터링에 적합) | https://github.com/richzhang/PerceptualSimilarity                                |
|                    | Style Loss                  | 두 이미지 간의 스타일 차이를 측정하기 위해 사용되는 손실 함수. 여기서 "스타일"은 색감, 질감, 패턴 같은 시각적 일관성을 의미                                  |
|                    | DISTS                       | 구조(배치) + 텍스처(화풍)을 함께 보므로 화풍 모방 여부 평가에 유리. 도용 판단에서 "작가 특유 스타일이 복제되었는가"를 판단하는 데 더 강력                    | https://github.com/dingkeyan93/DISTS                                             |
| XAI Computer Vison | Grad-CAM                    |                                                                                                                                                              | https://jacobgil.github.io/pytorch-gradcam-book/introduction.html                |

## Score list

OpenCLIP으로 두 이미지 임베딩 추출 후 cosine similarity 계산
→ 0.8 이상: 내용, 구도, 스타일 유사성 높음

DISTS or LPIPS로 세부 시각적 유사도 수치 확인
→ DISTS < 0.2이면 거의 똑같이 생김 (도용 가능성 매우 높음)
