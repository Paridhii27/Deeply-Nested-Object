//Using the fictional narrative elements to create javascript objects

let character = {
  characterCount: 3,

  character1: {
    //Description of character 1

    IsHuman: true,
    Name: Sophie,
    Age: 24,
    LocatedIn: "New York",
    Features: ["Blue eyes", "Dark Brown straight hair", "5'5 feet tall"],
    Characteristics: [
      "Loves waffles and fries",
      "Introverted",
      "Scared of confrontation",
    ],
    Hobbies: ["Reading romcoms", "Going on Hikes", "Cooking"],

    RoleInStory: "Main character",
  },

  character2: {
    //Description of character 2

    IsHuman: false,
    Name: "Hazel",
    Breed: "Golden Doodle",
    Age: 1,
    Features: ["Soft Hazel eyes", "Fluffy brown fur", "Wagging tail"],
    Characteristics: ["Friendly", "Scared of Thunder"],
    Hobbies: [
      "Walking",
      "Jumping",
      "Playing with a ball",
      "Licking every bit of food",
    ],

    RoleInStory: "Thinks its the main character",
  },

  character3: {
    //Description of character 3

    IsHuman: true,
    Name: "James",
    Age: 25,
    LocatedIn: "London",
    Features: ["Grey Eyes", "Dark Brown wavy hair", "5'11 feet tall"],
    Characteristics: ["Extroverted", "Scared of confined spaces"],
    Hobbies: ["Photography", "Gaming", "Basketball", "Annoying Sophie"],

    RoleInStory: "Sophie's bestfriend",
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

let setting = {
  //where does the story take place

  Place: ["New York", "London"],
  Description:
    "The story is based in the current time and takes place over a year.",
  Year: 2023,
  StartsIn: October,
  WeatherLondon: "Mild temerature with frequenct rain",
  WeatherNewYork: "Breezy fall weather",
};

let genre = {
  //theme of the story

  Category: ["Romcom", "Humour", "Fiction"],
  Theme: "Friends to Lover Trope",
};
