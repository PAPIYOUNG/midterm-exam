import { useParams } from 'react-router';
import { useEditItem, useGetItemId } from '../hook/crudFn';
import { Link } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export function EditItem() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const editItem = useEditItem();
  const { noteId } = useParams();
  console.log(noteId);

  const { data: items = [], isLoading, isError } = useGetItemId(noteId);

  const item = items?.data;
  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setContent(item.content);
    }
  }, [item]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="flex flex-col w-250 m-auto justify-center gap-10 p-10">
      <div>
        <h1 className="text-3xl font-bold">Edit Note</h1>
        <p>Update fields for this note.</p>
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
          <Link className="border p-1" to="/">
            ⬅︎ BACK
          </Link>
          <button
            className="border p-1"
            onClick={() => {
              editItem.mutate(
                {
                  id: noteId,
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
            {' '}
            📂 SAVE CHANGE
          </button>
        </div>
      </div>
    </div>
  );
}
