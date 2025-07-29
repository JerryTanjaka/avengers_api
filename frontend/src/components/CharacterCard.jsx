function CharacterCard({ character, onDelete, onUpdate }) {
    return (
        <div className="flex text-white items-center justify-between rounded-xl bg-gray-800 p-4 shadow-lg shadow-gray-950/30 transition duration-100 ease-in-out hover:scale-105">
            <div>
                <h2 className="text-xl font-bold">{character.name}</h2>
                <p className="text-sm text-gray-200">{character.realName || character.alias}</p>
                <p className="text-xs text-gray-400">{character.universe || "Inconnu"}</p>
            </div>
            <div className="flex space-x-2">
                <button onClick={() => onUpdate(character.id)} className="transform rounded bg-sky-600 px-3 py-1 text-white shadow-md transition duration-100 ease-in-out  hover:bg-sky-500 active:scale-95">
                    Modifier
                </button>

                <button onClick={() => onDelete(character.id)} className="transform rounded bg-red-600 px-3 py-1 text-white shadow-md transition duration-100 ease-in-out  hover:bg-red-00 active:scale-95">
                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default CharacterCard;
