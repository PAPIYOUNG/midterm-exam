import CreateBar from '../component/CreateBar';
import SearchBar from '../component/SearchBar';
import ItemList from '../component/ItemList';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 w-250 m-auto justify-center">
      <CreateBar />
      <SearchBar />
      <ItemList />
    </div>
  );
}
