import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persist";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [
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
    ],
  },
  plugins: [
    new createPersistedState({
      path: ["blogs"],
    }).plugin,
  ],

  mutations: {
    addNewBlog(state, item) {
      return state.blogs.unshift(item);
    },
  },
  getters: {
    getBlogs(state) {
      return state.blogs;
    },
  },
  actions: {},
  modules: {},
});
