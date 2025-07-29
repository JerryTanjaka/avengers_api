import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterForm from "./components/CharacterForm";
import { Navbar } from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newCharacter, setNewCharacter] = useState({ name: "", realName: "", universe: "" });

    const API_URL = "http://localhost:5000/characters";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(setCharacters)
            .catch((err) => console.error("Erreur API:", err));
    }, []);

    const handleAdd = () => {
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCharacter),
        })
            .then((res) => res.json())
            .then((data) => {
                setCharacters([...characters, data.character]);
                setNewCharacter({ name: "", realName: "", universe: "" });
            });
    };

    const handleDelete = (id) => {
        fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => setCharacters(characters.filter((char) => char.id !== id)));
    };

    const handleUpdate = (id) => {
        const updatedName = prompt("Nouveau nom ?");
        if (!updatedName) return;
        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: updatedName }),
        })
            .then((res) => res.json())
            .then((data) => {
                setCharacters(characters.map((char) => (char.id === id ? data.character : char)));
            });
    };

    const filtered = characters.filter((char) => char.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen overflow-x-hidden bg-gray-300">
            <Navbar searchTerm={searchTerm} onChange={setSearchTerm} />
            <div className="p-6">
                <div className="mx-auto mb-6 grid max-w-[100vw] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filtered.map((char) => (
                        <CharacterCard key={char.id} character={char} onDelete={handleDelete} onUpdate={handleUpdate} />
                    ))}
                </div>

                <div className="mx-auto max-w-xl">
                    <CharacterForm newCharacter={newCharacter} onChange={setNewCharacter} onAdd={handleAdd} />
                </div>
            </div>
        </div>
    );
}

export default App;
