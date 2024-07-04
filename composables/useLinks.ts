  import axios from "axios";
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { adapter } from "@/utils/adapter";
import type { Link, RawLink } from '@/types';

export const useLinks = () => {
  const slug = "links";
  const item = ref<Link>(null);
  const route = useRoute();
  const router = useRouter();
  const data = ref<Link[]>([]);
  
  const page = ref(route.query.page || 1);

   const queries = ref({
    page: 1,
    "filter[full_link]": " ",
    ...route.query
  });

  const links = ref([]);

  function adapter(Link: RawLink) :Link{
    return {
      ...Link,
      created_at: new Date(link.created_at),
      updated_at: new Date(link.created_at),
    }
  }

     const getLinks = async () => {
    try {
      const response = await axios.get('/links', { params: { page: page.value, ...queries.value } });
      data.value = response.data.data.map((rawLink: RawLink) => adapter(rawLink));
      links.value = response.data.links;
    } catch (error) {
      console.error('Failed to fetch links:', error);
    }
  };

async function find(id: string | number) {
    const { data } = await axios.get<RawLink>(`${slug}/${id}`);
    return item.value = adapter(data);
  }

  async function create(payload: Partial<Link>) {
    const { data } = await axios.post<RawLink>('${slug}', payload);
        return item.value = adapter(data);
  }

  async function update(id: string | number, payload: Partial<Link>) {
    const { data } = await axios.put<RawLink>(`${slug}/${id}`, payload);
      return item.value = adapter(data);
  }

  async function destroy(id: string | number) {
    await axios.delete(`${slug}/${id}`);
  }

  const linksComputed = computed(() => data.value);


  watch(queries, async () => {
    await getLinks();
    router.push({ query: queries.value });
  }, { deep: true });


return {
	   data,
    item,
    queries,
    page,
    items: linksComputed,
    getLinks,
    find,
    create,
    update,
    destroy,
 };


}