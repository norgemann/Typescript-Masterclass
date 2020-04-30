//Literal Type Guards and “in” Operator
class Song {
  kind: "song"; //Literal Type
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: "playlist"; //Literal Type
  constructor(public name: string, public songs: string[]) {}
}

//“in” Operator
function isThisASong(item: any): item is Song {
  return "title" in item; //does this property exists in object
}

function getItemName(item: Song | Playlist) {
  if (item.kind === "song") {//Literal Type Guard
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song("lala", 666000));
const playlistName = getItemName(
  new Playlist("best songs", ["lala", "u nanana"])
);

console.log(songName, playlistName);
