import { useNavigate } from 'react-router';

export default function CreateBar() {
  const navigate = useNavigate();

  return (
    <div className="flex w-250  m-auto justify-between p-5">
      <div>
        <p>Token CRUD example</p>
        <p className="text-3xl font-bold">Notes</p>
        <p>Search, create, update, and delete notes.</p>
      </div>
      <div>
        <button onClick={() => navigate('/notes/new')} className="border p-1.5">
          + CREATE NOTES
        </button>
      </div>
    </div>
  );
}
