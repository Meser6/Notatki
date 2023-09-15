import request from "../config/supertest";
import * as asserations from "../helpers/asserations";
import * as dataTemplate from "../helpers/dataTemplate";
import { someData } from "../mocha.config";

const urlPart = "/api/costam";

describe("przykladowe testy", () => {
  before(() => {
    console.log("testy rozpoczete");
  });

  it("przykladowy test", async () => {
    const { body, ...resp } = await request.get(`${urlPart}/new`); // dzieki destrukturyzacji mamy od razu podzial na body i na reszte
    asserations.shouldBeEmptyArray(body); // a z assercji korzystamy w ten sposob
  });
  it("test z wyslaniem body", async () => {
    const { body, ...resp } = await request
      .post(`${urlPart}/new`)
      .send(dataTemplate.bodyDoPierwszegoRequesta); // wyslanie gotowego body

    const { body2, ...resp2 } = await request
      .post(`${urlPart}/new`)
      .send(dataTemplate.bodyZParametrem("bob")); // wyslanie gotowego body ale z parametrem

    //jesli chcemy zmodyfikowac body to trzeba go wrzucic do zmiennej a nastepnie ja wyslac
    const data = dataTemplate.bodyDoPierwszegoRequesta;
    delete data.type;
    data.option = "add";

    const { body3, ...resp3 } = await request.post(`${urlPart}/new`).send(data);
  });
});
