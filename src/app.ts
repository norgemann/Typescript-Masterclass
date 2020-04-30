class Song {
  constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
  if (typeof item.duration === "string") {
    return item.duration;
  }
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;
  return `${minutes}:${seconds}`;
}

const songDurationString = getSongDuration(new Song("LaLa", "05:31"));
console.log(songDurationString);
const songDurationMS = getSongDuration(new Song("LaLa", 330000));
console.log(songDurationMS);
