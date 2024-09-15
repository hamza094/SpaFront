import axios from "axios";
import type {ItemPayload} from '@/types'


export const useItems = () => {

async function addItem(payload:ItemPayload){
  await axios.post('/items', {
      ...payload,
    });
}

 return {
	 addItem
 };

}