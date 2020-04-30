let dictionary: Record<string, MuzickeNumere> = {};

interface MuzickeNumere {
  trenutna: string;
  sledeca: string;
}

const muzickeNumere: Record<keyof MuzickeNumere, string> = {
  trenutna: "Voz Bajaga",
  sledeca: "RHCP Under the bridge",
};

//Numbers are transformed to String
dictionary[0] = muzickeNumere;

console.log(dictionary);
