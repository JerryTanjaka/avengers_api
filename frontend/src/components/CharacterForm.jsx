function CharacterForm({ newCharacter, onChange, onAdd }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Ajouter un Avenger</h2>
      <input
        type="text"
        placeholder="Nom"
        className="w-full p-2 mb-2 border rounded"
        value={newCharacter.name}
        onChange={(e) => onChange({ ...newCharacter, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Nom réel / Alias"
        className="w-full p-2 mb-2 border rounded"
        value={newCharacter.realName}
        onChange={(e) => onChange({ ...newCharacter, realName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Univers"
        className="w-full p-2 mb-2 border rounded"
        value={newCharacter.universe}
        onChange={(e) => onChange({ ...newCharacter, universe: e.target.value })}
      />
      <button
        onClick={onAdd}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Ajouter
      </button>
    </div>
  );
}

export default CharacterForm;
