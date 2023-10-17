function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "google") {
      resolve("Google Say Hi");
    } else {
      reject("Google Can't");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`Extra Information+${response}`);
  });
}

//normal Promise
// makeRequest("googl")
//   .then((response) => {
//     console.log("response Received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const doWork = async (pre) => {
  try {
    const response = await makeRequest(pre);
    console.log("processing");
    processRequest(response);
    console.log("done");
  } catch (error) {
    console.log(error);
  }
};

doWork("google");
