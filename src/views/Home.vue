<template>
  <div class="jumbotron mb-0 paper">
    <h1 class="text-center font-weight-bold display-3">New Blog Post</h1>
    <form class="d-flex flex-column">
      <label @submit.enter="publish" class="text-dark font-weight-bold"
        >Blog title:</label
      >
      <input
        class="p-2 border"
        type="text"
        v-model="newBlogPost.title"
        required
        placeholder="e.g: How to learn Python in one 'hour' NOW"
      />
      <label class="text-dark font-weight-bold">Blog content:</label>
      <textarea
        class="p-3 mb-4 border"
        cols="30"
        rows="10"
        v-model="newBlogPost.content"
        placeholder="Write your new blog here..."
        required
        @keydown.enter="publish"
      ></textarea>
      <input
        class="btn btn-primary"
        @click="publish"
        type="submit"
        value="Publish"
      />
    </form>
  </div>
</template>

<script>
import uuid from "uuid/v1";

export default {
  name: "Home",
  data() {
    return {
      allBlogPosts: [],
      newBlogPost: {
        id: uuid(),
        title: "",
        content: "",
        show: false,
      },
    };
  },
  mounted() {
    localStorage.setItem(
      "allBlogPosts",
      JSON.stringify([
        {
          id: 1,
          title: "Learn some thing ",
          content: "Learn something",
          show: false,
        },
        {
          id: 2,
          title: "Learn some thing ",
          content: "Learn something",
          show: false,
        },
        {
          id: 3,
          title: "Learn some thing ",
          content: "Learn something",
          show: false,
        },
      ])
    );
  },
  created() {
    this.allBlogPosts = JSON.parse(localStorage.getItem("allBlogPosts") || []);
  },
  methods: {
    publish: function() {
      if (this.newBlogPost.title !== "" && this.newBlogPost.content !== "") {
        this.allBlogPosts.unshift(this.newBlogPost);
        localStorage.setItem("allBlogPosts", JSON.stringify(this.allBlogPosts));
        this.$router.replace({
          name: "Blog",
        });
      }
    },
  },
};
</script>

<style lang="scss">
.btn {
  font-size: 1.4rem;
}
</style>
