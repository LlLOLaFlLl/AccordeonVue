<script setup>
import Accordion from './components/Accordion.vue';
</script>

<template>
  <div class="app-container">
    <Accordion />
  </div>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: linear-gradient(135deg, #1c0101, #052231);
  padding: 10px;
  overflow-y: auto;
}
</style>
