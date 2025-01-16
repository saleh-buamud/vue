<template>
  <div class="message-display">
    <p v-if="message">Message: {{ message }}</p>
    <p v-else>No message available.</p>
    <button class="btn btn-primary" @click="toggleMessage">
      Toggle Message
    </button>
  </div>
</template>

<script>
export default {
  name: "MessageDisplay",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    toggleMessage() {
      this.message = this.message ? "" : "Hello from MessageDisplay!";
    },
  },
};
</script>

<style scoped>
.message-display {
  text-align: center;
  margin: 20px 0;
}
</style>
