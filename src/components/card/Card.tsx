import React from "react";
import "../css/Card.css"

type CardProps = {
    id: number,
    name: string,
    image: string,
    status: string
}

export default function Card(props: CardProps){
    if(props.status === "Alive"){
        return (
            <div className={"Card"} key={props.id}>
                <h3>{props.name}</h3>
                <img src={props.image} alt={"CHARACTER PIC"}/>
                <p>Status: <span className={"alive"}>{props.status}</span></p>
            </div>
        )
    }else if(props.status === "Dead"){
        return(
            <div className={"Card"} key={props.id}>
                <h3>{props.name}</h3>
                <img src={props.image} alt={"CHARACTER PIC"}/>
                <p>Status: <span className={"dead"}>{props.status}</span></p>
            </div>
        )
    }else{
        return(
            <div className={"Card"} key={props.id}>
                <h3>{props.name}</h3>
                <img src={props.image} alt={"CHARACTER PIC"}/>
                <p>Status: <span>{props.status}</span></p>
            </div>
        )
    }
}