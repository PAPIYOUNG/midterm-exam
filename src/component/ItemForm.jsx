import { useNavigate } from 'react-router';
import { useDeleteItem } from '../hook/crudFn';

export default function ItemForm({ id, title, content, update }) {
  //BUTTON EDIT
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/${id}/edit`);
  };

  //BUTTON DELETE
  const deleteItem = useDeleteItem();
  const handleDelete = () => {
    deleteItem.mutate(id);
  };

  return (
    <li className="border border-green-500 rounded-lg p-5 w-120 h-40 flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="">NOTE</p>
        <div className="flex justify-between gap-3">
          <button className="border p-1" onClick={handleEdit}>
            EDIT
          </button>
          <button className="border p-1 bg-red-500" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
      <div>
        <p>{title}</p>
        <p>{content}</p>
      </div>

      <div>
        <p>{update}</p>
      </div>
    </li>
  );
}
