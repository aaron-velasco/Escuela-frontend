import './App.css';
import './tailwind.css';
import Login from './pages/Login'
import AlumnosTable from './pages/AlumnosTable'
import AlumnoShow from './pages/AlumnoShow'
import AlumnoCreate from './pages/AlumnoCreate'
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
          <Route exact path="/alumno/:id"     component={AlumnoShow} />
          <Route exact path="/" component={AlumnosTable} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
