
//  ********** Create array of tags to use as categories in the quote objects. **********

var tags = [
  "Information", "Dreams", "Life", "Praise", "Friendship", "Love", "Work", "Beyonce", "Bird Law", "Food", "Dating", "Karate", "Life", "Motivation", "Aging", "Environmentalism", "Communication", "Music", "Technology", "Failure", "Style", "Nature", "Money", "Relationships"
];

// ********* Create array of quote objects. **********

var quotes = [

  {
    quote: "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 3: 'The Negotiation'",
    categories: tags[0],
    year: 2007
  },

  {
    quote: "An office is for not dying. An office is a place to live life to the fullest, to the max, to... An office is a place where dreams come true.",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 5: Stress Relief",
    categories: tags[1],
    year: 2009
  },

  {
    quote: "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised.",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 4: Fun Run",
    categories: tags[3],
    year: 2007
  },

  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 2: The Fight",
    categories: tags[23],
    year: 2005
  },

  {
    quote: "I guess I’ve been working so hard, I forgot what it’s like to be hardly working.",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 7: Training Day",
    categories: tags[6]
  },

  {
    quote: "Make friends first, make sales second, make love third. In no particular order",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 6: The Delivery",
    categories: tags[6]
  },

  {
    quote: "I am Beyonce, always.",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 6: Body Language",
    categories: tags[7]
  },

  {
    quote: "Friends joke with one another. 'Hey, you're poor.' 'Hey, your momma's dead.' That's what friends do.",
    source: "Michael Scott (Steve Carell)",
    citation: "The Office, Season 4: The Deposition",
    categories: tags[4]
  },

  {
    quote: "I'll just regress, because I feel I've made myself perfectly redundant.",
    source: "Charlie Kelly (Charlie Day)",
    citation: "It's Always Sunny in Philadelphia, Season 5: Paddy's Pub: Home of the Original Kitten Mittens",
    categories: tags[8]
  },

  {
    quote: "Just get a job? Why don’t I strap on my job helmet, and squeeze down into a job cannon, and fire off into Jobland where jobs grow on jobbies!",
    source: "Charlie Kelly (Charlie Day)",
    citation: "It's Always Sunny in Philadelphia, Season 3: The Gang Sells Out",
    categories: tags[6]
  },

  {
    quote: "I eat stickers all the time dude!",
    source: "Charlie Kelly (Charlie Day)",
    citation: "It's Always Sunny in Philadelphia, Season 5: The Gang Hits the Road",
    categories: tags[9]
  },

  {
    quote: "So you think not eating cat food is putting on airs?",
    source: "Mac (Rob McElhenney)",
    citation: "It’s Always Sunny in Philadelphia",
    categories: tags[9]
  },

  {
    quote: "And you know what happens with Tokyo drifting? It leads to bickering. Which, of course, leads to karate.",
    source: "Mac (Rob McElhenney)",
    citation: "It’s Always Sunny in Philadelphia",
    categories: tags[11]
  },

  {
    quote: "Any amount of cheese before a date is too much cheese.",
    source: "Dennis Reynolds (Glenn Howerton)",
    citation: "It's Always Sunny in Philadelphia",
    categories: tags[10]
  },

  {
    quote: "Oh, look at me! The millionaire who goes to see doctors!",
    source: "Charlie Kelly (Charlie Day)",
    citation: "It’s Always Sunny in Philadelphia",
    categories: tags[22]
  },

  {
    quote: "That’s Tammy, Trey’s ex-girlfriend. This is classic Tammy. Trey broke up with Tammy because Maureen Kinallen said that she saw Tammy flirting with Walt Timby at a party. But she was only doing it to make Trey jealous because, you know, she thought that Trey secretly liked Erin Hannabry. But Trey didn’t like Erin Hannabry. It was all a bunch of bull.",
    source: "Charlie Kelly (Charlie Day)",
    citation: "It’s Always Sunny in Philadelphia",
    categories: tags[10]
  },

  {
    quote: "Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it.",
    source: "Frank Reynolds (Danny DeVito)",
    citation: "It's Always Sunny in Philadelphia",
    categories: tags[14]
  },

  {
    quote: "This bar runs on trash, dude. This bar is totally green that way.",
    source: "Charlie Kelly (Charlie Day)",
    citation: "It’s Always Sunny in Philadelphia",
    categories: tags[15]
  },

  {
    quote: "I don’t appreciate being paraphrased. Now, I choose my words very deliberately. ",
    source: "Mac (Rob McElhenney)",
    citation: "It’s Always Sunny in Philadelphia",
    categories: tags[16]
  },

  {
    quote: "There's only one thing I hate more than lying: skim milk. Which is water that is lying about being milk.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 5: Partridge",
    categories: tags[9]
  },

  {
    quote: "Dear frozen yogurt, you are the celery of desserts. Be ice cream or be nothing. Zero stars.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 6: Anniversaries",
    categories: tags[9]
  },

  {
    quote: "[Holds up iPod]  Tom put all my records into this rectangle. The songs just play one after the other. This is an excellent rectangle.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 6: Farmers Market",
    categories: tags[18]
  },

  {
    quote: "I'd wish you the best of luck but I believe luck is a concept created by the weak to explain their failures.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 6: Second Chunce",
    categories: tags[19]
  },

  {
    quote: "There are three acceptable haircuts: high and tight, crew cut, buzz cut.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 4: Bowling for Votes",
    categories: tags[20]
  },

  {
    quote: "Normally, if given the choice between doing something and nothing, I’d choose to do nothing. But I will do something if it helps someone else do nothing. I’d work all night, if it meant nothing got done.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 5: Article Two",
    categories: tags[13]
  },

  {
    quote: "It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 3: Andy and April's Fancy Party",
    categories: tags[6]
  },

  {
    quote: "It’s pointless for a human to paint scenes of nature when they can go outside and stand in it.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 3: Jerry's Painting",
    categories: tags[21]
  },

  {
    quote: "I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 3: Flu Season",
    categories: tags[16]
  },

  {
    quote: "If any of you need anything at all, too bad. Deal with your problems yourselves, like adults.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 4: I'm Leslie Knope",
    categories: tags[13]
  },

  {
    quote: "There has never been a sadness that can’t been cured by breakfast food.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 6: Ann and Chris",
    categories: tags[9]
  },

  {
    quote: "Sting like a bee. Do not float like a butterfly. That's ridiculous.",
    source: "Ron Swanson (Nick Offerman)",
    citation: "Parks and Recreation, Season 6: London",
    categories: tags[13]
  },

  {
    quote: "I like getting older. I feel like I’m aging into my personality.",
    source: "Nick Miller (Jake Johnson)",
    citation: "New Girl, Season 2: Neighbors",
    categories: tags[14]
  },

  {
    quote: "Pine has no place in this loft. It’s the wood of poor people and outhouses.",
    source: "Schmidt (Max Greenfield)",
    citation: "New Girl, Season 1: Control",
    categories: tags[20]
  },

  {
    quote: "I can do anything I put my mind to. I once figured out Alyssa Milano’s phone number just by randomly choosing numbers.",
    source: "Schmidt (Max Greenfield)",
    citation: "New Girl, Season 2: Bachelorette Party",
    categories: tags[13]
  },

  {
    quote: "I know this isn’t gonna end well, but the whole middle part is going to be awesome.",
    source: "Nick Miller (Jake Johnson)",
    citation: "New Girl, Season 2: Quick Hardening Caulk",
    categories: tags[23]
  },

  {
    quote: "Life sucks. And then it gets better. And then it sucks again.",
    source: "Nick Miller (Jake Johnson)",
    citation: "New Girl, Season 2: Re-launch",
    categories: tags[2]
  }
]

// ********* Gets a random quote from the quotes array. **********

function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNum];
}

// ********* Generates a random background color for each quote. **********

function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = color;
}

// ********* Function prints random quote to page. **********

function printQuote() {

  var aQuote = getRandomQuote();
  var quoteString = '';
  quoteString += '<p class="quote">' + aQuote.quote + '</p>';
  quoteString += '<p class="source">' + aQuote.source;
  if (aQuote.citation) {
    quoteString += '<span class="citation">' + aQuote.citation + '</span>';
  }
  if (aQuote.year) {
    quoteString += '<span class="year">' + aQuote.year + '</span>';
  }
  if (aQuote.categories) {
    quoteString += '<p class="categories">' + aQuote.categories + '</p>';
  };
  quoteString += '</p>';
  var div = document.getElementById('quote-box');
  div.innerHTML = quoteString;
  randomColor();

}

// *********** Changes quote every 20 seconds. **********

var intervalID = window.setInterval(printQuote, 20000);




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
