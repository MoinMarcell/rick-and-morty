import {Origin} from "./Origin";
import {Location} from "./Location";

export type Character = {
    id: number,
    name: string,
    image: string,
    status: string,
    url: string,
    species: string,
    gender: string,
    origin: Origin,
    episode: string[],
    location: Location
}