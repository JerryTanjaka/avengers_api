import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterForm from "./components/CharacterForm";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCharacter, setNewCharacter] = useState({ name: "", realName: "", universe: "" });
  const [showForm, setShowForm] = useState(false); // pour la modale

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
        setShowForm(false); // fermer le formulaire
      });
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => {
      setCharacters(characters.filter((char) => char.id !== id));
    });
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
    <div className="min-h-screen overflow-x-hidden bg-gray-200">
      <Navbar searchTerm={searchTerm} onChange={setSearchTerm} />

      <div className="p-6">
        <div className="mb-4 flex justify-center">
          <button onClick={() => setShowForm(true)} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Ajouter un Avenger
          </button>
        </div>

        {/* Formulaire en modale */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs backdrop-brightness-50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
              <CharacterForm
                newCharacter={newCharacter}
                onChange={setNewCharacter}
                onAdd={handleAdd}
                onCancel={() => setShowForm(false)} 
              />
            </div>
          </div>
        )}

        <div className="mx-auto mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((char) => (
            <CharacterCard key={char.id} character={char} onDelete={handleDelete} onUpdate={handleUpdate} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
