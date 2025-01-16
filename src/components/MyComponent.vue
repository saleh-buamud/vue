<template>
  <div class="my-component border rounded p-4 text-center shadow-sm">
    <h2 class="h4 mb-3">{{ title }}</h2>
    <p class="mb-3">This is a reusable component in Vue.js.</p>
    <button @click="handleClick" class="btn btn-primary">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      title: "Hello from MyComponent!",
    };
  },
  methods: {
    handleClick() {
      alert("Button clicked Saleh front-end developer");
    },
  },
};
</script>

<style scoped>
/* يمكنك إضافة تخصيصات إضافية هنا إذا لزم الأمر */
.my-component {
  max-width: 400px;
  margin: 0 auto;
}
</style>
