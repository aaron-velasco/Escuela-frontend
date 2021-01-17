import { React, useState, useEffect } from "react";
import AlumnosTableRow from "./AlumnosTableRow";
import { Link } from "react-router-dom";

function AlumnosTable() {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState("Cargando");
  var msg = "";

  useEffect(() => {
    fetch("http://localhost:8000/api/alumnos")
      .then((response) => response.json())
      .then((data) =>
        setAlumnos(
          data.map((alumno) => (
            <AlumnosTableRow key={alumno.uuid} alumno={alumno} />
          )),
          setLoading("")
        )
      );
  });

  return (
    <>
      <h1 className="py-12 text-4xl">Listado de alumnos</h1>
      <Link className="text-blue-600 underline" to="/login">
        Iniciar sesión
      </Link>
      <br />
      <table className="mx-auto m-4 w-4/6 table-auto border-collapse border border-green-800">
        <thead>
          <tr>
            <th>UUID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Direccion</th>
            <th>Poblacion</th>
            <th>Codigo_postal</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{alumnos}</tbody>
      </table>
      {loading}
    </>
  );
}

export default AlumnosTable;
