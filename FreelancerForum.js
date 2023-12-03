/*State*/
//Defining our variables for the data the program will need to remember

//TODO: We need arrays for Names, Occupation, and Price for randomly generated freelancers
const names = ["Alice", "Bob", "Carol", "Lisa", "Jason", "Ann", "Charlie", "Farid", "Leo", "Caitlin"];
const occupation = ["Writer", "Teacher", "Programmer", "Artist", "UI/UX Design", "Graphic Design", "Illustration", "Videography", "Motion Design", "Personal Assistant"]
const price = [30, 50, 70, 95, 150, 45, 80, 120, 80, 110]

//TODO: we are priming an object to hold the randomly generated freelancer information
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50
    },
]

//radomInterval will generate an integer between 1000 and 5000 milliseconds (1-5 seconds)
//`setInterval` will call `addFreelancer` every `randomInterval`
//calling `clearInterval(addFreelancerIntervalId)` will stop the interval
function randomInterval(min = 1000, max = 5000) {
    //finding the difference
    let numDiff = max - min;
    //generate a random number of either 0 or 1
    let random = Math.random();
    //multiply random with difference and round down to a whole number
    random = Math.floor(random * numDiff);
    //add to the minimum value so that we cannot go lower than our minimum value
    random = random + min;
    
    return random;
}
const addFreelancerIntervalId = setInterval(addFreelancer, randomInterval)

//renering the initial state
render();

//DOM updating the state
function render() {
    // Render the freelancers
    const freelancers = document.querySelector("#freelancers");
    const freelancerElements = shapes.map((shape) => {
      const element = document.createElement("li");
      element.classList.add(shape.color, shape.size);
      return element;
    });
    freelancers.replaceChildren(...squareElements);
}