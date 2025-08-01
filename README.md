## 부하 테스트 실행 방법

1. 로컬 환경에 **k6**를 다운 받습니다.
2. 아래 명령어를 스크립트에 입력합니다.
```
npm install -g dotenv-cli // 설치
dotenv -e .env -- k6 run ./scripts/user.js 
```
3. 실행 결과는 아래와 같습니다.(실패하는 상황)
<img width="843" height="567" alt="image" src="https://github.com/user-attachments/assets/69f11057-afd4-4327-9495-fc03640dd675" />
