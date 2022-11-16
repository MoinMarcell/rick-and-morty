import React from "react";


type GreetingComponentProps = {
    name: string
}

export default function GreetingComponent(props: GreetingComponentProps){
    return(<h3>Willkommen an der Schule für Hexerei und Zauberei, {props.name}!</h3>)
}