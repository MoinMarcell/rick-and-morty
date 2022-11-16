import "./App.css"
import {RICK_AND_MORTY_CHARACTERS} from "./RickAndMortyCharacters";
import Gallery from "./components/gallery/Gallery";

const nameList = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Neville Longbottom"]
const characters = RICK_AND_MORTY_CHARACTERS

function App() {
    return (
    <div className="App">
        <h1>RICK AND MORTY CHARACTERS</h1>
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
