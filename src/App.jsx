import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Button from "./components/Button";
import CharacterSearch from "./components/Buscador";

function App() {


  


  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [backgroundColor, setBackgroundColor] = useState("");
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results.slice(0,5));;
        setInfo(data.info);
        if (data.results.length > 0) {
          const characterId = data.results[0].id; // Suponiendo que el ID está en la primera posición
          if (characterId < 50) {
            setBackgroundColor("green");
          } else if (characterId >= 50 && characterId < 80) {
            setBackgroundColor("blue");
          } else {
            setBackgroundColor("red");
          }
        }

      })
      .catch((error) => console.log(error));
  };

  //
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
 
  const handleCharacterSearch = (searchId) => {

    fetch(`https://rickandmortyapi.com/api/character/${searchId}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters([data]); 
        if (data.id < 50) {
          setBackgroundColor("green");
        } else if (data.id >= 50 && data.id < 80) {
          setBackgroundColor("blue");
        } else {
          setBackgroundColor("red");
        }
      })
      .catch((error) => {
        console.error("Este ID no se encuentra en la base datos", error);
       
      });
  };
//
  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <div  style={{ backgroundColor }}>
      <Navbar brand={"rick and morty"}  />
      <CharacterSearch onSearch={handleCharacterSearch}/>
      <Button
        next={info.next}
        prev={info.prev}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="container mt-5 justify-content-center ">
        <Characters characters={characters} />
      </div>
      <Button
        next={info.next}
        prev={info.prev}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
}

export default App;
