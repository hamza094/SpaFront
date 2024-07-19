<script setup lang="ts">

import { FormKitNode } from '@formkit/core';

definePageMeta({
    middleware:["auth"],
});

const { itemCreate } = useItems();


async function CreateItem(payload, node?: FormKitNode){
  await itemCreate(payload, node);
} 
	
</script>



<template>
	  
  <h1>Create New Item</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Item" @submit="CreateItem">

    <FormKit label="Name" name="name" type="text"/>

    <FormKit label="Description" name="description" type="text"/>

    <FormKit label="Price" name="price" type="number"/>

    </FormKit>


</template>