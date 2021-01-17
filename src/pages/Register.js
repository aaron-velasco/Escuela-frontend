import { React, useState } from "react";

function Login(props) {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [hasErrors, setHasErrors] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + JSON.stringify(loginData));
    fetch("http://localhost:8000/api/auth/signup", {
      method: "post",
      body: JSON.stringify(loginData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => {
        if (!response.ok) {
          setHasErrors(true);
        }
        return response.json();
      })
      .then((data) => {
        if (!hasErrors) {
          setMessage("Usuario registrado correctamente");
        } else {
          setMessage("Error al registrar al usuario, puede que el usuario ya exista");
          setFormErrors(data);
        }
      })
      .catch((error) => console.log(error));
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
            Login
          </h2>

          <form className="mt-10" onSubmit={enviarDatos}>
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="nombre"
              autoComplete="name"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              value={loginData.name}
              onChange={handleInputChange}
            />
            <small>{formErrors.nombre}</small>
            <br />
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e-mail address"
              autoComplete="email"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              value={loginData.email}
              onChange={handleInputChange}
            />
            <small>{formErrors.email}</small>
            <br />
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              value={loginData.password}
              onChange={handleInputChange}
            />
            <small>{formErrors.password}</small>
            <br />
            <label
              htmlFor="password_confirmation"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Confirmación de contraseña
            </label>
            <input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              placeholder="password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              value={loginData.password_confirmation}
              onChange={handleInputChange}
            />
            <small>{formErrors.password_confirmation}</small>
            <br />
            {message}
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
