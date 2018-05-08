import http from "k6/http";
import { check, fail } from "k6";

const baseURL = "https://accounts.jenkins.io";

export let options = {
    vus: 100,
    iterations: 5000,
    rps: 30,
    maxRedirects: 10,
    hosts: {
      "accounts.jenkins.io": `${__ENV.ENDPOINT_IP}`
    }
};


export default function() {
  let formdata= {
    userid: `${__ENV.USERID}`,
    password: `${__ENV.PASSWORD}`,
  }

  let res = http.post(baseURL + "/doLogin", formdata );
  check(res, {
    "login succeeded": (res) => res.url == `${baseURL}/`,
    "response code == 200 ": (res) => res.status == 200,
    "response time lower than 3 sec": (res) => res.timings.waiting <= 3000
  }) || fail("login failed");

};
