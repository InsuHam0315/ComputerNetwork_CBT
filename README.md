# ComputerNetwork_CBT

컴퓨터네트워크 기말고사 대비용 정적 CBT 사이트입니다.

## 학습 범위

- Chapter 05 MAC 계층
- Chapter 06 데이터 링크 계층
- Chapter 07 IP 프로토콜
- Chapter 08 네트워크 계층
- Chapter 09 TCP 프로토콜
- Chapter 10 전송 계층
- Chapter 11 상위 계층

## 저작권/보안 원칙

- 원본 PDF는 개인 학습용 로컬 자료이며 저장소에 포함하지 않음.
- `source/textbook/중요 보안 문서.pdf`는 커밋/푸시하지 않습니다.
- 사이트에는 원문 복사가 아니라 요약정리, 개념 비교, 암기표, 변형 문제, 해설만 포함합니다.
- `source/exam-style/` 이미지는 문제 스타일 분석용 로컬 참고 자료이며 배포하지 않습니다.

## 구조

```text
index.html
notes/network-final/
cbt/network_final_mock.html
data/network_final_questions.js
review/wrong-notes.html
stats/study-record.html
assets/style.css
assets/storage.js
source/README.md
```

## 로컬 실행

```bash
python -m http.server 8000
```

확인 URL:

- http://localhost:8000/
- http://localhost:8000/notes/network-final/index.html
- http://localhost:8000/cbt/network_final_mock.html
- http://localhost:8000/review/wrong-notes.html
- http://localhost:8000/stats/study-record.html

## 학습 기록

브라우저 `localStorage`의 다음 키를 사용합니다.

```text
computerNetworkFinalStudyData
```

## GitHub Pages 설정

예상 접속 주소:

```text
https://insuham0315.github.io/ComputerNetwork_CBT/
```

GitHub 웹에서 설정하는 방법:

1. 저장소 `Settings`로 이동
2. `Pages` 메뉴 선택
3. `Build and deployment`에서 다음 중 하나 선택
   - 간단 배포: `Deploy from a branch` → `main` → `/root`
   - Actions 배포: `GitHub Actions` 선택 후 포함된 `.github/workflows/pages.yml` 사용
4. 저장 후 배포가 끝날 때까지 기다립니다.
