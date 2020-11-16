<template>
  <div class="hello">
    <h1 class="text-center font-weight-bold display-3 text-dark mt-5 mb-5">
      {{ header }}
    </h1>
  </div>
</template>

// * Reusable component
<script>
export default {
  name: "Header",
  props: {
    header: String,
  },
};
</script>

<style scoped lang="scss"></style>
