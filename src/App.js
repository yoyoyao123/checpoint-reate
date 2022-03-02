import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App  bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    <div className="container">
        <form>
      <fieldset>
        <legend>Inscrivez vous ici</legend>
        <div className="mb-3">
          <label for="" class="Adresse mail"></label>
          <input type="text" id="" class="form-control" placeholder="votre email"/>
        </div>
        <div className="mb-3">
          <label  class="form-label">Mot de passe</label>
          <select id="" class="form-select">
            <option>Votre mot de passe</option>
          </select>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id=""/>
            <label className="form-check-label" for="">
              cliquez ici
            </label>
          </div>
        </div>
        <button type="sgiubmit" class="btn btn-primary">Soumetre</button>
      </fieldset>
    </form>
        </div>
      

    
    </div>
  );
}

export default App;
