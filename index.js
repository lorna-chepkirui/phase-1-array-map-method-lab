const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((title) =>
    title
      // make an array of title words
      .split(" ")
      // Get every word in the array of title words
      // Break the word to have the first letter and the rest of the word
      // and capitalize the first letter
      .map((word) => word.slice(0, 1).toLocaleUpperCase() + word.slice(1))
      // The join the title words back to a sentence
      .join(" ")
  );
}
