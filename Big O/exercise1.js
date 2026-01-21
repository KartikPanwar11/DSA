// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; //o(n)
    a++;  // O(n)
  }
  return a; // O(1)
}

// The Big O of the function is O(n) because the loop runs n times, and the other operations are constant time O(1).
// Therefore, the overall time complexity is dominated by the loop, resulting in O(n).