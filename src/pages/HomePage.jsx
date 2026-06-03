import CreateBar from '../component/CreateBar';
import SearchBar from '../component/SearchBar';
import ItemList from '../component/ItemList';

export default function HomePage() {
  return (
    <div>
      <CreateBar />
      <SearchBar />
      <ItemList />
    </div>
  );
}
