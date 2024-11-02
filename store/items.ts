import { defineStore } from 'pinia';
import axios from 'axios';
import { ItemPayload,Item,Link,ItemData } from '@/types';


// Define the store
export const useItemsStore = defineStore('items', {
  state: () => ({
    itemData: {
      data: [] as Item[], // Initialize with an empty array of items
      links: [] as Link[], // Initialize with an empty array of links
      meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        per_page: 5,
        to: 1,
        total: 0,
      },
    } as ItemData,
  }),
  
  actions: {
    async fetchItems(page: number = 1): Promise<void> {
      try {
        const response = await axios.get<ItemData>(`/items?page=${page}`);
        this.itemData = response.data; // Update the itemData with fetched data
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },

    async addItem(newItem: ItemPayload): Promise<void> {
      try {
        const response = await axios.post<Item>(`/items`, newItem); // Adjust the API endpoint as needed
        this.itemData.data.unshift(response.data); // Add the new item to the list
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
  },
});
