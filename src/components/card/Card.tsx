import React from "react";
import "../css/Card.css"
import {Character} from "../model/Character";

type CardProps = {
    character: Character,
    deleteCharacter(id: number): void
}


export default function Card(props: CardProps){

    function onClickBtn(){
        props.deleteCharacter(props.character.id)
    }

    return(
        <div className={"col"}>
            <div className="card h-100">
                <img src={props.character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><a href={props.character.url}>{props.character.name}</a></h5>
                    <p className={"card-subtitle"}><span className={props.character.status}><i className={"fa-solid fa-circle"}></i></span> {props.character.status} - {props.character.species}</p>
                    <br/>
                    <p className="card-text"><span className={"text-muted"}>Last known Location:</span> <br/>{props.character.location.name}</p>
                </div>
                <div className={"card-footer"}>
                    <button className={"btn btn-danger"} onClick={onClickBtn}>DELETE</button>
                </div>
            </div>
        </div>
    )
}