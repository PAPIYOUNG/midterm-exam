import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  postItem,
  getItemId,
  getItem,
  deleteItem,
  editItem,
} from '../api/crudAPI';

export function useGetItem() {
  return useQuery({
    queryKey: ['cache'],
    queryFn: getItem,
  });
}

export function useGetItemId() {
  return useQuery({
    queryKey: ['cache'],
    queryFn: (id) => getItemId(id),
  });
}

export function usePostItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newItem) => postItem(newItem),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cache'] });
    },
  });
}

export function useEditItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updateData }) => editItem(id, updateData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cache'] });
    },
  });
}

export function useDeleteItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cache'] });
    },
  });
}
