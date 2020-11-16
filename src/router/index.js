import Vue from "vue";
import VueRouter from "vue-router";

//*COMPONENTS
import NewBlogPost from "../components/NewBlogPost.vue";
import Blog from "../components/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NewBlogPost",
    component: NewBlogPost,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
