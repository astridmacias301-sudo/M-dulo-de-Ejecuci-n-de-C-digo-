import React, { useState } from 'react';
import { EjercicioProgramacion } from './clases';

const ejercicio = new EjercicioProgramacion(1, "Suma", "Fácil", "JavaScript", "console.log(2+2);");

export default function Editor() {
  const [codigo, setCodigo] = useState(ejercicio.codigoBase);
  const [output, setOutput] = useState("Listo");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif", margin: 0 }}>
      <aside style={{ width: "220px", background: "#f4f4f4", padding: "20px", borderRight: "1px solid #ddd", display: "flex", flexDirection: "column", gap: "15px" }}>
        <h3>Menú</h3>
        <button style={{ padding: "10px", textAlign: "left", cursor: "pointer" }}>🏠 Inicio</button>
        <button style={{ padding: "10px", textAlign: "left", cursor: "pointer" }}>⚙️ Configuraciones</button>
        <button style={{ padding: "10px", textAlign: "left", cursor: "pointer" }}>🔔 Notificaciones</button>
        <div style={{ marginTop: "20px", fontSize: "14px" }}>
          <strong>Perfil</strong>
        </div>
      </aside>

      <main style={{ flex: 1, padding: "30px", display: "flex", flexDirection: "column", gap: "20px", background: "#fff" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <input type="text" placeholder="Buscar..." style={{ padding: "8px", width: "300px" }} />
          <div><strong>Nivel:</strong> Junior (50%)</div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <textarea 
            value={codigo} 
            onChange={(e) => setCodigo(e.target.value)} 
            rows="10" 
            style={{ width: "100%", fontFamily: "monospace", fontSize: "16px", padding: "10px" }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button 
            onClick={() => setOutput(ejercicio.ejecutar(codigo).salida)}
            style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}
          >
            Ejecutar
          </button>
          <button 
            onClick={() => setOutput(ejercicio.enviarSolucion())}
            style={{ padding: "10px 20px", background: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}
          >
            Enviar
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <pre style={{ background: "#f8f9fa", padding: "15px", border: "1px solid #ccc", minHeight: "50px" }}>
            {output}
          </pre>
        </div>
      </main>
    </div>
  );
}