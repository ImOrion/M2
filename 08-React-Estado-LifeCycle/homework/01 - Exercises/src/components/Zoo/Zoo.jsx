import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });



  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);



  const handleSpecies = (event) => {
    switch (event.target.value) {
      case "Mamíferos":
         
        const filtroMamifero = zoo.animals.filter(
          (mamifero) => mamifero.specie === "Mamíferos"
        );
        
        setZoo({ ...zoo, animals: filtroMamifero });
        break;

      case "Reptiles":
        const filtroReptil = zoo.animals.filter(
          (reptiles) => reptiles.specie === "Reptiles"
        );
        setZoo({ ...zoo, animals: filtroReptil });
        break;

      case "Aves":
        const filtroAve = zoo.animals.filter((aves) => aves.specie === "Aves");
        setZoo({ ...zoo, animals: filtroAve });
        break;
    }
  };



  const handleAllSpecies = () => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      );
  };




  const handleInputChange = (event) => {
    setZoo({ ...zoo, zooName: event.target.value });
  };



  return (
    <div>
      <label htmlFor="">Zoo Name:</label>
      <input onChange={handleInputChange} value={zoo.zooName} type="text" />
      <h1>{zoo.zooName}</h1>

      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />

      <Animals animals={zoo.animals} />
    </div>
  );
}
