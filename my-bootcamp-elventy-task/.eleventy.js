// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("posts/*.md");
  });
    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };

  