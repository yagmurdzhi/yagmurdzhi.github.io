const slugify = require("slugify");

module.exports = class {
  data() {
    return {
      pagination: {
        data: "collections.gameTags",
        size: 1,
        alias: "tag"
      },
      permalink: data => `/games-tags/${slugify(data.tag, { lower: true })}/`,
      layout: "games-by-tag.njk",
      eleventyComputed: {
        posts: data => data.collections[data.tag] || []
      }
    };
  }

  render() {
    return "";
  }
};