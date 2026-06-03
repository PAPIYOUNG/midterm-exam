import CreateBar from '../component/CreateBar';
import SearchBar from '../component/SearchBar';
import ItemList from '../component/ItemList';
import { useState } from 'react';

export default function HomePage() {
  const [search, setSearch] = useState('');
  return (
    <div className="flex flex-col gap-5 w-250 m-auto justify-center">
      <CreateBar />
      <SearchBar search={search} setSearch={setSearch} />
      <ItemList search={search} />
    </div>
  );
}
