function SearchBar({ searchTerm, onChange, className }) {
  return (
    <input
      type="text"
      placeholder="Rechercher un Avenger..."
      className={className || "w-full p-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 "}
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
