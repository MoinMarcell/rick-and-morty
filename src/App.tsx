import {RICK_AND_MORTY_CHARACTERS} from "./RickAndMortyCharacters";
import Gallery from "./components/gallery/Gallery";

const characters = RICK_AND_MORTY_CHARACTERS

function App() {
    return (
    <div className="App">
        <Gallery characters={characters}/>
    </div>
  );
}

export default App;
