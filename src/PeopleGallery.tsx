import React from "react";
import GreetingComponent from "./GreetingComponent";

type PeopleGalleryProps = {
    nameList: string[]
}

export default function PeopleGallery(props: PeopleGalleryProps){
    const peoplesName = props.nameList.map((peopleName, index) => {
        return <GreetingComponent name={peopleName} key={index} />
    })

    return <div>{peoplesName}</div>
}