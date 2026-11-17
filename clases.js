export class EjercicioBase {
  constructor(id, titulo, dificultad) {
    this.id = id;
    this.titulo = titulo;
    this.dificultad = dificultad;
  }

  obtenerDetalles() {
    return `${this.titulo} (${this.dificultad})`;
  }

  ejecutar(codigo) {
    throw new Error("Implementar en subclase");
  }
}

export class EjercicioProgramacion extends EjercicioBase {
  constructor(id, titulo, dificultad, lenguaje, codigoBase) {
    super(id, titulo, dificultad);
    this.lenguaje = lenguaje;
    this.codigoBase = codigoBase;
  }

  ejecutar(codigoUsuario) {
    if (!codigoUsuario.trim()) return { exito: false, salida: "Editor vacío" };
    return { exito: true, salida: `Ejecutado en ${this.lenguaje} con éxito.` };
  }

  enviarSolucion() {
    return `Solución de ${this.titulo} enviada.`;
  }
}