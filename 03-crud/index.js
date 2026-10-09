let tareas = [
  { id: 1, titulo: "Estudiar JavaScript", completada: false },
  { id: 2, titulo: "Hacer la tarea", completada: false },
];
let siguienteId = 3;

function crearTarea(titulo) {
  const nueva = { id: siguienteId++, titulo, completada: false };
  tareas.push(nueva);
  return nueva;
}

function leerTareas() {
  return tareas;
}
function leerTareaPorId(id) {
  return tareas.find((t) => t.id === id);
}

function actualizarTarea(id, cambios) {
  const tarea = leerTareaPorId(id);
  if (!tarea) return null;
  Object.assign(tarea, cambios);
  return tarea;
}

function eliminarTarea(id) {
  const antes = tareas.length;
  tareas = tareas.filter((t) => t.id !== id);
  return tareas.length < antes;
}

console.log("CREATE");
console.log(crearTarea("Subir ejercicios a GitHub"));

console.log("READ todas");
console.log(leerTareas());

console.log("READ id 2");
console.log(leerTareaPorId(2));

console.log("UPDATE id 2 completada");
console.log(actualizarTarea(2, { completada: true }));

console.log("DELETE id 1");
console.log("Eliminada:", eliminarTarea(1));

console.log("Estado final");
console.log(leerTareas());