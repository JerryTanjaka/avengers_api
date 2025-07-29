function SearchBar({ searchTerm, onChange, className }) {
  return (
    <input
      type="text"
      placeholder="Rechercher un Avenger..."
      className={className || "w-full p-2 border rounded shadow"}
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
