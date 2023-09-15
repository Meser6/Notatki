import supertest from "supertest";
import { baseUrl } from "../mocha.config";

const request = supertest(baseUrl);

export default request; // przygotowanie gotowej funkcji to wysylania requestow
