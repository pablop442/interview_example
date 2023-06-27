const userData = require('./userData.json');
const url = "https://petstore.swagger.io/v2/"


async function postUser(data) {
  try {
    const response = await fetch(url + 'user', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function login(userName, password) {
  
    const response = await fetch(`${url}user/login?username=${userName}&password=${password}`);
  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }
  const result = await response.json();
  return result;
  } 

async function getUser(userName) {
  const response = await fetch(`${url}user/${userName}`);
  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }
  const result = await response.json();
  return result;
}


async function main() {
  try {
    const newUser = await postUser(userData);
    console.log(`Successfuly created new user. Response: ${JSON.stringify(newUser)}`);

    const loggedInUser = await login('pablo442', '12345');
    console.log(`User is successfully logged in. Response: ${JSON.stringify(loggedInUser)}`);

    const user = await getUser('pablo442');
    console.log(`Your user data: ${JSON.stringify(user)}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

