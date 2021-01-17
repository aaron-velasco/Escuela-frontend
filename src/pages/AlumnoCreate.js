import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function AlumnoCreate() {
  // Estado
  const [alumnoData, setAlumnoData] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    poblacion: "",
    codigo_postal: "",
    curso: "",
  });
  const [formErrors, setFormErrors] = useState({
    nombre: [],
    apellidos: [],
    direccion: [],
    poblacion: [],
    codigo_postal: [],
    curso: [],
  });
  const [hasErrors, setHasErrors] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  // Guardado de valores de campos en el estado al escribir
  const handleInputChange = (event) => {
    setAlumnoData({
      ...alumnoData,
      [event.target.name]: event.target.value,
    });
  };

  // Gestión del envío de la información del formulario a la API
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + JSON.stringify(alumnoData));
    fetch(`${process.env.REACT_APP_API_URL}/alumno`, {
      method: "post",
      body: JSON.stringify(alumnoData),
      headers: {
        "Content-type": "application/json; charset=UTF-8;",
        Authorization: `Bearer ${localStorage.getItem("api_token")}`,
      },
    })
      .then(function (response) {
        if (!response.ok) {
          switch (response.status) {
            case 422:
              setHasErrors(true);
              break;
            case 401:
              localStorage.setItem("api_token", "");
              localStorage.setItem("logged_in", false);
              history.push("/");
              break;
            default:
              break;
          }
        }
        return response.json();
      })
      .then(function (data) {
        if (hasErrors === true) {
          setFormErrors(data);
          return;
        }
        setMessage("Alumno creado correctamente");
        history.push("/");
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Creación de alumno
          </h2>

          <form className="mt-10" onSubmit={handleSubmit}>
            <label
              htmlFor="nombre"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 text-center"
              value={alumnoData.nombre}
              onChange={handleInputChange}
            />
            <small>{formErrors.nombre}</small>
            <br />
            <label
              htmlFor="apellidos"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Apellidos
            </label>
            <input
              id="apellidos"
              type="text"
              name="apellidos"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 text-center"
              value={alumnoData.apellidos}
              onChange={handleInputChange}
            />
            <br />
            <label
              htmlFor="direccion"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Dirección
            </label>
            <input
              id="direccion"
              type="text"
              name="direccion"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 text-center"
              value={alumnoData.direccion}
              onChange={handleInputChange}
            />
            <br />
            <label
              htmlFor="poblacion"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Población
            </label>
            <br />
            <input
              id="poblacion"
              type="text"
              name="poblacion"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 text-center"
              value={alumnoData.poblacion}
              onChange={handleInputChange}
            />
            <br />
            <label
              htmlFor="codigo_postal"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Código postal
            </label>
            <input
              id="codigo_postal"
              type="text"
              name="codigo_postal"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 text-center"
              value={alumnoData.codigo_postal}
              onChange={handleInputChange}
            />
            <small>{formErrors.codigo_postal}</small>
            <br />
            <label
              htmlFor="curso"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Curso
            </label>
            <input
              id="curso"
              type="text"
              name="curso"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 text-center"
              value={alumnoData.curso}
              onChange={handleInputChange}
            />

            {message}
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AlumnoCreate;
