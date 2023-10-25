//Using the fictional narrative elements to create javascript objects

let character = {
  characterCount: 3,

  character1: {
    //Description of character 1

    IsHuman: true,
    Name: "Sophie",
    Age: 24,
    RoleInStory: "Main character",
    Features: ["Blue eyes", "Dark Brown hair", "5'5 feet tall"],
    Characteristics: [
      "Loves waffles and fries",
      "Introverted",
      "Scared of confrontation",
    ],
    Hobbies: ["Reading romcoms", "Going on Hikes", "Cooking"],

    Setting: {
      LocatedIn: "New York",
      Weather: "Breezy fall weather",
      Time: new Date("2023-10-25")
    },
  },

  character2: {
    //Description of character 2

    IsHuman: false,
    Name: "Hazel",
    Breed: "Golden Doodle",
    Age: 1,
    RoleInStory: "Thinks its the main character",

    Features: ["Soft Hazel eyes", "Fluffy brown fur", "Wagging tail"],
    Characteristics: ["Friendly", "Scared of Thunder"],
    Hobbies: [
      "Walking",
      "Jumping",
      "Playing with a ball",
      "Licking every bit of food",
    ],

    Setting: {
      LocatedIn: "New York Sophie's apartment",
      Weather: "Breezy fall weather",
      Time: new Date("2023-10-25")
    },

  },

  character3: {
    //Description of character 3

    IsHuman: true,
    Name: "James",
    Age: 25,
    RoleInStory: "Sophie's bestfriend",

    Features: ["Grey Eyes", "Dark Brown wavy hair", "5'11 feet tall"],
    Characteristics: ["Extroverted", "Scared of confined spaces"],
    Hobbies: ["Photography", "Gaming", "Basketball", "Annoying Sophie"],

    Setting: {
      LocatedIn: "London",
      Weather: "Mild temerature with frequenct rain",
      Time: new Date("2023-10-26")
    },
  },
};

let dialogue = {
  //How do the characters communicate

  Language: "English",
  Medium: ["Written as texts", "Spoken on calls"],
  emotion: function (positive) {
    if (positive) {
      console.log("The tone of the dialogue is ", positive);
      return;
    } else {
      console.log("The tone of the dialogue is not positive");
    }
  },
};

let plot = {
  //Plot elements used in the story

  RisingAction: true,
  Conflict: true,
  IsItAHappyEnding: true,
  climax: false,
  IsThereCliffhanger: true,
};

let structure = {
  //who is the narrator and how is the story presented

  StoryStart: "New York",
  StoryEnd: "London",
  POV: ["James", "Sophie", "Hazel the pup"],
  Chapters: "Each chapter is a POV from one of the three characters",
  Chronolong: true,
};

let genre = {
  //theme of the story

  Category: ["Romcom", "Humour", "Fiction"],
  Theme: "Friends to Lover Trope",
};

// Choosing what character is introduced

function getRandomInt(max) {
  return Math.floor(Math.random() * max) +1;
}

console.log(getRandomInt(3));

if (getRandomInt(3) == 0){
  document.querySelector('.section-1-name').innerHTML = `Name: $(character.character1.Name)`
  document.querySelector('.section-1-age').innerHTML = character.character1.Age
}
if (getRandomInt(3) == 1){
  document.querySelector('.section-1-name').innerHTML = character.character2.Name
  document.querySelector('.section-1-age').innerHTML = character.character2.Age
}
if (getRandomInt(3) == 2){
  document.querySelector('.section-1-name').innerHTML = character.character3.Name
  document.querySelector('.section-1-age').innerHTML = character.character3.Age
}

// Starting to add javascript objects to html elements
 