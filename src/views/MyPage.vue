<template>
  <div class="my-page">
    <h1>Welcome to My Page</h1>
    <p>This is a sample page in Vue.js.</p>
    <MyComponent />
    <Counter />
    <MessageDisplay />
  </div>
</template>

<script>
import MyComponent from "../components/MyComponent.vue";
import Counter from "../components/Counter.vue";
import MessageDisplay from "../components/MessageDisplay.vue";

export default {
  name: "MyPage",
  components: {
    MyComponent,
    Counter,
    MessageDisplay,
  },
};
</script>

<style scoped>
.my-page {
  padding: 20px;
}
</style>
