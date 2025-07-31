import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 10, // 동시에 요청할 유저 수
    duration: '10s', // 테스트 시간
};

export default function () {
    const res = http.get('http://YOUR_SERVER_URL/api/health');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}