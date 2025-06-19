import { useState } from "react";

export default function App() {
  const [notas, setNotas] = useState("");
  const [palabrasClave, setPalabrasClave] = useState("");
  const [resumen, setResumen] = useState("");
  const guardarNota = async () => {
  const markdown = `## Notas

${notas}

---

## Palabras clave

${palabrasClave}

---

## Resumen

${resumen}
`;

    try {
      const res = await fetch("http://localhost:5000/api/guardar-nota", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markdown }),
      });

      const data = await res.json();
      console.log("Respuesta del backend:", data);
      alert("Nota enviada a GitHub correctamente");
    } catch (error) {
      console.error("Error al guardar la nota:", error);
      alert("Error al guardar la nota");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-6 flex flex-col">
      <h1 className="text-2xl font-medium mb-6 text-center">kornapp</h1>

      <div className="flex flex-1 gap-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col flex-1">
          <label className="mb-2 text-sm text-gray-300">Notas</label>
          <textarea
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            className="flex-1 min-h-0 w-full bg-gray-800 border border-gray-700 rounded p-3 text-base placeholder-gray-400 resize-none focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Escribe tus notas..."
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label className="mb-2 text-sm text-gray-300">Palabras clave</label>
          <textarea
            value={palabrasClave}
            onChange={(e) => setPalabrasClave(e.target.value)}
            className="flex-1 min-h-0 w-full bg-gray-800 border border-gray-700 rounded p-3 text-base placeholder-gray-400 resize-none focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Palabras clave..."
          />
        </div>
      </div>

      <div className="mt-6 max-w-6xl mx-auto w-full flex flex-col flex-shrink">
        <label className="mb-2 text-sm text-gray-300">Resumen</label>
        <textarea
          value={resumen}
          onChange={(e) => setResumen(e.target.value)}
          className="h-[15vh] bg-gray-800 border border-gray-700 rounded p-3 text-base placeholder-gray-400 resize-none focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Resumen..."
        />
      </div>

      <div className="mt-6 text-center">



        
        <button 
        onClick={guardarNota}
        className="px-5 py-2 border border-gray-400 text-gray-200 rounded hover:bg-gray-700 transition">
          Guardar en GitHub
        </button>
      </div>
    </div>
  );
}
