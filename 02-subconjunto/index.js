

const estudiantes = [
  { nombre: "Ana", calificacion: 95, carrera: "Sistemas" },
  { nombre: "Luis", calificacion: 68, carrera: "Industrial" },
  { nombre: "Marta", calificacion: 82, carrera: "Sistemas" },
  { nombre: "Pedro", calificacion: 55, carrera: "Mecatrónica" },
  { nombre: "Sofía", calificacion: 91, carrera: "Sistemas" },
];

const aprobados = estudiantes.filter((e) => e.calificacion >= 70);

const deSistemas = estudiantes.filter((e) => e.carrera === "Sistemas");

const primerosTres = estudiantes.slice(0, 3);

const soloNombres = estudiantes.map((e) => e.nombre);

console.log("Aprobados:", aprobados);
console.log("De Sistemas:", deSistemas);
console.log("Primeros tres:", primerosTres);
console.log("Solo nombres:", soloNombres);
