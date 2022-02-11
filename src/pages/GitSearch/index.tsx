import './styles.css';

import ResultCard from 'components/ResultCard';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  git: string;
};

type Profile = {
  url: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
};

const GitSearch = () => {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    git: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.git}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="git"
              className="search-input"
              placeholder="Usuário Github"
              value={formData.git}
              onChange={handleChange}
            />
            <button type="submit" className="btn search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {profile && (
        <div className="container search-info">
          <>
            <img src={profile.avatar_url} alt={profile.name} />
            <div className="container search-card">
              <h5>Informações</h5>
              <ResultCard title="Nome" description={profile.name} />
              <ResultCard title="Perfil" description={profile.url} />
              <ResultCard title="Localidade" description={profile.location} />
              <ResultCard title="Seguidores" description={profile.followers} />
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default GitSearch;
