const request = require("supertest");
const app = require("./app");
const seed = require("../seeds/seed");
const db = require("../connection");
const index = require("../data/test-data/index");

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
  test("rchecks whether each article has the correct keys", () => {
    return request(app)
      .get("/api/topics")
      .then((res) => {
        res.body.topics.forEach((topic) => {
          expect(topic).toHaveProperty("description");
          expect(topic).toHaveProperty("slug");
        });
      });
  });

    test("checks whether the response's length is bigger than 0", () => {
      return request(app)
        .get("/api/topics")
        .then((res) =>
        {
          console.log(index)
          expect(res.body.topics.length).toBe(index.topicData.length);
        });
    });
});

describe("get /api/articles", () => {

  test("responds with status 200", () => {
    return request(app).get("/api/articles").expect(200);
  });

  test("checks whether each article has the correct keys", () => {
    return request(app)
      .get("/api/articles")
      .then((res) =>
      {
        res.body.articles.forEach(article =>
        {
          expect(article).toHaveProperty("title");
          expect(article).toHaveProperty("topic");
          expect(article).toHaveProperty("author");
          expect(article).toHaveProperty("article_id");
          expect(article).toHaveProperty("body");
          expect(article).toHaveProperty("created_at");
          expect(article).toHaveProperty("votes");
          expect(article).toHaveProperty("article_img_url");
          expect(article).toHaveProperty("comment_count")
        })
      });
  });

  test("checks whether the response's length is bigger than 0", () => {
    return request(app)
      .get("/api/articles")
      .then((res) => {
        expect(res.body.articles.length).toBe(index.articleData.length);
      });
  });

  test("checks the type of the values", () => {
    return request(app)
      .get("/api/articles")
      .then((res) =>
      {
        res.body.articles.forEach(article =>
        {
          expect(typeof article.title).toBe("string");
          expect(typeof article.topic).toBe("string");
          expect(typeof article.author).toBe("string");
          expect(typeof article.article_id).toBe("number");
          expect(typeof article.body).toBe("string");
          expect(typeof article.created_at).toBe('string');
          expect(typeof article.votes).toBe("number");
          expect(typeof article.article_img_url).toBe("string");
          expect(typeof article.comment_count).toBe("string");
        })
      });
  });

   test("checks whether the articles are ordered by date created", () => {
     return request(app)
       .get("/api/articles")
       .then((res) => {
          expect(res.body.articles).toBeSortedBy("created_at", {
            descending: true
          });
       });
   });
});