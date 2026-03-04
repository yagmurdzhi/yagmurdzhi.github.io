module.exports = {
  eleventyComputed: {
    relatedPosts: data => {
      const allPosts = data.collections.posts;
      const currentUrl = data.page.url;

      // Фильтруем: не текущая статья
      const others = allPosts.filter(post => post.url !== currentUrl);

      // Перемешиваем и берём 3 случайных
      const shuffled = others.sort(() => 0.5 - Math.random());

      return shuffled.slice(0, 3);
    }
  }
};
