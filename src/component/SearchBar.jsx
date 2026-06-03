import { useState } from 'react';
import { useEffect } from 'react';
import { useGetItem } from '../hook/crudFn';

export default function SearchBar({ setSearch }) {
  const [input, setInput] = useState('');

  const { data: items = [], isLoading, isError } = useGetItem();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input);
    }, 1000);

    return () => clearTimeout(timer);
  }, [input, setSearch]);

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
    <div className="border w-250 h-30 m-auto justify-center flex flex-col gap-3 p-5 rounded-lg">
      <label>Search notes</label>
      <input
        type="text"
        placeholder="search match title and content"
        className="border rounded-lg p-2"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
    </div>
  );
}
