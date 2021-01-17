import {React, useState, useEffect} from "react"
import {Link} from "react-router-dom"

function AlumnosTableRow(props) {
    const [editMenu, setEditMenu] = useState("");

    useEffect(() => {
        if(localStorage.getItem('logged_in') === 'true'){
        setEditMenu([<Link to={ `/alumno/${props.alumno.uuid}/edit/` } className="text-yellow-600 underline">Editar</Link>,<br/>,
        <Link to={ `/alumno/${props.alumno.uuid}/delete/` } className="text-red-600 underline">Borrar</Link>
    ]
);}
    },[])
   
    return (
        <tr className="shadow-sm">
            <td className="px-16 py-2">{props.alumno.uuid}</td>
            <td className="px-16 py-2">{props.alumno.nombre}</td>
            <td className="px-16 py-2">{props.alumno.apellidos}</td>
            <td className="px-16 py-2">{props.alumno.curso}</td>
            <td className="px-16 py-2"><Link to={ `/alumno/${props.alumno.uuid}` } className="text-blue-600 underline">Ver</Link> {editMenu}</td>
        </tr>
    )
}

export default AlumnosTableRow