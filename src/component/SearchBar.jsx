export default function SearchBar() {
  return (
    <div className="border w-250 h-30 m-auto justify-center flex flex-col gap-3 p-5 border rounded-lg">
      <label>Search notes</label>
      <input
        type="text"
        placeholder="search match title and content"
        className="border rounded-lg"
      ></input>
    </div>
  );
}
