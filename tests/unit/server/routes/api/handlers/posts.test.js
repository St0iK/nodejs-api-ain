const postHandler = require('../../../../../../server/routes/api/handlers/post');
const Post = require('../../../../../../server/models/Post');

Post.

  describe("Test post handler", () => {
    it("should have a getPosts function", () => {
      expect(typeof postHandler.getPosts).toBe("function");
    })

    it("should have a getPosts function", () => {
      // https://github.com/alonronin/mockingoose/blob/master/README.md
      // Chaining mockingoose#ModelName operations
      expect(typeof postHandler.getPosts).toBe("function");
    })
  })