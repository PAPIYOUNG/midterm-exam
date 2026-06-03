import { useState } from 'react';
import { useEffect } from 'react';

export default function SearchBar({ setSearch }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input);
    }, 1000);

    return () => clearTimeout(timer);
  }, [input, setSearch]);

  return (
    <div className="border w-250 h-30 m-auto justify-center flex flex-col gap-3 p-5 border rounded-lg">
      <label>Search notes</label>
      <input
        type="text"
        placeholder="search match title and content"
        className="border rounded-lg"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
    </div>
  );
}
