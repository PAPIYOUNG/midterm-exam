import { Link } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePostItem } from '../hook/crudFn';

export default function CreateItem() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const newitem = usePostItem();
  return (
    <div className="flex flex-col w-250 m-auto justify-center gap-10 p-10">
      <div>
        <h1 className="text-3xl font-bold">New note</h1>
        <p>Fill in the required fields for this note.</p>
      </div>
      <div className="border flex flex-col p-5 gap-2">
        <p>Note content</p>
        <p>Use a clear title and add the detail you want to keep.</p>
        <label>title (หัวข้อ) *</label>
        <input
          className="border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>content (เนื้อหา) *</label>
        <textarea
          rows="5"
          cols="40"
          className="border"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex justify-between">
          <Link className="border p-1" to="/notes">
            ⬅︎ BACK
          </Link>
          <button
            className="border p-1"
            onClick={() => {
              newitem.mutate(
                {
                  title: title,
                  content: content,
                },

                {
                  onSuccess: () => {
                    navigate('/');
                  },
                },
              );
            }}
          >
            CREATE NOTE
          </button>
        </div>
      </div>
    </div>
  );
}
