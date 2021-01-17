import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Alumno() {
  let { id } = useParams();

  const [alumno, setAlumno] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:8000/api/alumno?uuid=${id}`)
  .then((response) => response.json())
  .then((data) => setAlumno(data));
  })

  return (
    <div>
      <p>UUID: {alumno.uuid}</p>
      <p>Nombre: {alumno.nombre}</p>
      <p>Apellidos: {alumno.apellidos}</p>
      <p>Dirección: {alumno.direccion}</p>
      <p>Población: {alumno.poblacion}</p>
      <p>Código Postal: {alumno.codigo_postal}</p>
      <p>Curso: {alumno.curso}</p>
      <p>Fecha de creación: {alumno.created_at}</p>
      <p>Fecha de edición: {alumno.updated_at}</p>
    </div>
  );
}

export default Alumno;
