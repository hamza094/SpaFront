<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { useRoute } from "vue-router";
import axios from 'axios';
import { ModalsContainer, useModal } from 'vue-final-modal'
import CreateItem from '@/components/CreateItem.vue';

definePageMeta({
    middleware:["auth"],
});

  const { open, close } = useModal({
    component: CreateItem,
    attrs: {
      title: 'Create A New Item!',
      onCreate() {
        close()
      },
      onClose() {
      close(); 
    },
    },
    slots: {
      default: 
      ''
      ,
    },
  })

  const items = ref<any[]>([]);

 async function getItems() {
  try {
    const { data } = await axios.get('/items');
    items.value=data;
  } catch (error) {
    console.error('Error fetching items:', error);
  }
}

onMounted(async () => {
  await getItems();
});

</script>
<template>
  <div>
    <nav class="flex justify-between mb-4 items-center">
      <h1 class="mb-0">My Items</h1>
      <div class="flex items-center">
      <div>
      <VButton @click="() => open()">
        Open Modal
      </VButton>
    <ModalsContainer />
</div>
      </div>
    </nav>

    <div v-if="true">
      <table class="table-fixed w-full">
        <thead>
          <tr>
            <th class="w-[7%]">Id</th>
            <th class="w-[25%]">Name</th>
            <th class="w-[35%]">Description</th>
            <th class="w-[10%]">Price</th>
            <th class="w-[20%]">Created At</th>
            <th class="w-[10%]">User_id</th>
            <th class="w-[10%]">Delete</th>
            <th class="w-[10%]">Update</th>
            <th class="w-[6%] text-center">
              <button @click="getItems"><IconRefresh /></button>
            </th>
          </tr>
        </thead>
        <tbody>
           <tr v-for="(item, index) in items" :key="index">
           <td>
             {{item.id}}
            </td>
            <td>
             {{item.name}}
            </td>
            <td>
             {{item.description}}
            </td>
            <td>
             {{item.price}}
            </td>
            <td>
             {{item.created_at}}
            </td>
            <td>
             {{item.user_id}}
            </td>
            <td>
              <button >Update</button>
            </td>
            <td>
              <button ><IconTrash /></button>
            </td> 
          </tr>
        </tbody>
      </table>

      <div class="mt-5 flex justify-center"></div>
    </div>

    <!-- No links message for when table is empty -->
    <div
      v-else
      class="border-dashed border-gray-500 p-3 border-[1px] text-center"
    >
      <div class="flex justify-center">
        <IconLink />
      </div>
      <p>
        <!-- Show this if reason for no Items is none found in search -->
        <span v-if="false"> No items matching links found. </span>

        <!-- Show this if reason for no items is User has none -->
        <span v-else>
          No links created yet
          <NuxtLink to="/links/create" class="text-green-600"
            >Go create your first item!</NuxtLink
          >
        </span>
      </p>
    </div>
  </div>
</template>