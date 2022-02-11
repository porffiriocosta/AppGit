import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
      </div>
      <Link to="/gitsearch">
        <button className="btn btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
