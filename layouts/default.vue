<script setup>
import "@/assets/main.css";
import { ModalsContainer } from 'vue-final-modal';

</script>
<template>
  <div>
    <TheMainNav />
    <div class="p-10">
      <slot></slot>
    <ModalsContainer />
    </div>
  </div>
</template>
