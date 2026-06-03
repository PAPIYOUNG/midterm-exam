import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  postItem,
  getItemId,
  getItem,
  deleteItem,
  editItem,
  getItemId2,
} from '../api/crudAPI';

export function useGetItem() {
  return useQuery({
    queryKey: ['cache'],
    queryFn: getItem,
  });
}

//วิธีที่ 1: Closure Pattern
// queryFn: () => getItemId(id) เราห่อฟังก์ชันไว้เอง และเป็นคนส่ง id เข้าไป
// useGetItemId("123")
//         ↓
// React Query เรียก queryFn()
//         ↓
// () => getItemId("123")
//         ↓
// getItemId("123")
export function useGetItemId(id) {
  return useQuery({
    queryKey: ['cache', id],
    queryFn: () => getItemId(id),
  });
}

//วิธีที่ 2: Query Context Pattern (React Query Style)
// React Query จะเรียกฟังก์ชันที่เราใส่ให้เลย getItemId(context); โดย context จะประมาณ
// {
//   queryKey: ['cache', '123'],
//   signal: ...
// }
// useGetItemId2("123")
//         ↓
// React Query เรียก getItemId2(context)
//         ↓

// context = {
//   queryKey: ['cache', '123'],
//   signal: ...
// }
//         ↓

// const [, id] = queryKey
//         ↓

// id = "123"
export function useGetItemId2(id) {
  return useQuery({
    queryKey: ['cache', id],
    queryFn: getItemId2,
  });
}

export function usePostItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cache'] });
    },
  });
}

export function useEditItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editItem,
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
