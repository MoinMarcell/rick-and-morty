import React from "react";
import "../css/Card.css"

type CardProps = {
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
}

export default function Card(props: CardProps){
    if(props.status === "Alive"){
        return(
            <div className={"col"}>
                <div className={"card border-success h-100"}>
                    <div className="hoverText">
                        <img src={props.image} className={"card-img-top"} alt={props.name} />
                        <div className="fadedbox">
                            <div className="title text">
                                <h3>{props.name}</h3>
                                <span className="badge text-bg-warning">{props.species}</span>
                                <br/>
                                <span className="badge text-bg-warning">{props.gender}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"card-body text-success"}>
                        <h5 className={"card-title"}>{props.name} <span className="badge bg-success">Alive</span></h5>
                        <p className={"card-text"}>
                            {props.name} is located in {props.location.name}, but is originally from {props.origin.name}. {props.name} played in {props.episode.length} Episodes! This is amazing!
                        </p>
                        <button type="button" className="btn btn-secondary">Episodes</button>
                    </div>
                </div>
            </div>
        )
    }else if(props.status === "Dead"){
        return(
            <div className={"col"}>
                <div className={"card border-danger h-100"}>
                    <div className="hoverText">
                        <img src={props.image} className={"card-img-top"} alt={props.name} />
                        <div className="fadedbox">
                            <div className="title text">
                                <h3>{props.name}</h3>
                                <span className="badge text-bg-warning">{props.species}</span>
                                <br/>
                                <span className="badge text-bg-warning">{props.gender}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"card-body text-danger"}>
                        <h5 className={"card-title"}>{props.name} <span className="badge bg-danger">Dead</span></h5>
                        <p className={"card-text"}>
                            {props.name} is located in {props.location.name}, but is originally from {props.origin.name}. {props.name} played in {props.episode.length} Episodes! This is amazing!
                        </p>
                        <button type="button" className="btn btn-secondary">Episodes</button>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={"col"}>
                <div className={"card border-info h-100"}>
                    <div className="hoverText">
                        <img src={props.image} className={"card-img-top"} alt={props.name} />
                        <div className="fadedbox">
                            <div className="title text">
                                <h3>{props.name}</h3>
                                <span className="badge text-bg-warning">{props.species}</span>
                                <br/>
                                <span className="badge text-bg-warning">{props.gender}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"card-body text-info"}>
                        <h5 className={"card-title"}>{props.name} <span className="badge bg-info">Unknown</span></h5>
                        <p className={"card-text"}>
                            {props.name} is located in {props.location.name}, but is originally from {props.origin.name}. {props.name} played in {props.episode.length} Episodes! This is amazing!
                        </p>
                        <button type="button" className="btn btn-secondary">Episodes</button>
                    </div>
                </div>
            </div>
        )
    }
}
