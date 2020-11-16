<template>
  <div class="blog container-fluid text-center mb-0 paper">
    <Header header="All Blog Posts" />
    <ul class="list-unstyled mb-0 p-3">
      <li class="item p-2 mb-3" v-for="item in newPosts" :key="item.id">
        <h2 class="display-4 text-dark cursor" @click="item.show = !item.show">
          {{ item.title }}
        </h2>

        <div
          @click="item.show = !item.show"
          class="modal-box  flex-column"
          :class="item.show ? 'show' : 'hidden'"
        >
          <h2>{{ item.title }}</h2>

          <div class="modal-text">
            <p class="p-4">{{ item.content }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Blog",
  components: {
    Header,
  },
  data() {
    return {
      newPosts: [],
    };
  },
  created() {
    this.newPosts = JSON.parse(localStorage.getItem("allBlogPosts") || []);
  },
};
</script>

<style lang="scss">
.blog {
  overflow: scroll;
  height: 100vh;
}

.modal-text {
  font-size: 1.3rem;
  line-height: 2rem;
  width: 100%;
  text-align: left;
  max-height: 50%;
}

.cursor {
  cursor: pointer;
  display: inline-block;
  transition: 0.3s linear;
  &:hover {
    transform: scale(1.1);
    color: rgb(0, 153, 255) !important;
  }
}

.modal-box {
  background: rgba(44, 44, 44, 0.952);
  display: flex;
  width: 90%;
  height: 90%;
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  overflow: scroll;

  h2 {
    margin-top: 2rem;
    font-size: 3rem;
  }
}

.modal-box::-webkit-scrollbar {
  display: none;
}

.hidden {
  display: none;
}
.show {
  display: flex;
}

.item {
  box-shadow: 0 0px 3px rgb(209, 209, 209);
}
</style>
