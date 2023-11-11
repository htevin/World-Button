const word = document.getElementById("word");
const button = document.querySelector(".cool-button");

const words = [
  "Magic",
  "Crazy",
  "Sleepy",
  "Enchanting",
  "Eccentric",
  "Melancholy",
  "Ancient",
  "Drowsy",
  "Mystical",
  "Insane",
  "Gloom",
  "Spooky",
  "Aged",
  "Slumberous",
  "Enigmatic",
  "Bizarre",
  "Woeful",
  "Frightening",
  "Vintage",
  "Dreamy",
  "Lunatic",
];

const randomWord = () => {
  word.innerText = `${words[Math.floor(Math.random() * words.length)]} World`;
};
