<script setup lang="ts">
import axios from "axios";
import type {FormKitNode} from "@formkit/core";
import {nanoid} from "nanoid";

definePageMeta({
    middleware:["auth"],
});

 
async function CreateLink(payload, node?: FormKitNode){
  try{
    await axios.post("/links",{
     ...payload,
     short_link:nanoid(8),
    });
    useRouter.push('/links');
  }catch(err){
    handleInvalidForm(err,node);
  }
} 


</script>


<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Link" @submit="CreateLink">
    <FormKit label="Link" name="full_link" type="url"/>
    </FormKit>
</template>
