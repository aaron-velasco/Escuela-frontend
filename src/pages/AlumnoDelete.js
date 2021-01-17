import { React, useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function AlumnoDelete() {
  let { id } = useParams();

  const [alumno, setAlumno] = useState("");
  const [message, setMessage] = useState("");
  const [hasErrors, setHasErrors] = useState("");
  const history = useHistory();

  useEffect(() => {
    setMessage("Cargando");
    fetch(`${process.env.REACT_APP_API_URL}/alumno?uuid=${id}`)
    .then((response) => response.json())
    .then((data) => {
        setAlumno(data)
        setMessage('')
    });
  }, []);

  const handleAccept = (event) => {
    setMessage("Enviando petición");
    fetch(`${process.env.REACT_APP_API_URL}/alumno`, {
      method: "delete",
      body: JSON.stringify(alumno),
      headers: {
        "Content-type": "application/json; charset=UTF-8;",
        Authorization: `Bearer ${localStorage.getItem("api_token")}`,
      },
    })
      .then(function (response) {
        if (!response.ok) {
          switch (response.status) {
            case 401:
              localStorage.clear();
              history.push("/");
              break;
            default:
              setHasErrors(true);
              break;
          }
        }
        return response.json();
      })
      .then(function (data) {
        if (hasErrors === true) {
          setMessage("Error al borrar alumno");
          return;
        }
        setMessage("Alumno borrado correctamente");
        history.push("/");
      })
      .catch((error) => console.log("Error", error));
  };


  return (
    <div className="shadow-sm h-screen">
      <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        ¿Estás seguro de querer borrar a este alumno?
      </h1>
      <br />
      <p className="text-red-600 text-2xl">{message}</p>
      <p className="px-16 py-2">UUID: {alumno.uuid}</p>
      <p className="px-16 py-2">Nombre: {alumno.nombre}</p>
      <p className="px-16 py-2">Apellidos: {alumno.apellidos}</p>
      <p className="px-16 py-2">Curso: {alumno.curso}</p>
      <button
        className="bg-red-500 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 mr-6"
        onClick={handleAccept}
      >
        Aceptar
      </button>
      <Link
        className="bg-blue-500 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
        to="/"
      >
        Cancelar
      </Link>
    </div>
  );
}

export default AlumnoDelete;
