import {RICK_AND_MORTY_CHARACTERS} from "./RickAndMortyCharacters";
import Gallery from "./components/gallery/Gallery";
import "./App.css"
import React, {ChangeEvent, useState} from "react";

export default function App() {
    const [search, setSearch] = useState("")

    const safeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const [filterCharacter, setFilterCharacter] = useState(RICK_AND_MORTY_CHARACTERS)

    const deleteCharacter = (id: number) => {
        setFilterCharacter(filterCharacter.filter(character => character.id !== id))
    }

    const filteredCharacters = () => {
        return filterCharacter.filter(character => character.name.toLowerCase().includes(search.toLowerCase()) || character.status.toLowerCase().includes(search.toLowerCase()) || character.species.toLowerCase().includes(search.toLowerCase()))
    }

    return (
        <div className={"container mt-3"}>
            <div className="input-group mb-3">
                <input className={"input-group"} placeholder={"Search for names, species or status"} onChange={safeSearch} />
            </div>
            <Gallery characters={filteredCharacters()} deleteCharacter={deleteCharacter} />
        </div>
  );
}
