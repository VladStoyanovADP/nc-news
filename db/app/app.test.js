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

describe("get /api/articles", () => {
  test("responds with status 200", () => {
    return request(app).get("/api/articles").expect(200);
  });
  test("returns correct body", () => {
    return request(app)
      .get("/api/articles")
      .then((res) => {
        console.log(res.body)
        const article = res.body.articles[0];
        expect(article).toHaveProperty("title");
        expect(article).toHaveProperty("topic");
        expect(article).toHaveProperty("author");
        expect(article).toHaveProperty("article_id");
        expect(article).toHaveProperty("body");
        expect(article).toHaveProperty("created_at");
        expect(article).toHaveProperty("votes");
        expect(article).toHaveProperty("article_img_url");
      });
  });
});