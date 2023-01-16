const request = require("supertest");
const app = require("./app");
const seed = require("../seeds/seed");
const db = require("../connection");
const index = require("../data/test-data/index");;

beforeEach(() => {
    return seed(index);
});

afterAll(() => {
  db.end();
});

describe("get /api/topics", () => {
  test("responds with status 200", () => {
    return request(app).get("/api/topics").expect(200);
  });
  test("returns correct body", () => {
    return request(app)
      .get("/api/topics")
      .then((res) => {
        const topic = res.body.topics[0];
        expect(topic).toHaveProperty("description");
        expect(topic).toHaveProperty("slug");
      });
  });
});
