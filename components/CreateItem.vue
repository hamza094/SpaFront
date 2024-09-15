<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import axios from 'axios';
import type { FormKitNode } from '@formkit/core';
import { useRouter } from 'vue-router';
import {ItemPayLoad} from "@/types";

  defineProps<{
    title?: string
  }>()

  const emit = defineEmits<{
    (e: 'create'): void
    (e: 'close'): void;
  }>()

  const router = useRouter();

  const {addItem} = useItems();

 async function createItem(payload: ItemPayLoad, node?: FormKitNode) {
  try {
    await addItem(payload);
    emit('create');
  } catch (err) {
    handleInvalidForm(err, node);
  }
}

  </script>
  <template>
    <VueFinalModal
      class="flex justify-center items-center"
      content-class=" modal-content-wide flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    >
      <h1 class="text-xl">
        {{ title }}
      </h1>
      <slot />
      <FormKit type="form" submit-label="Create" @submit="createItem">
      <FormKit label="Name" name="name" type="text" />
      <FormKit label="Description" name="description" type="textarea" />
      <FormKit label="Price" name="price" type="number" :min="0" />
    </FormKit>
      <button class="mt-1 ml-auto px-2 border rounded-lg" @click="emit('close')">
        Close
      </button>
    </VueFinalModal>
  </template>

<style>
.modal-content-wide {
  width: 30rem;  /* Adjust the width to your preference */
  max-width: 100%;  /* Ensure responsiveness */
}
  </style>