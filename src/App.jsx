import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const favCharacter = [
    {id: 1, name: "Basil", image: "https://i.pinimg.com/736x/ea/bd/98/eabd98c3ba3644778ae416df23fef81b.jpg",},
    {id: 2, name: "Cathy", image: "https://i.pinimg.com/736x/5b/a5/10/5ba510c1280b681d7c1f55c739010414.jpg",},
    {id: 3, name: "Nagito", image: "https://i.pinimg.com/736x/69/f7/8b/69f78b2cf139c44f0442d668b31b485b.jpg"},
    {id: 4, name: "Dante", image: "https://i.pinimg.com/736x/2d/36/e0/2d36e025bf45ab7a659e1feb02caa792.jpg"},
  ];

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`flex h-screen items-center justify-center gap-4 transition-colors duration-500 ${isDark ? "bg-slate-900" : "bg-white"}`}>

      {favCharacter.map((char) => (
        <CharacterCard
          key={char.id}
          name={char.name}
          image={char.image}
          onClick={() => alert(`Klik: ${char.name}`)}
        />
      ))}



      <DarkModeToggle onClick={() => setIsDark(!isDark)} isDark={isDark}/>

    </div>
  );
}