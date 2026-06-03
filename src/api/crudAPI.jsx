import { api } from './baseURL';

export async function getItem() {
  const { data } = await api.get(
    '/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/',
  );
  return data;
}

export async function getItemId(id) {
  const { data } = await api.get(
    `/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/${id}`,
  );
  return data;
}

export async function postItem(newItem) {
  const { data } = await api.post(
    '/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes',
    newItem,
  );
  return data;
}

export async function editItem(id, updateItem) {
  const { data } = await api.patch(
    `/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/${id}`,
    updateItem,
  );
  return data;
}
//updateData={title: ,content:}

export async function deleteItem(id) {
  await api.delete(`/users/fe107daa-4bd0-488b-82ce-5d2b018bf029/notes/${id}`);
}
