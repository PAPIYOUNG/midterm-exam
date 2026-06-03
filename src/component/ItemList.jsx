import { useGetItem } from '../hook/crudFn';
import ItemForm from './ItemForm';

export default function ItemList({ search }) {
  const { data: items = [], isLoading, isError } = useGetItem();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  // console.log(items);
  const data = items.data.items;
  // console.log(data);

  //SEARCH
  // n.title.includes('') เป็น true จะผ่านทุกตัว
  const filteredData = data.filter(
    (n) =>
      n.title.toLowerCase().includes(search.trim().toLowerCase()) ||
      n.content.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <ul className="grid grid-cols-2 gap-5 justify-between items-center m-auto">
      {filteredData.map((n) => {
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

      {}
    </ul>
  );
}
