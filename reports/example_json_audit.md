# 예제json 감사 보고서

- 생성 시각: 2026-06-16 14:59:38
- 기준 폴더: `source/예제json/`
- 파일별 `questions` 배열을 표준 seed 후보로 해석했다.

## 1. 파일 목록 및 파싱 결과

| 파일 | 파싱 | chapter | title | answerType | 데이터 수 |
|---|---:|---:|---|---|---:|
| `10장_선다형.json` | 성공 | 10 | 전송 계층 (UDP, RTP, OSI TP) | select-correct | 9 |
| `11장_선다형.json` | 성공 | 11 | 상위 계층 (세션·표현·응용 계층) | select-incorrect | 9 |
| `5장_선다형.json` | 성공 | 5 | MAC 계층 | select-incorrect | 14 |
| `6장_선다형.json` | 성공 | 6 | 데이터 링크 계층 | select-correct | 12 |
| `7장_선다형.json` | 성공 | 7 | IP 프로토콜 | select-incorrect | 16 |
| `8장_선다형.json` | 성공 | 8 | 네트워크 계층 (IPv6, ARP/RARP, ICMP, IGMP) | select-correct | 10 |
| `9장_선다형.json` | 성공 | 9 | TCP 프로토콜 | select-incorrect | 11 |

## 2. Chapter별 데이터 개수

- Chapter 05: 14개
- Chapter 06: 12개
- Chapter 07: 16개
- Chapter 08: 10개
- Chapter 09: 11개
- Chapter 10: 9개
- Chapter 11: 9개

## 3. seed 사용성

- high: 72개
- uncertain: 9개
- 문제 생성에 바로 사용할 수 있는 high seed: 72개
- 표현 보강이 필요한 seed: 9개

## 4. 중복 항목
- 동일 question 기준 중복 없음

## 5. 누락 필드
- 필수 필드 누락 없음

## 6. 최종 사용 요약
- Chapter 05~11 JSON 파일 7개가 모두 파싱 성공했다.
- high seed는 직접 근거로 사용했고, uncertain seed는 교재 범위 개념을 보강해 medium 문항에만 반영했다.
- 예제json 문장/선택지는 그대로 복사하지 않고 기말고사 대비용 문항으로 재구성했다.
