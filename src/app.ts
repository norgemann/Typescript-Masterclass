//Interfaces vs Type Aliases
interface Artist {
  name: string;
}



class ArtistCreator {
  constructor(public name: string) {}
}
//Klasa takodje moze da da strukturalne definicije(umesto interfejsa)
function createArtist({ name }: ArtistCreator) {
  return new ArtistCreator(name);
}

const artist = createArtist({ name: "Filip" });

console.log(artist.name)