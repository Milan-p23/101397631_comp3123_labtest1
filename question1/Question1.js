async function lowerCaseWords(array) {
  if (!Array.isArray(array)) {
    throw new Error("Error! The given input should be an array");
  }

  const lowerCasedArray = [];

  for (const item of array) {
    if (typeof item === 'string') {
      lowerCasedArray.push(item.toLowerCase());
    }
  }

  return lowerCasedArray;
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'wings'];

(async () => {
  try {
    const lowerCasedArray = await lowerCaseWords(mixedArray);
    console.log(lowerCasedArray);
  } catch (err) {
    console.error("An error occurred: " + err.message);
  }
})();
