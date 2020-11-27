<template>
  <div class="jumbotron mb-0 paper h-100">
    <Header header="New Blog Post" />
    <form class="d-flex flex-column">
      <label class="text-dark font-weight-bold">Blog title:</label>
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
      ></textarea>
      <input
        class="btn btn-primary"
        @click="addNewBlog"
        type="submit"
        value="Publish"
      />
    </form>
  </div>
</template>

<script>
import uuid from "uuid/v1";
import Header from "./Header";

export default {
  name: "NewBlogPost",
  components: {
    Header,
  },
  data() {
    return {
      newBlogPost: {
        id: uuid(),
        title: "",
        content: "",
        show: false,
      },
    };
  },
  methods: {
    addNewBlog() {
      this.$store.commit("addNewBlog", this.newBlogPost);
    },
  },
};
</script>

<style lang="scss">
.btn {
  font-size: 1.4rem;
  width: 10rem;
}

label {
  font-size: 1.4rem;
}

[type="text"] {
  margin-bottom: 0.5rem;
}
</style>
