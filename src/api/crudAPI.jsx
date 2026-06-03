import { api } from './baseURL';

export async function getItem() {
  const { data } = await api.get(
    '/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/',
  );
  return data;
}
//วิธีที่ 1: Closure Pattern
export async function getItemId(id) {
  const { data } = await api.get(
    `/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/${id}`,
  );
  return data;
}

//วิธีที่ 2: Query Context Pattern (React Query Style)
export async function getItemId2({ queryKey }) {
  const [, id] = queryKey;

  const { data } = await api.get(
    `/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/${id}`,
  );
  return data;
}

export async function postItem({ title, content }) {
  const { data } = await api.post(
    '/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes',
    { title, content },
  );
  return data;
}

export async function editItem({ id, title, content }) {
  const { data } = await api.patch(
    `/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/${id}`,
    { title, content },
  );
  return data;
}
//updateData={title: ,content:}

export async function deleteItem(id) {
  await api.delete(`/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/${id}`);
}
