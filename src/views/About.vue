<template>
  <div class="jumbotron text-center mb-0 paper">
    <h1 class="display-3 p-3 font-weight-bold">All Blog Posts</h1>
    <ul class="list-unstyled w-100 mb-0 p-3">
      <li class="shadow-lg p-2 mb-5" v-for="item in newPosts" :key="item.id">
        <h2 class="display-4 cursor" @click="item.show = !item.show">
          {{ item.title.toUpperCase() }}
        </h2>

        <div
          @click="item.show = !item.show"
          class="modal hidde  jumbotron p-4 flex-column"
          :class="item.show ? 'show' : ''"
        >
          <h2>{{ item.title }}</h2>
          <div>
            <p class="modal-text p-4">{{ item.content }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 1rem;
  overflow-y: scroll;
}

.modal::-webkit-scrollbar {
  display: none;
}

.modal-text {
  font-size: 1.3rem;
  line-height: 2rem;
  height: 50vh;
}

.cursor {
  cursor: pointer;
  display: inline-block;
  transition: 0.3s linear;
  &:hover {
    transform: scale(1.1);
    color: rgb(0, 153, 255);
  }
}
.hidde {
  display: none;
}
.show {
  display: flex;
}
</style>
