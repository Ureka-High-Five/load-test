import http from 'k6/http';
import { check } from 'k6';

const defaultToken = __ENV.ACCESS_TOKEN;
const API_SERVER_URL = __ENV.API_SERVER_URL;
const API_CLIENT_URL = __ENV.CLIENT_URL;

function buildHeaders(withToken = true) {
    const headers = {
        'Content-Type': 'application/json',
        'Origin': API_CLIENT_URL,
    };

    if (withToken && defaultToken) {
        headers['Authorization'] = `Bearer ${defaultToken}`;
    }

    return headers;
}

export function get(url, withToken = true) {
    const res = http.get(API_SERVER_URL + url, { headers: buildHeaders(withToken) });
    check(res, { 'GET status is 200': (r) => r.status === 200 });
    return res;
}

export function post(url, body, withToken = true) {
    const res = http.post(API_SERVER_URL + url, JSON.stringify(body), {
        headers: buildHeaders(withToken),
    });
    check(res, { 'POST status is 200 or 201': (r) => r.status === 200 || r.status === 201 });
    return res;
}

export function put(url, body, withToken = true) {
    const res = http.put(API_SERVER_URL + url, JSON.stringify(body), {
        headers: buildHeaders(withToken),
    });
    check(res, { 'PUT status is 200 or 204': (r) => r.status === 200 || r.status === 204 });
    return res;
}

export function patch(url, body, withToken = true) {
    const res = http.patch(API_SERVER_URL + url, JSON.stringify(body), {
        headers: buildHeaders(withToken),
    });
    check(res, { 'PATCH status is 200': (r) => r.status === 200 });
    return res;
}

export function del(url, withToken = true) {
    const res = http.del(API_SERVER_URL + url, null, {
        headers: buildHeaders(withToken),
    });
    check(res, { 'DELETE status is 200 or 204': (r) => r.status === 200 || r.status === 204 });
    return res;
}