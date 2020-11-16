<template>
  <div class="jumbotron mb-0 paper h-100">
    <Header header="New Blog Post" />
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
import Header from "./Header";

export default {
  name: "NewBlogPost",
  components: {
    Header,
  },
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
          title: "Blog Post 1 ",
          content: `Ad in a. Dolor neque etiam ante eu hendrerit vehicula. Netus facilisis eleifend mi lectus id Lorem, ultricies. Aliquet metus phasellus tortor sollicitudin a pede dui vivamus. Curabitur cras. Feugiat. Feugiat. Penatibus sociis per ultricies lectus. Mollis.

Non laoreet augue tristique molestie ridiculus pulvinar ipsum, lectus urna laoreet orci class lorem tristique. Morbi enim nostra enim pulvinar nunc turpis turpis. Tristique venenatis massa platea nisi gravida duis. Sollicitudin cum vivamus ut.

Interdum auctor blandit lorem ornare suspendisse tempor nisi. At. Ut lacus, leo mattis ut augue. Pulvinar facilisis magna lacus sed. Conubia porttitor scelerisque lorem litora suscipit phasellus risus mattis.`,
          show: false,
        },
        {
          id: 2,
          title: "Blog Post 2 ",
          content: `Ad in a. Dolor neque etiam ante eu hendrerit vehicula. Netus facilisis eleifend mi lectus id Lorem, ultricies. Aliquet metus phasellus tortor sollicitudin a pede dui vivamus. Curabitur cras. Feugiat. Feugiat. Penatibus sociis per ultricies lectus. Mollis.

Non laoreet augue tristique molestie ridiculus pulvinar ipsum, lectus urna laoreet orci class lorem tristique. Morbi enim nostra enim pulvinar nunc turpis turpis. Tristique venenatis massa platea nisi gravida duis. Sollicitudin cum vivamus ut.

Interdum auctor blandit lorem ornare suspendisse tempor nisi. At. Ut lacus, leo mattis ut augue. Pulvinar facilisis magna lacus sed. Conubia porttitor scelerisque lorem litora suscipit phasellus risus mattis.
Ad in a. Dolor neque etiam ante eu hendrerit vehicula. Netus facilisis eleifend mi lectus id Lorem, ultricies. Aliquet metus phasellus tortor sollicitudin a pede dui vivamus. Curabitur cras. Feugiat. Feugiat. Penatibus sociis per ultricies lectus. Mollis.

Non laoreet augue tristique molestie ridiculus pulvinar ipsum, lectus urna laoreet orci class lorem tristique. Morbi enim nostra enim pulvinar nunc turpis turpis. Tristique venenatis massa platea nisi gravida duis. Sollicitudin cum vivamus ut.

Interdum auctor blandit lorem ornare suspendisse tempor nisi. At. Ut lacus, leo mattis ut augue. Pulvinar facilisis magna lacus sed. Conubia porttitor scelerisque lorem litora suscipit phasellus risus mattis.`,
          show: false,
        },
        {
          id: 3,
          title: "Blog Post 3",
          content: `Ad in a. Dolor neque etiam ante eu hendrerit vehicula. Netus facilisis eleifend mi lectus id Lorem, ultricies. Aliquet metus phasellus tortor sollicitudin a pede dui vivamus. Curabitur cras. Feugiat. Feugiat. Penatibus sociis per ultricies lectus. Mollis.

Non laoreet augue tristique molestie ridiculus pulvinar ipsum, lectus urna laoreet orci class lorem tristique. Morbi enim nostra enim pulvinar nunc turpis turpis. Tristique venenatis massa platea nisi gravida duis. Sollicitudin cum vivamus ut.

Interdum auctor blandit lorem ornare suspendisse tempor nisi. At. Ut lacus, leo mattis ut augue. Pulvinar facilisis magna lacus sed. Conubia porttitor scelerisque lorem litora suscipit phasellus risus mattis.
Ad in a. Dolor neque etiam ante eu hendrerit vehicula. Netus facilisis eleifend mi lectus id Lorem, ultricies. Aliquet metus phasellus tortor sollicitudin a pede dui vivamus. Curabitur cras. Feugiat. Feugiat. Penatibus sociis per ultricies lectus. Mollis.

Non laoreet augue tristique molestie ridiculus pulvinar ipsum, lectus urna laoreet orci class lorem tristique. Morbi enim nostra enim pulvinar nunc turpis turpis. Tristique venenatis massa platea nisi gravida duis. Sollicitudin cum vivamus ut.

Interdum auctor blandit lorem ornare suspendisse tempor nisi. At. Ut lacus, leo mattis ut augue. Pulvinar facilisis magna lacus sed. Conubia porttitor scelerisque lorem litora suscipit phasellus risus mattis.
Ad in a. Dolor neque etiam ante eu hendrerit vehicula. Netus facilisis eleifend mi lectus id Lorem, ultricies. Aliquet metus phasellus tortor sollicitudin a pede dui vivamus. Curabitur cras. Feugiat. Feugiat. Penatibus sociis per ultricies lectus. Mollis.

Non laoreet augue tristique molestie ridiculus pulvinar ipsum, lectus urna laoreet orci class lorem tristique. Morbi enim nostra enim pulvinar nunc turpis turpis. Tristique venenatis massa platea nisi gravida duis. Sollicitudin cum vivamus ut.

Interdum auctor blandit lorem ornare suspendisse tempor nisi. At. Ut lacus, leo mattis ut augue. Pulvinar facilisis magna lacus sed. Conubia porttitor scelerisque lorem litora suscipit phasellus risus mattis.
Ad in a. Dolor neque etiam ante eu hendrerit vehicula. Netus facilisis eleifend mi lectus id Lorem, ultricies. Aliquet metus phasellus tortor sollicitudin a pede dui vivamus. Curabitur cras. Feugiat. Feugiat. Penatibus sociis per ultricies lectus. Mollis.

Non laoreet augue tristique molestie ridiculus pulvinar ipsum, lectus urna laoreet orci class lorem tristique. Morbi enim nostra enim pulvinar nunc turpis turpis. Tristique venenatis massa platea nisi gravida duis. Sollicitudin cum vivamus ut.

Interdum auctor blandit lorem ornare suspendisse tempor nisi. At. Ut lacus, leo mattis ut augue. Pulvinar facilisis magna lacus sed. Conubia porttitor scelerisque lorem litora suscipit phasellus risus mattis.`,
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
  width: 10rem;
}

label {
  font-size: 1.4rem;
}

[type="text"] {
  margin-bottom: 0.5rem;
}
</style>
