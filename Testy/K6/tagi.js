import http from "k6/http";
import { check } from "k6";
import { Counter } from "k6/metrics";

//*tags
// K6 kazdemu requestowi w tescie nadje szereg tagow takich jak method, status etc.
// dzieki temu kazdy z nich jest oddzielony i mozemy rozbic trecholdy na poszczegolne typy requestow
// a nie tylko globalnie na wszystkie requesty

export const options = {
  thresholds: {
    "http_req_duration{type:GET}": ["p(95)<500", "p(90)<400"], // tu sprawdzamy tylko gety
    "http_req_duration{status:201}": ["p(95)<1000", "p(90)<800"], // tu sprawdzamy tylko requesty ktore zwrocily status 201

    "http_req_duration{tag1:my_request}": ["p(95)<500"], // sprawdzamy tylko requesty z tagiem my_request maja dana szykosc
    "checks{tag2:myCheck}": ["rate>0.95"], // sprawdzi czy checki z tagiem myCheck przeszly w 95%
    "myCounter{tag3:myCounter}": ["count<1"], // sprawdzi
  },
};

export default function () {
  const response = http.get("https://test.k6.io"); // dostanie min tag method:GET

  //* Wlasne tagi
  //moezmy tworzyc wlasne tagi i nadwac je roznym rzeczom:

  //requestom
  const responseTag = http.get("https://test.k6.io", {
    tags: { tag1: "my_request" }, // kazdy request dostanie taki tag
  });

  //checkom
  check(
    response,
    {
      "status is 200": (r) => r.status === 200,
    },
    { tag2: "myCheck" }
  );

  //wlasnym metrykom
  const myCounter = new Counter("myCounter");

  if (response.error) {
    myCounter.add(1, { tag3: "myCounter" });
  }
}
