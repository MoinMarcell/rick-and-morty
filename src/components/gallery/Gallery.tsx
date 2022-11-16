import React from "react";
import Card from "../card/Card";
import "../css/Gallery.css"

type GalleryProps = {
    characters: {
        id: number,
        name: string,
        image: string,
        status: string,
        url: string,
        species: string,
        gender: string,
        origin: {
            name: string
        },
        episode: string[],
        location: {
            name: string
        }
    }[]
}

export default function Gallery(props: GalleryProps){
    const characterComponent = props.characters.map((character) => {
        return <Card location={character.location} episode={character.episode} origin={character.origin} gender={character.gender} species={character.species} url={character.url} key={character.id} name={character.name} image={character.image} status={character.status}/>
    })

    return(
        <div className={"row row-cols-2 row-cols-4 row-cols-md-6 g-3 Gallery"}>
                {characterComponent}
            </div>
    )
}