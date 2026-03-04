module.exports = class {
  data() {
    return {
      layout: "index.njk",        // шаблон страницы
      permalink: "/",             // главная страница
      eleventyComputed: {
        latestPosts: data =>
          data.collections.posts
            .sort((a, b) => b.date - a.date)  // сортируем по дате убыванию
            .slice(0, 3)                      // берём 3 статьи
      }
    };
  }

  render() {
    return "";
  }
};
