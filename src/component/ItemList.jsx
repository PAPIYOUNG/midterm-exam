import { useGetItem } from '../hook/crudFn';
import ItemForm from './ItemForm';

export default function ItemList() {
  const { data: items = [], isLoading, isError } = useGetItem();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  console.log(items);
  const data = items.data.items;
  console.log(data);
  return (
    <ul className="grid grid-cols-2 gap-5 w-250 justify-center items-center m-auto">
      {data.map((n) => {
        return (
          <ItemForm
            key={n.id}
            id={n.id}
            title={n.title}
            content={n.content}
            update={n.updatedAt}
          />
        );
      })}
    </ul>
  );
}
