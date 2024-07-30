<template>
  <vfm-modal v-slot="{ close }">
    <div>
      <h1>This is my modal content</h1>
      <button @click="close">Close</button>
    </div>
  </vfm-modal>
</template>

<script setup>
// No additional script needed for a basic modal
</script>