import React from "react";
import Card from "../card/Card";
import "../css/Gallery.css";

type GalleryProps = {
    characters: {
        id: number,
        name: string,
        image: string,
        status: string
    }[]
}

export default function Gallery(props: GalleryProps){
    const characterComponent = props.characters.map((character) => {
        return <Card id={character.id} name={character.name} image={character.image} status={character.status}/>
    })

    return(
        <div className={"Gallery"}>
            {characterComponent}
        </div>
    )
}