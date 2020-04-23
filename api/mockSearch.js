// INSTRUCTIONS
/*
*  mockSearch.js is used to "pretend" we're getting album data from Spotify. We
*  will then replace it with the actual Spotify API
*
*  27. Create a constant called timeout and make it equal to an instance of an ES6 function
*
*  - this function returns a new promise that will capture a response
*  - provide your own description indicating what this code serves for you
*
*  const timeout = ms => new Promise(res => setTimeout(res, ms))
*
*  28. Add the following lines of code:
*
*  export default async() ==> {}
*
*  29. Fill in the following argument for the async() method
*
{ offset, limit, q, }

* *
*  30. Inside the async function block {}
* - add an await statement that invokes a 300 ms timeout
* - console log the value of q (for testing)
* - create a map function that takes item i as input, and in that function pass an object with id, and title attributes that equate to the song info as well as the sample image (defined as sampleImage) - see below.
*

let mapFunc = i => ({ id: i + offset, title: `Song ${q} ${i + offset}`, sampleImage });

* *
*  31. add the return statement , and "describe what it does"
*
return [...Array(limit).keys()].map(mapFunc);

* *
* review - https://stackoverflow.com/questions/42964102/syntax-for-async-arrow-function for syntax discussion of async()
*
*
* THEN return to App.js (step 33)
* */


// insert code for step (27) here
const timeout = ms => new Promise(res => setTimeout(res, ms))
// a sample image
const sampleImage = "https://www.edapostol.com/img/lz4.jpg";

// add code for step (28) here
export default async({offset, limit, q}) => { 
    await timeout(300);
    console.log("q:", q);
    let mapFunc = i => ({ id: i + offset, title: `Song ${q} ${i + offset}`, sampleImage });
    return [...Array(limit).keys()].map(mapFunc);
    // returns a new Array of size 'limit' where each element is mapped using the mapFunc
}
// add the arguments for the async() method as in step (29) below
// then complete the  code within the async function as described in (30) and (31)

// export default async () => {}
