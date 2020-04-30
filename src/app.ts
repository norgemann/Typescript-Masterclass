class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: string[]) {}
}

function getItemName(item: Song | Playlist) {
  if (item instanceof Song) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song("lala", 666000));
const playlistName = getItemName(
  new Playlist("best songs", ["lala", "u nanana"])
);

console.log(songName, playlistName);
