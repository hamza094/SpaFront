import axios from "axios";
import type {FormKitNode} from "@formkit/core";
import { useRouter } from "vue-router";

export const useItems = () => {

const router = useRouter();

	async function iteamCreate(payload, node?: FormKitNode){
	try{
    await axios.post("/items",{
     ...payload,
    });
    router.push('/items');
  }catch(err){
    handleInvalidForm(err,node);
  }

	}

  return {
    itemCreate,
  };

}