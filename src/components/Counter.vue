<template>
  <div class="counter">
    <h3>Counter: {{ count }}</h3>
    <div class="m-1 p-5">
      <button class="btn btn-success m-1" @click="increment">Increment</button>
      <button class="btn btn-danger" @click="decrement">Decrement</button><br />
      <button class="btn btn-danger" @click="clear">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) this.count--;
    },
    clear() {
      if (this.count > 0) this.count = 0;
    },
  },
};
</script>

<style scoped>
.counter {
  text-align: center;
  margin: 20px 0;
}
</style>
