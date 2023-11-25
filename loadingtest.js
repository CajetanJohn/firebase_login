import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 500,
  duration: '30s',
};

export default function () {
  let url = 'http://localhost:3000';
  let response = http.get(url);

  check(response, {
    'status is 2xx': (r) => r.status >= 200 && r.status < 300,
  });

  sleep(1);
}
