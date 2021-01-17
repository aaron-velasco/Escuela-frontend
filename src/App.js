import './App.css';
import './tailwind.css';
import Login from './components/Login'
import AlumnosTable from './components/AlumnosTable'
import Alumno from './components/Alumno'
import AlumnoCreate from './components/AlumnoCreate'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container mx-auto">
      <Switch>
          <Route path="/login"  component={Login} />
          <Route exact path="/alumno/create"  component={AlumnoCreate} />
          <Route exact path="/alumno/:id"     component={Alumno} />
          <Route exact path="/" component={AlumnosTable} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
