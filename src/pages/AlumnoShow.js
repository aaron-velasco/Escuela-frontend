import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function AlumnoShow() {
  let { id } = useParams();

  const [alumno, setAlumno] = useState([]);

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/alumno?uuid=${id}`)
  .then((response) => response.json())
  .then((data) => setAlumno(data));
  })

  return (
    <div className="bg-white rounded-lg shadow-md lg:shadow-lg h-screen">
      <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        Mostrar alumno
      </h2>
      <br/>
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

export default AlumnoShow;
