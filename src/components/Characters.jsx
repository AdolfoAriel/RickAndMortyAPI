import React, { useState } from 'react';

function Characters({ characters = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="row">
        {characters.map((character, index) => (
          <div key={index} className="col-lg-2 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <img
                src={character.image}
                alt="character"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(character)} 
              />
              <div className="card-body">
                <h5 className="card-title">Nombre: {character.name}</h5>
                <hr />
                <p>ID: {character.id}</p>
                <p>Especie: {character.species}</p>
                <p>Ubicación: {character.location.name}</p>
                <p>Nombre de su origen: {character.origin.name}</p>
                <p>
                  Link de los episodios donde aparecen:{" "}
                  {character.episode
                    .slice(0, 3)
                    .sort()
                    .map((link, index) => (
                      <React.Fragment key={index}>
                        <br></br>
                        <span>c{index + 1}. </span>
                        <a href={link}>{link}</a>
                        {index < 2 && <span>, </span>}
                      </React.Fragment>
                    ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedCharacter && (
              <div>
                <p>Nombre: {selectedCharacter.name}</p>
                <p>ID: {selectedCharacter.id}</p>
               
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Characters;
