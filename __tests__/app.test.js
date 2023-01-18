const request = require("supertest");
const app = require("../app");
const seed = require("../db/seeds/seed");
const db = require("../db/connection");
const index = require("../db/data/test-data/index");

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

    test("checks whether the response's length correct", () => {
      return request(app)
        .get("/api/topics")
        .then((res) => {
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

  test("checks whether the response's length is correct", () => {
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

    test("checks the type of the values", () => {
      return request(app)
        .get("/api/articles")
        .then((res) => {
          res.body.articles.forEach((article) => {
            expect(typeof article.title).toBe("string");
            expect(typeof article.topic).toBe("string");
            expect(typeof article.author).toBe("string");
            expect(typeof article.article_id).toBe("number");
            expect(typeof article.body).toBe("string");
            expect(typeof article.created_at).toBe("string");
            expect(typeof article.votes).toBe("number");
            expect(typeof article.article_img_url).toBe("string");
            expect(typeof article.comment_count).toBe("string");
          });
        });
    });

    test("GET: /api/articles?topic=coding, 200: accepts the coding query", () => {
      return request(app)
        .get("/api/articles?topic=coding")
        .expect(200)
        .then((res) => {
          const articles = res.body.articles;
          articles.forEach((article) => {
            expect(article.topic).toBe("coding");
          });
        });
    });

    test("GET: /api/articles?sort_by=title, 200: accepts the sort_by by query", () => {
      return request(app)
        .get("/api/articles?sort_by=title")
        .expect(200)
        .then((res) => {
          const articles = res.body.articles;
          expect(articles[0].title).toBe("Z");
        });
    });
});

describe("get /api/articles/:id", () => {
  test("responds with status 200", () => {
    return request(app).get("/api/articles/3").expect(200);
  });

  test("checks whether each article has the correct keys", () => {
    return request(app)
      .get("/api/articles/3")
      .then((res) => {
        let article = res.body.article;
        expect(article).toHaveProperty("title");
        expect(article).toHaveProperty("topic");
        expect(article).toHaveProperty("author");
        expect(article).toHaveProperty("article_id");
        expect(article).toHaveProperty("body");
        expect(article).toHaveProperty("created_at");
        expect(article).toHaveProperty("votes");
        expect(article).toHaveProperty("article_img_url");
        expect(article).toHaveProperty("comment_count");
      });
  });

  
  test("checks the type of the values", () => {
    return request(app)
      .get("/api/articles/3")
      .then((res) => {
        let article = res.body.article;
        expect(typeof article.title).toBe("string");
        expect(typeof article.topic).toBe("string");
        expect(typeof article.author).toBe("string");
        expect(typeof article.article_id).toBe("number");
        expect(typeof article.body).toBe("string");
        expect(typeof article.created_at).toBe("string");
        expect(typeof article.votes).toBe("number");
        expect(typeof article.article_img_url).toBe("string");
        expect(typeof article.comment_count).toBe("string");
      });
  });
  test("checks whether the articles are ordered by date created", () => {
    return request(app)
      .get("/api/articles")
      .then((res) => {
        expect(res.body.articles).toBeSortedBy("created_at", {
          descending: true,
        });
      });
  });

  test("400: Should respond with Bad Request for invalid id", () => {
    const id = "dog";

    return request(app)
      .get(`/api/articles/${id}`)
      .expect(400)
      .then((res) => {
        expect(res.body.msg).toBe("Bad Request");
      });
  });

  test("404: Should respond with Not Found for id not in database ", () => {
    return request(app)
      .get(`/api/articles/999`)
      .expect(404)
      .then((res) => {
        expect(res.body.msg).toBe("Not Found");
      });
  });
});


describe("get /api/articles/:id/comments", () => {
  test("responds with status 200", () => {
    return request(app).get("/api/articles/3/comments").expect(200);
  });

  test("checks whether each article has the correct keys", () => {
    return request(app)
      .get("/api/articles/3/comments")
      .then((res) => {
        res.body.comments.forEach((comment) => {
          expect(comment).toHaveProperty("comment_id");
          expect(comment).toHaveProperty("votes");
          expect(comment).toHaveProperty("created_at");
          expect(comment).toHaveProperty("author");
          expect(comment).toHaveProperty("body");
          expect(comment).toHaveProperty("article_id");
        });
      });
  });

  test("checks the type of the values", () => {
    return request(app)
      .get("/api/articles/3/comments")
      .then((res) => {
        res.body.comments.forEach((comment) => {
          expect(typeof comment.comment_id).toBe("number");
          expect(typeof comment.votes).toBe("number");
          expect(typeof comment.created_at).toBe("string");
          expect(typeof comment.author).toBe("string");
          expect(typeof comment.body).toBe("string");
          expect(typeof comment.article_id).toBe("number");
        });
      });
  });

  test("checks whether the articles are ordered by date created", () => {
    return request(app)
      .get("/api/articles/3/comments")
      .then((res) => {
        expect(res.body.comments).toBeSortedBy("created_at", {
          descending: true,
        });
      });
  });

  test("400: Should respond with Bad Request for invalid id", () => {
    const id = "dog";

    return request(app)
      .get(`/api/articles/${id}/comments`)
      .expect(400)
      .then((res) => {
        expect(res.body.msg).toBe("Bad Request");
      });
  });

  test("404: Should respond with Not Found for id not in database ", () => {
    return request(app)
      .get(`/api/articles/999/comments`)
      .expect(404)
      .then((res) => {
        expect(res.body.msg).toBe("Not Found");
      });
  });
});

describe("POST", () => {
  test('201: Should respond with newly created comment object when passed a "body" and "username"', () => {
    return request(app)
      .post(`/api/articles/3/comments`)
      .send({
        body: "double paddy",
        username: "butter_bridge",
      })
      .expect(201)
      .then((res) => {
        const comment = res.body.comment;
        expect(comment).toHaveProperty("comment_id");
        expect(comment).toHaveProperty("votes");
        expect(comment).toHaveProperty("created_at");
        expect(comment).toHaveProperty("author", "butter_bridge");
        expect(comment).toHaveProperty("body", "double paddy");
        expect(comment).toHaveProperty("article_id", 3);
      });
  });

  test("400: Should respond with bad request for invalid body on req", () => {
    return request(app)
      .post(`/api/articles/3/comments`)
      .send({
        notBody: "I hope that their first child, be a masculine child.",
        username: "The Godfather",
      })
      .expect(400)
      .then((res) => {
        expect(res.body.msg).toBe("Bad Request");
      });
  });

  test("404: Should respond with not found for a id that does not have corresponding article", () => {
    return request(app)
      .post(`/api/articles/999/comments`)
      .send({
        body: "I hope that their first child, be a masculine child.",
        username: "The Godfather",
      })
      .expect(404)
      .then((res) => {
        expect(res.body.msg).toBe("Not Found");
      });
  });
});

describe("PATCH", () => {
  test("200: Should respond with the updated object with incremented votes", () => {
    return request(app)
      .patch(`/api/articles/1`)
      .send({ inc_votes: 20 })
      .expect(200)
      .then((res) => {
        const article = res.body.article;

        expect(article).toHaveProperty("author");
        expect(article).toHaveProperty("title");
        expect(article).toHaveProperty("article_id", 1);
        expect(article).toHaveProperty("body");
        expect(article).toHaveProperty("topic");
        expect(article).toHaveProperty("created_at");
        expect(article).toHaveProperty("votes", 120);
        expect(article).toHaveProperty("article_img_url");
      });
  });

  test("400: Should respond with bad request for invalid body", () => {
    return request(app)
      .patch(`/api/articles/1`)
      .send({ ic_votes: 20 })
      .expect(400)
      .then((res) => {
        expect(res.body.msg).toBe("Bad Request");
      });
  });

  test("404: Should respond with not found for an id which is not in the database", () => {
    return request(app)
      .patch(`/api/articles/99219`)
      .send({ inc_votes: 20 })
      .expect(404)
      .then((res) => {
        expect(res.body.msg).toBe("Not Found");
      });
  });
});

describe("get /api/users", () => {
  test("responds with status 200", () => {
    return request(app).get("/api/users").expect(200);
  });
  test("rchecks whether each users has the correct keys", () => {
    return request(app)
      .get("/api/users")
      .then((res) => {
        res.body.users.forEach((user) => {
          expect(user).toHaveProperty("username");
          expect(user).toHaveProperty("name");
          expect(user).toHaveProperty("avatar_url");
        });
      });
  });

  test("checks whether the response's length is bigger than 0", () => {
    return request(app)
      .get("/api/users")
      .then((res) => {
        expect(res.body.users.length).toBe(index.userData.length);
      });
  });
});

describe("DELETE", () => {
  test("should delete the comment with the given id and respond with status 204", () => {
    return request(app).delete("/api/comments/3").expect(204).then(res =>
    {
      expect(res.noContent).toBe(true);
    })
  });

    test("400: Should respond with bad request for invalid body", () => {
      return request(app)
        .delete(`/api/comments/dog`)
        .expect(400)
        .then((res) => {
          expect(res.body.msg).toBe("Invalid argument. ID must be a number.");
        });
    });

    test("404: Should respond with not found for an id which is not in the database", () => {
      return request(app)
        .delete(`/api/comments/9391299`)
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe(
            `Could not delete: a comment with an ID of 9391299 does not exist.`
          );
        });
    });
});

describe("GET /api", () => {
  test("200: Should respond with the correct status code", () => {
  return request(app)
    .get(`/api`)
    .expect(200)
    });
});

describe("GET /api/users/:username", () => {
  test("should respond with an object which should have the following properties: username, avatar_url, name.", () => {
    return request(app)
      .get(`/api/users/rogersop`)
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.user).toMatchObject({
          username: `rogersop`,
          name: "paul",
          avatar_url:
            "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
        });
      });
  });

  test("404: Should respond with not found for an id which is not in the database", () => {
    return request(app)
      .get(`/api/users/notindb`)
      .expect(404)
      .then((res) => {
        expect(res.body.msg).toBe("Username not found in database.");
      });
  });
});


