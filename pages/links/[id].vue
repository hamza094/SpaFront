import {Link} from "@/types";
import type {FormKitNode} from "@formkit/core"


<script setup lang="ts">

definePageMeta({
  middleware:["auth"],
});

const {find,item,update} = useLinks();

await find(Number(useRoute.params.id)); 

async function handleUpdate(payload: LoginPayLoad, node?: FormKitNode){
  try{
    await login(Number(useRoute.params.id),payload);
  }catch(err){
    handleInvalidForm(err,node);
  }

}

</script>

<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>

  <FormKit type="form" submit-label="Update Link" @submit="handleUpdate">

  <FormKit
  :value="item.short_link"
   type="text"
   name="short_link"
   label="Short Link"
   />
  
 <FormKit 
 :value="item.full_link"
  type="url"
  name="full_link"
  label="Full Link"/>
  
  </FormKit> 

  <form>
    <label>
      <div>Short Link</div>
      <input type="text" />
    </label>

    <label>
      <div>Full Link</div>
      <input type="text" />
    </label>

    <button class="btn">Update Link</button>
  </form>
</template>
