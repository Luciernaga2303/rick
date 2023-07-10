import React from 'react';
export function Characters({ character }) {
  const navigate = useNavigate();
  //console.log(character)
  return (
    <div className="Card">
      <h1 className="Card-name">{character.name}</h1>
      <img className="Card-image" src={character.image} alt="" />
      <div className="Card-description">
        <p>
          <strong>Location : </strong>
          {character.location.name}
        </p>
        <p>
          <strong>Status : </strong>
          {character.status}
        </p>
        <p>
          <strong>Species : </strong>
          {character.species}
        </p>
      </div>
      <button className="Card-button" onClick={() => navigate(`/characterInfo/${character.id}`)}>
        More
      </button>
    </div>
  );
}