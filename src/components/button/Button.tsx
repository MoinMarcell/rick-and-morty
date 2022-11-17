import React, {useState} from "react";

export default function Button(){
    const [count, setCount] = useState(0)

    const increaseWater = () => setCount(count + 1)
    const decreaseWater = () => setCount(count - 1)

    return(
        <div>
            <p>Wie viel Liter hast du schon getrunken heute: {count}L 💧 getrunken</p>
            <button onClick={increaseWater}>1L 💧 Hinzufügen</button>
            <button onClick={decreaseWater}>1L 💧 Abziehen</button>
        </div>
    )
}