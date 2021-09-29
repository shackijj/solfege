function random(min, max) {
   const result = Math.round(Math.random() * (max - min) + min);
   return Math.round(result)
}

function randomAccd() {
    const accd = ["#", "", "♭"]
    return accd[random(0, accd.length - 1)];
}

function randomType(types) {
    if (types.length === 0) {
        return ''
    }
    return types[random(0, types.length - 1)];
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function getChords() {
    const chords = ["A", "B", "C", "D", "E", "F", "G", "B"];
    return shuffle(chords);
}

export const getRandomChords = (types, inversions) => {
    return getChords().map((chord) => chord + randomAccd() + randomType(types) + randomType(inversions))
}