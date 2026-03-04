module.exports = class {
  data() {
    return {
      layout: "author-anna.njk",
      permalink: "/yahmurdzhy-anna/",
      eleventyComputed: {
        posts: data =>
          data.collections.posts
            .filter(post => post.data.author === "yahmurdzhy-anna")
            .sort((a, b) => b.date - a.date) // сортировка по убыванию даты
            .slice(0, 3) // берём только 3 последних
      }
    };
  }

  render() {
    return "";
  }
};
