## 부하 테스트 실행 방법

1. 로컬 환경에 **k6**를 다운 받습니다.
2. 아래 명령어를 스크립트에 입력합니다.
```
npm install -g dotenv-cli // 설치
dotenv -e .env -- k6 run ./scripts/auth.js  // auth.js 이 부분은 본인이 생성한 스크립트를 기준으로 이름 변경
cross-env $(Get-Content .env | Where-Object { $_ -match '=' }) k6 run ./scripts/auth.js //윈도우

```
3. 실행 결과는 아래와 같습니다.(성공하는 상황 - 토큰 재발급)
<img width="1256" height="553" alt="image" src="https://github.com/user-attachments/assets/96ef8035-14d4-4fcb-a65b-9106d40024d7" />
