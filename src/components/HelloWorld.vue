<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);

const notify = {
  notifications: [
    {
      id: 1,
      type: 'is-info',
      content:
        'Due to a change of data provider, we have lost a (small) part of our data series and gained other series instead. This resulted on April 6, 2022, for some models in some countries, in a structural break in the GDP projections.',
    },
  ],
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>test</p>
  <div>
    <notification
      for="n in notify"
      :type="n.type"
      :key="n.id"
      aria-close-label="Close notification"
    >
      {{ n.content }}
    </notification>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
