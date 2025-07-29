function CharacterForm({ newCharacter, onChange, onAdd, onCancel }) {
  const handleChange = (e) => {
    onChange({ ...newCharacter, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd();
      }}
      className="space-y-4"
    >
      <input
        name="name"
        type="text"
        value={newCharacter.name}
        onChange={handleChange}
        placeholder="Nom du héros"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        name="realName"
        type="text"
        value={newCharacter.realName}
        onChange={handleChange}
        placeholder="Nom réel"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        name="universe"
        type="text"
        value={newCharacter.universe}
        onChange={handleChange}
        placeholder="Univers"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Ajouter
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-600 hover:underline"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default CharacterForm;
