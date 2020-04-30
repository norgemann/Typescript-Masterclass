class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: string[]) {}
}

//User Defined Type Guards, vazno je da vrati boolean
function isThisASong(item: any): item is Song {
  return item instanceof Song;
}

function getItemName(item: Song | Playlist) {
  if (isThisASong(item)) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song("lala", 666000));
const playlistName = getItemName(
  new Playlist("best songs", ["lala", "u nanana"])
);

console.log(songName, playlistName);
