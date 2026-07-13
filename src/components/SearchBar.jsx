export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="🔍 Search movies..."
      value={value}
      onChange={onChange}
    />
  );
}