# CBT 문제 검증 및 재생성 보고서

- 생성 시각: 2026-06-16 14:59:38
- 기준 자료: `source/예제json/*.json`

## 1. 기존 문제 수
- 기존 문제 수: 140문항
- 기존 데이터는 한글 인코딩이 깨져 보이고 `sourceBasis`, `confidence`가 없어 근거 추적이 어려웠다.
- 기존 4지선다 문항이 42개로 많아 빈칸/모두 고르기/설명형 중심 요구에 맞지 않았다.

## 2. 유지/수정/삭제/신규 생성
| 구분 | 수 | 설명 |
|---|---:|---|
| 유지 | 0 | 기존 문항을 그대로 유지하지 않음 |
| 수정 | 0 | 부분 수정 대신 전량 재작성 |
| 삭제/제외 | 140 | 기존 문항을 최종 데이터에서 제외 |
| 새로 생성 | 140 | 예제json 기반 재구성 |
| 최종 문제 수 | 140 | Chapter 05~11 각 20문항 |

## 3. Chapter별 최종 문제 수
- Chapter 05: 20문항
- Chapter 06: 20문항
- Chapter 07: 20문항
- Chapter 08: 20문항
- Chapter 09: 20문항
- Chapter 10: 20문항
- Chapter 11: 20문항

## 4. 문제 유형별 최종 문제 수
- fill-blank: 49문항
- multi-select: 35문항
- explain: 28문항
- short-answer: 21문항
- multiple-choice: 7문항

## 5. 추적성/품질 검증
- sourceBasis 없는 문제 수: 0
- confidence low 문제 수: 0
- confidence high: 129문항
- confidence medium: 11문항
- 모든 최종 문제는 필수 필드와 유형별 필수 필드를 통과했다.

## 6. 예제json 기반 보강 개념
- Chapter 05 MAC 계층: `5장_선다형.json` 근거로 빈칸·모두 고르기·설명형·단답형 중심 재구성
- Chapter 06 데이터 링크 계층: `6장_선다형.json` 근거로 빈칸·모두 고르기·설명형·단답형 중심 재구성
- Chapter 07 IP 프로토콜: `7장_선다형.json` 근거로 빈칸·모두 고르기·설명형·단답형 중심 재구성
- Chapter 08 네트워크 계층: `8장_선다형.json` 근거로 빈칸·모두 고르기·설명형·단답형 중심 재구성
- Chapter 09 TCP 프로토콜: `9장_선다형.json` 근거로 빈칸·모두 고르기·설명형·단답형 중심 재구성
- Chapter 10 전송 계층: `10장_선다형.json` 근거로 빈칸·모두 고르기·설명형·단답형 중심 재구성
- Chapter 11 상위 계층: `11장_선다형.json` 근거로 빈칸·모두 고르기·설명형·단답형 중심 재구성

## 7. 검수 필요 문제 목록
- medium 문항은 예제json의 uncertain 항목 또는 표현 보강 필요 항목을 근거로 하므로 최종 시험 전 확인 권장:
  - CN-FINAL-002 Chapter 05 LLC (source/예제json/5장_선다형.json#Q01)
  - CN-FINAL-014 Chapter 05 LLC (source/예제json/5장_선다형.json#Q01)
  - CN-FINAL-058 Chapter 07 거리 벡터 (source/예제json/7장_선다형.json#Q10)
  - CN-FINAL-059 Chapter 07 링크 상태 (source/예제json/7장_선다형.json#Q10)
  - CN-FINAL-123 Chapter 11 동기점 (source/예제json/11장_선다형.json#Q03)
  - CN-FINAL-125 Chapter 11 표현 계층 (source/예제json/11장_선다형.json#Q05)
  - CN-FINAL-130 Chapter 11 동기와 재동기 (source/예제json/11장_선다형.json#Q03)
  - CN-FINAL-131 Chapter 11 표현 계층 (source/예제json/11장_선다형.json#Q05)
  - CN-FINAL-135 Chapter 11 동기점 (source/예제json/11장_선다형.json#Q03)
  - CN-FINAL-136 Chapter 11 표현 계층 (source/예제json/11장_선다형.json#Q05)
  - CN-FINAL-140 Chapter 11 표현 계층 (source/예제json/11장_선다형.json#Q05)

## 8. 이상했던 기존 문제 예시와 수정 이유
- 문제/해설의 한글 깨짐 → UTF-8 새 문항으로 교체.
- sourceBasis 부재 → 모든 문항에 예제json 파일명과 문항 번호를 기록.
- 4지선다 과다 → fill-blank 49, multi-select 35, explain 28, short-answer 21, multiple-choice 7로 조정.
