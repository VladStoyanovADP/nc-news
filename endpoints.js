module.exports = [
  {
    "GET /api": {
      description:
        "serves up a json representation of all the available endpoints of the api",
    },
    "GET /api/topics": {
      description:
        "Responds with an array of topic objects, each of which should have the following properties: slug and description",
      queries: [],
      exampleResponse: {
        topics: [
          {
            slug: "coding",
            description: "Code is love, code is life",
          },
          {
            slug: "football",
            description: "FOOTIE!",
          },
          {
            slug: "cooking",
            description: "Hey good looking, what you got cooking?",
          },
        ],
      },
    },
    "GET /api/articles": {
      description: "Responds with an array of all article objects",
      queries: ["author", "topic", "sort_by", "order"],
      exampleResponse: {
        articles: [
          {
            title: "Running a Node App",
            topic: "coding",
            author: "jessjelly",
            body: "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
            created_at: "2020-11-22T11:13:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
            comment_count: 10,
          },
          {
            title:
              "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
            topic: "coding",
            author: "jessjelly",
            body: "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.",
            created_at: "2020-11-22T11:13:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=700&h=700",
            comment_count: 10,
          },
          {
            title: "22 Amazing open source React projects",
            topic: "coding",
            author: "happyamy2016",
            body: "This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.",
            created_at: "2020-11-22T11:13:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?w=700&h=700",
            comment_count: 20,
          },
        ],
      },
    },
    "GET /api/users": {
      description: "Responds with an array of all users",
      exampleResponse: {
        users: [
          {
            username: "tickle122",
            name: "Tom Tickle",
            avatar_url:
              "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
          },
          {
            username: "grumpy19",
            name: "Paul Grump",
            avatar_url:
              "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
          },
          {
            username: "happyamy2016",
            name: "Amy Happy",
            avatar_url:
              "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
          },
        ],
      },
    },
    "GET /api/users/:user_id": {
      description: "Responds with a specific user",
      exampleResponse: {
        user: {
          username: "tickle122",
          name: "Tom Tickle",
          avatar_url:
            "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
        },
      },
    },
    "GET /api/articles/:id": {
      description:
        "Responds with an article object with following properties: author, title, article_id, body, topic, created_at, votes.",
      queries: [],
      exampleResponse: {
        article: {
          article_id: 3,
          title: "Please stop worrying about Angular 3",
          topic: "coding",
          author: "jessjelly",
          body: "Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          article_img_url:
            "https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?w=700&h=700",
          comment_count: 5,
        },
      },
    },
    "PATCH /api/articles/:id": {
      description:
        "Request body accepts: an object in the example below and it will increment the votes based on article_id.",
      "body example": { inc_votes: "newVote" },
      queries: [],
      exampleResponse: {
        updated_article: {
          article_id: 3,
          title: "Please stop worrying about Angular 3",
          topic: "coding",
          author: "jessjelly",
          body: "Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          article_img_url:
            "https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?w=700&h=700",
          votes: 4,
        },
      },
    },
    "GET /api/articles/:id/comments": {
      description:
        "Responds with an array of comments for the given article_id and each comment will have the following properties: comment_id, votes, created_at, author, body",
      queries: [],
      exampleResponse: {
        comments: [
          {
            body: "Aut esse incidunt laborum enim nam voluptas enim deleniti dolores. Neque voluptas voluptatem. Est quia itaque aut est laudantium dolor. Esse vitae eum iste ut mollitia officiis architecto quo autem. Accusamus quod maiores quia incidunt veniam. Rerum adipisci sed quasi labore neque sit rem quam.",
            votes: 4,
            author: "happyamy2016",
            article_id: 5,
            created_at: "2020-08-10T12:15:00.000Z",
          },
          {
            body: "Alias quos temporibus. Non non facere hic eligendi totam placeat. Distinctio aliquid voluptates aut aperiam aut est inventore error tenetur. Totam et eos vel in quos asperiores vero cumque tempora. Eligendi nihil deleniti iusto laborum velit neque dolore.",
            votes: 20,
            author: "cooljmessy",
            article_id: 5,
            created_at: "2020-08-10T12:15:00.000Z",
          },
          ,
        ],
      },
    },
    "POST /api/articles/:id/comments": {
      description:
        "Request body accepts: an object in the example below and it will respond with the posted comment. Username must exist in the database.",
      "body example": {
        username: "master",
        body: "Alias quos temporibus",
      },
      queries: [],
      exampleResponse: {
        insertedComment: {
          comment_id: 301,
          body: "Alias quos temporibus",
          article_id: 2,
          author: "master",
          votes: 0,
          created_at: "2022-10-13T20:57:16.487Z",
        },
      },
    },
    "POST /api/topics": {
      description:
        "Request body accepts: an object in the example below and it will respond with all the topics including the new one.",
      "body example": {
        body: "Alias quos temporibus",
      },
      queries: [],
      exampleResponse: {
        topics: [
          {
            slug: "coding",
            description: "Code is love, code is life",
          },
          {
            slug: "football",
            description: "FOOTIE!",
          },
          {
            slug: "cooking",
            description: "Hey good looking, what you got cooking?",
          },
          {
            slug: "new",
            description: "new topic guys!",
          },
        ],
      },
    },
    "PATCH /api/articles/:id/comments": {
      description:
        "Request body accepts: an object in the example below and it will increment the votes based on article_id.",
      "body example": { inc_votes: "newVote" },
      queries: [],
      exampleResponse: {
        article: {
          article_id: 3,
          title: "Please stop worrying about Angular 3",
          topic: "coding",
          author: "jessjelly",
          body: "Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 1,
          article_img_url:
            "https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?w=700&h=700",
          comment_count: 5,
        },
      },
    },
    "POST /api/articles": {
      description:
        "Request body accepts: an object in the example below and it will respond with the posted article.",
      "body example": {
        body: "Alias quos temporibus",
      },
      queries: [],
      exampleResponse: {
        article: {
          article_id: 3,
          title: "Please stop worrying about Angular 3",
          topic: "coding",
          author: "jessjelly",
          body: "Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 1,
          article_img_url:
            "https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?w=700&h=700",
          comment_count: 0,
        },
      },
    },
    "GET /api/articles (queries)": {
      description:
        "The endpoint accepts following queries and will display the results.",
      queries: ["sort_by", "order"],
      "valid sort_by queries": [
        "title",
        "topic",
        "author",
        "body",
        "votes",
        "created_at",
      ],
      "valid order queries": ["asc", "desc"],
      "exampleResponse for sort_by=author": {
        articles: [
          {
            author: "weegembump",
            title: "Seafood substitutions are increasing",
            article_id: 33,
            topic: "cooking",
            created_at: "2020-09-16T16:26:00.000Z",
            votes: 0,
            comment_count: 6,
          },
          {
            author: "jessjelly",
            title: "Who are the most followed clubs and players on Instagram?",
            article_id: 19,
            topic: "football",
            created_at: "2020-09-13T12:02:00.000Z",
            votes: 0,
            comment_count: 13,
          },
          {
            author: "jessjelly",
            title:
              "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
            article_id: 2,
            topic: "coding",
            created_at: "2020-05-14T00:02:00.000Z",
            votes: 4,
            comment_count: 7,
          },
          {
            author: "happyamy2016",
            title: "High Altitude Cooking",
            article_id: 28,
            topic: "cooking",
            created_at: "2020-01-04T00:24:00.000Z",
            votes: 0,
            comment_count: 5,
          },
          {
            author: "happyamy2016",
            title: "Who Will Manage Your Club in 2021?",
            article_id: 14,
            topic: "football",
            created_at: "2020-06-24T14:14:00.000Z",
            votes: 0,
            comment_count: 3,
          },
          {
            author: "grumpy19",
            title: "Learn HTML5, CSS3, and Responsive WebSite Design in One Go",
            article_id: 9,
            topic: "coding",
            created_at: "2020-05-26T14:06:00.000Z",
            votes: 0,
            comment_count: 8,
          },
          {
            author: "grumpy19",
            title: "Halal food: Keeping pure and true",
            article_id: 32,
            topic: "cooking",
            created_at: "2020-06-18T20:08:00.000Z",
            votes: 0,
            comment_count: 5,
          },
        ],
      },
    },
    "DELETE /api/comments/:comment_id": {
      description: "Delete the given comment by comment_id.",
      queries: [],
    },
    "DELETE /api/articles/:id": {
      description: "Delete the given article by id.",
      queries: [],
    },
  },
];
