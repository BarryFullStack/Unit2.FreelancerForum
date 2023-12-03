/*State*/
//Defining our variables for the data the program will need to remember

//TODO: We need arrays for Names, Occupation, and Price for randomly generated freelancers
const names = ["Alice", "Bob", "Carol", "Lisa", "Jason", "Ann", "Charlie", "Farid", "Leo", "Caitlin"];
const occupations = ["Writer", "Teacher", "Programmer", "Artist", "Designer", "Graphics", "Illustration", "Videography", "Animator", "Assistant"]
const prices = [30, 50, 70, 95, 150, 45, 80, 120, 80, 110]
const maxFreelancers = 7;
//TODO: we are priming an object to hold the randomly generated freelancer information
const newFreelancers = [
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

const startingPrices = [30, 50];

//radomInterval will generate an integer between 1000 and 5000 milliseconds (1-5 seconds)
//`setInterval` will call `addFreelancer` every `randomInterval`
//calling `clearInterval(addFreelancerIntervalId)` will stop the interval
function randomInterval(min = 2000, max = 5000) {
    //finding the difference
    let numDiff = max - min;
    //generate a random number of either 0 or 1
    let random = Math.random();
    //multiply random with difference and round down to a whole number
    random = Math.floor(random * numDiff);
    //add to the minimum value so that we cannot go lower than our minimum value
    random = random + min;
    console.log(random);
    return random;
}

//add carol timed interval
//const addCarolIntervalId = setTimeout(addCarol, 2000);

const addFreelancerIntervalId = setInterval(addFreelancer, randomInterval());
//need to run the interval each time to get it to vary the freelancer appearance timing
//const addFreelancerIntervalId = setTimeout(addFreelancer, randomInterval = (Math.random()*(8000 - 2000) +2000));
//console.log(randomInterval);
//renering the initial state
render();

//add a function to track the average price
/* I want to have the prices go into an array as they are added.
Then I want them to be added together and then that total is divided by the array length.
I then want that output to replace the starting value of 0.
then the text on the webpage updates with "The average starting price is $${currentAverage}."*/
//gets the average of array startingPrices
/*
function averagePrices(startingPrices) {
    let arrAvg = 0;
    for (let i = 0; i < startingPrices.length; i++){
        arrAvg = (arrAvg + startingPrices[i]) / startingPrices.length;
    }
    console.log(arrAvg);
    return arrAvg;
}
*/

//I want the text to display as such `${names} ${occupations} $ ${prices}`

//DOM updating the state
function render() {
    // Render the  random freelancers
    const freelancers = document.querySelector("#freelancers");
    const freelancerElements = newFreelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.classList.add(freelancer.name, freelancer.occupation, freelancer.price);
      console.log(element);
      //need to get the text to display
      element.textContent = (`${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`);
      return element;
    });
    freelancers.replaceChildren(...freelancerElements);

    //render the starting Average price
    const averagePrices = document.querySelector("#average");
    const averagePriceElements = startingPrices.map(() =>{
        const avgElement = document.createElement("h3");
        const average = startingPrices.reduce ((a, b) => a+b) /startingPrices.length;
        console.log(average);
        //avgElement.classList.add(startingPrice);
        console.log(avgElement);
        avgElement.textContent = (`The average starting price is $${average.toFixed(2)}`);
        //return arrAvg  / startingPrices.length;
        return avgElement;
    });
    averagePrices.replaceChildren(...averagePriceElements)
}

//add Carol first per the user description
// function addCarol() {
//     newFreelancers.push({ name:"Carol", occupation: "Programmer", price: 70});
//     render();
// }

// adding a random freelancer to the `newFreelancer` array
function addFreelancer() {
    //add Carol first per the user description
    if (newFreelancers.length <= 2) {
        newFreelancers.push({ name:"Carol", occupation: "Programmer", price: 70});
        startingPrices.push(70);
        render();
    }
    else if (newFreelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }
    else {
        //add a random name
        const name = names[Math.floor(Math.random() * names.length)];
  
        // add a random occupation
        const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  
        // add a random starting price
        const price = prices[Math.floor(Math.random() * prices.length)];

        //I need to seperate the value from the key and then push the value to `startingPrices`
        startingPrices.push(Object.values(price));
        
        console.log(startingPrices);
        newFreelancers.push({ name, occupation, price });

        //need to appened startingPrices with new price then get the new average and replace the value to display
  
        render();
    }
  
    // TODO: Stop adding shapes if we've reached the maximum number of shapes
    // if (newFreelancers.length >= maxFreelancers) {
    //   clearInterval(addFreelancerIntervalId);
    // }
  }
  
  //I might want to just seperat out the average code and so it only rnders once and then just replces the ending number