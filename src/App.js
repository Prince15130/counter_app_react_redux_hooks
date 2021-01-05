import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import history from "./components/history";

function App() {
  return (
    <Router>
      <div className="container is-max-desktop ">
        <div className="notification is-dark has-text-centered">
          <code>All Types Counter App</code>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <button
            className="button mt-2 is-success is-outlined"
            onClick={() => history.push(`/`)}
          >
            <span className="icon is-small">
              <i className="fas fa-list-ul"></i>
            </span>
            <span>Simple Counter App</span>
          </button>
          <button
            className="button ml-2 mt-2 is-link is-outlined "
            onClick={() => history.push(`/CounterHooks/`)}
          >
            <span className="icon is-small">
              <i className="fas fa-list-ul"></i>
            </span>
            <span>Hooks Counter App</span>
          </button>
          <button
            className="button ml-2 mt-2 is-danger is-outlined "
            onClick={() => history.push(`/CounterRedux/`)}
          >
            <span className="icon is-small">
              <i className="fas fa-list-ul"></i>
            </span>
            <span>Redux Counter App</span>
          </button>
        </div>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
