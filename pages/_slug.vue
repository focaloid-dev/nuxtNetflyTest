<template>
  <div>
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug || "index").fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      console.log('error', e)
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>
