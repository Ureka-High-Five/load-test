import { sleep } from 'k6';
import * as client from './httpClient.js';

export const options = {
    vus: 1,
    duration: '1s',
};

export default function () {
    authReissue();
}

function authReissue() {
    const loginBody = {
        refreshToken: ''
    };

    const res = client.post('/auth/reissue', loginBody);
    console.log(res);
    sleep(1);
}