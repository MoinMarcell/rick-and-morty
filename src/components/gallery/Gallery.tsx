import React from "react";
import Card from "../card/Card";
import "../css/Gallery.css"
import {Character} from "../model/Character";

type GalleryProps = {
    characters: Character[],
    deleteCharacter(id: number): void
}

export default function Gallery(props: GalleryProps){

    const characterComponent = props.characters.map((character) => {
            return <Card character={character} deleteCharacter={props.deleteCharacter}/>
    })

    return(
        <div className={"row row-cols-1 row-cols-md-4 g-3 mt-3"}>
            {characterComponent}
        </div>
    )
}