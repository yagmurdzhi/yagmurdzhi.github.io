const slugify = require("slugify");

module.exports = class {
  data() {
    return {
      pagination: {
        data: "collections.postTags",
        size: 1,
        alias: "tag"
      },
      permalink: data => `/tags/${slugify(data.tag, { lower: true })}/`,
      layout: "posts-by-tag.njk",
      eleventyComputed: {
        posts: data => data.collections[data.tag] || []
      }
    };
  }

  render() {
    return "";
  }
};