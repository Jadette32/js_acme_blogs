/* function createElemWithText(1)
a. Receives up to 3 parameters
b. 1st parameter is the HTML element string name to be created (h1, p, button, etc)
c. Set a default value for the 1st parameter to “p”
d. 2nd parameter is the textContent of the element to be created
e. Default value of the 2nd parameter is an empty string.
f. 3rd parameter is a className if one is to be applied (optional)
g. Use document.createElement() to create the requested HTML element
h. Set the other desired element attributes.
i. Return the created element.
*/

function createElemWithText(nameOfElToBeCreated = "p", textContentOfCreatedEl = "", className = "") {

    // Creation of HTML element (new)
    let newlyCreatedElWithText = document.createElement(nameOfElToBeCreated);

    // to the element generated above, add textContent (text)
    newlyCreatedElWithText.textContent = textContentOfCreatedEl;

    // if an argument is supplied, apply 
    newlyCreatedElWithText.className = className;

    // or, add a class using the code below.
    // newlyCreatedElWithText.classList.add(className);

    // returning the element which is newly created
    return newlyCreatedElWithText;
  }

  // text calls to the aforementioned function
  console.log(createElemWithText("p", "Newly created paragraph or p element."));
  console.log(createElemWithText("h1", "Newly created h1 or heading element.", "h1class"));
  console.log(createElemWithText("div", "Newly created div element.", "divclass"));
  console.log(createElemWithText("h3", "Newly created h3 element."));


/* function createSelectOptions (2)
a. Test users JSON data available here: https://jsonplaceholder.typicode.com/users
b. For testing (not in function) you may want to define users with the test data.
c. Receives users JSON data as a parameter
d. Returns undefined if no parameter received
e. Loops through the users data
f. Creates an option element for each user with document.createElement()
g. Assigns the user.id to the option.value
h. Assigns the user.name to the option.textContent
i. Return an array of options elements*/


// defining the Users from given Json package


const users = [

{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
},
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
        }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
    }
},
{
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
        }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
    }
},
{
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
},
{
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
        }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
    }
},
{
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
        }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
    }
},
{
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
    }
},
{
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
}
]

function createSelectOptions(users){
//returns undefined if no data parameter is provided.
if(users === undefined || users  === null){
    return undefined
}

// define an array
const  optionArray = []

// for each user of users array
for(const user of users){
    // print user in console
    console.log(user)
    // create option 
    var opt = document.createElement('option');

    // assign user id to option value
    opt.value = user.id;

    // assign user name to innerhtml of option
    opt.innerHTML = user.name;

    // add that options to array
    optionArray.push(opt)

}

// return  array
return optionArray

}

const options = createSelectOptions(users);

console.log(options);

/* function toggleCommentSection(3)
a. Receives a postId as the parameter
b. Selects the section element with the data-post-id attribute equal to the postId
received as a parameter
c. Use code to verify the section exists before attempting to access the classList
property
d. At this point in your code, the section will not exist. You can create one to test if
desired.
e. Toggles the class 'hide' on the section element
f. Return the section element
*/


function toggleCommentSection(postId) {
// Check if postId is not provided
if (postId === undefined) {
    return undefined;
}

// Selects the section element with the data-post-id attribute 
// equal to the postId received as a parameter
let section = document.querySelector(`section[data-post-id="${postId}"]`);

// verify if section exists
if (section) {
    // toggle the class `hide` on the section element
    section.classList.toggle('hide');
}

// return the section element
return section;
}

// test toggleCommentSection
toggleCommentSection(1);
toggleCommentSection(2);


/*
toggleCommentButton (4)
a. Receives a postId as the parameter
b. Selects the button with the data-post-id attribute equal to the postId received as a
parameter
c. If the button textContent is 'Show Comments' switch textContent to 'Hide
Comments'
d. If the button textContent is 'Hide Comments' switch textContent to 'Show
Comments'
e. Suggestion (not required) for above: try a ternary statement
f. Return the button element
*/

function toggleCommentButton(postId) {
// Check if postId is not provided
if (postId === undefined) {
return undefined;
}

// Selects the button element with the data-post-id attribute 
// equal to the postId received as a parameter
let button = document.querySelector(`button[data-post-id="${postId}"]`);

// Check if button doesn't exist or postId doesn't match
if (!button || button.getAttribute('data-post-id') !== postId.toString()) {
return null;
}

if (!button) {
button = document.createElement('button');
button.setAttribute('data-post-id', postId);
button.textContent = 'Show Comments';
document.body.appendChild(button);
}

button.textContent = button.textContent === 'Show Comments' ? 'Hide Comments' : 'Show Comments';

return button;
}

// Example usage:
const postIdToToggle = 456; // Replace with the desired postId
const toggledButton = toggleCommentButton(postIdToToggle);

/*
deleteChildElements(5)
a. Receives a parentElement as a parameter
b. Define a child variable as parentElement.lastElementChild
c. While the child exists…(use a while loop)
d. Use parentElement.removeChild to remove the child in the loop
e. Reassign child to parentElement.lastElementChild in the loop
f. Return the parentElement
*/

function deleteChildElements(parentElement) {
// Check if parentElement is not an HTML element
if (!(parentElement instanceof HTMLElement)) {
return undefined;
}

let child = parentElement.lastElementChild;

while (child) {
parentElement.removeChild(child);
child = parentElement.lastElementChild;
}

return parentElement;
}

// Example usage:
const parentElementToDeleteFrom = document.getElementById('exampleParent'); 
const resultParentElement = deleteChildElements(parentElementToDeleteFrom);

/* addButtonListeners (6)
a. Selects all buttons nested inside the main element
b. If buttons exist:
c. Loop through the NodeList of buttons
d. Gets the postId from button.dataset.postId
e. If a postId exists, add a click event listener to the button (reference
addEventListener) - inside the loop so this happens to each button
f. The listener calls an anonymous function (see cheatsheet)
g. Inside the anonymous function: the function toggleComments is called with the
event and postId as parameters
h. Return the button elements which were selected
i. You may want to define an empty toggleComments function for now. The listener
test will NOT pass for addButtonListeners until toggleComments is completed.
Nevertheless, I recommend waiting on the logic inside the toggleComments
function until we get there.
*/

function addButtonListeners() {
const buttons = document.querySelectorAll('main button');

if (buttons.length > 0) {
buttons.forEach(button => {
  const postId = button.dataset.postId;

  if (postId) {
    button.addEventListener('click', function(event) {
      toggleComments(event, postId);
    });
  }
});
}

return buttons;
}

/*
7. removeButtonListeners
a. Selects all buttons nested inside the main element
b. Loops through the NodeList of buttons
c. Gets the postId from button.dataset.id
d. If a postId exists, remove the click event listener from the button (reference
removeEventListener) - inside the loop so this happens to each button
e. Refer to the addButtonListeners function as this should be nearly identical
f. Return the button elements which were selected
*/

function removeButtonListeners() {
const buttons = document.querySelectorAll('main button');

buttons.forEach(button => {
const postId = button.dataset.id;

if (postId) {
  button.removeEventListener('click', function(event) {
    toggleComments(event, postId);
  });
}
});

return buttons;
}

/*
8. createComments
a. Depends on the createElemWithText function we created
b. Receives JSON comments data as a parameter
c. Creates a fragment element with document.createDocumentFragment()
d. Loop through the comments
e. For each comment do the following:
f. Create an article element with document.createElement()
g. Create an h3 element with createElemWithText('h3', comment.name)
h. Create an paragraph element with createElemWithText('p', comment.body)
i. Create an paragraph element with createElemWithText('p', `From:
${comment.email}`)
j. Append the h3 and paragraphs to the article element (see cheatsheet)
k. Append the article element to the fragment
l. Return the fragment element
*/

function createComments(commentsData) {
// Check if commentsData is not provided
if (!commentsData) {
return undefined;
}

const fragment = document.createDocumentFragment();

// Loop through the comments
commentsData.forEach((comment) => {
const article = document.createElement('article');
const nameHeading = createElemWithText('h3', comment.name);
const bodyParagraph = createElemWithText('p', comment.body);
const emailParagraph = createElemWithText('p', `From: ${comment.email}`);

article.appendChild(nameHeading);
article.appendChild(bodyParagraph);
article.appendChild(emailParagraph);
fragment.appendChild(article);
});

return fragment;
}


/*
9. populateSelectMenu
a. Depends on the createSelectOptions function we created
b. Receives the users JSON data as a parameter
c. Selects the #selectMenu element by id
d. Passes the users JSON data to createSelectOptions()
e. Receives an array of option elements from createSelectOptions
f. Loops through the options elements and appends each option element to the
select menu
g. Return the selectMenu element
*/

function populateSelectMenu(usersData) {
// Check if usersData is not provided
if (!usersData) {
return undefined;
}

const selectMenu = document.getElementById('selectMenu');
const options = createSelectOptions(usersData);

// Loop through the options elements and append each to the select menu
options.forEach((option) => {
selectMenu.appendChild(option);
});

return selectMenu;
}

/*
10. getUsers
a. Fetches users data from: https://jsonplaceholder.typicode.com/ (look at
Resources section)
b. Should be an async function
c. Should utilize a try / catch block
d. Uses the fetch API to request all users
e. Await the users data response
f. Return the JSON data
*/

async function getUsers() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users');

if (!response.ok) {
  throw new Error('Failed to fetch users data');
}

const usersData = await response.json();
return usersData;
} catch (error) {
console.error('Error fetching users data:', error.message);
return null;
}
}

/*
11. getUserPosts
a. Receives a user id as a parameter
b. Fetches post data for a specific user id from:
https://jsonplaceholder.typicode.com/ (look at Routes section)
c. Should be an async function
d. Should utilize a try / catch block
e. Uses the fetch API to request all posts for a specific user id
f. Await the users data response
g. Return the JSON data
*/


async function getUserPosts(userId = undefined) {
if (userId === undefined) {
console.error('User ID parameter is required');
return undefined;
}

try {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

if (!response.ok) {
  throw new Error('Failed to fetch user posts data');
}

const userPostsData = await response.json();
return userPostsData;
} catch (error) {
console.error('Error fetching user posts data:', error.message);
return null;
}
}


/* 
12. getUser
a. Receives a user id as a parameter
b. Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/
(look at Routes section)
c. Should be an async function
d. Should utilize a try / catch block
e. Uses the fetch API to request a specific user id
f. Await the user data response
g. Return the JSON dat
*/

async function getUser(userId) {
if (userId === undefined) {
console.error('User ID parameter is required');
return undefined;
}

try {
const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

if (!response.ok) {
  throw new Error('Failed to fetch user data');
}

const userData = await response.json();
return userData;
} catch (error) {
console.error('Error fetching user data:', error.message);
return null;
}
}

/*
13. getPostComments
a. Receives a post id as a parameter
b. Fetches comments for a specific post id from:
https://jsonplaceholder.typicode.com/ (look at Routes section)
c. Should be an async function
d. Should utilize a try / catch block
e. Uses the fetch API to request all comments for a specific post id
f. Await the users data response
g. Return the JSON data
*/

async function getPostComments(postId) {
if (postId === undefined) {
console.error('Post ID parameter is required');
return undefined;
}

try {
const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

if (!response.ok) {
  throw new Error('Failed to fetch comments data');
}

const commentsData = await response.json();
return commentsData;
} catch (error) {
console.error('Error fetching comments data:', error.message);
return null;
}
}

/*
14. displayComments
a. Dependencies: getPostComments, createComments
b. Is an async function
c. Receives a postId as a parameter
d. Creates a section element with document.createElement()
e. Sets an attribute on the section element with section.dataset.postId
f. Adds the classes 'comments' and 'hide' to the section element
g. Creates a variable comments equal to the result of await
getPostComments(postId);
h. Creates a variable named fragment equal to createComments(comments)
i. Append the fragment to the section
j. Return the section element
*/

async function displayComments(postId) {
if (!postId) {
return undefined;
}

const sectionElement = document.createElement('section');
sectionElement.dataset.postId = postId;
sectionElement.classList.add('comments', 'hide');

const comments = await getPostComments(postId);
const fragment = createComments(comments);

sectionElement.appendChild(fragment);

return sectionElement;
}


/*
15. createPosts
a. Dependencies: createElemWithText, getUser, displayComments
b. Is an async function
c. Receives posts JSON data as a parameter
d. Create a fragment element with document.createDocumentFragment()
e. Loops through the posts data
f. For each post do the following:
g. Create an article element with document.createElement()
h. Create an h2 element with the post title
i. Create an p element with the post body
j. Create another p element with text of `Post ID: ${post.id}`
k. Define an author variable equal to the result of await getUser(post.userId)
l. Create another p element with text of `Author: ${author.name} with
${author.company.name}`
m. Create another p element with the author’s company catch phrase.
n. Create a button with the text 'Show Comments'
o. Set an attribute on the button with button.dataset.postId = post.id
p. Append the h2, paragraphs, button, and section elements you have created to
the article element.
q. Create a variable named section equal to the result of await
displayComments(post.id);
r. Append the section element to the article element
s. After the loop completes, append the article element to the fragment
t. Return the fragment element
*/

async function createPosts(postsData) {
if (!postsData) {
return undefined;
}

const fragment = document.createDocumentFragment();

for (const post of postsData) {
const articleElement = document.createElement('article');

const h2Element = document.createElement('h2');
h2Element.textContent = post.title;

const bodyParagraph = document.createElement('p');
bodyParagraph.textContent = post.body;

const idParagraph = document.createElement('p');
idParagraph.textContent = `Post ID: ${post.id}`;

const author = await getUser(post.userId);
const authorParagraph = document.createElement('p');
authorParagraph.textContent = `Author: ${author.name} with ${author.company.name}`;

const catchPhraseParagraph = document.createElement('p');
catchPhraseParagraph.textContent = author.company.catchPhrase;

const showCommentsButton = document.createElement('button');
showCommentsButton.textContent = 'Show Comments';
showCommentsButton.dataset.postId = post.id;

articleElement.appendChild(h2Element);
articleElement.appendChild(bodyParagraph);
articleElement.appendChild(idParagraph);
articleElement.appendChild(authorParagraph);
articleElement.appendChild(catchPhraseParagraph);
articleElement.appendChild(showCommentsButton);

const commentsSection = await displayComments(post.id);
articleElement.appendChild(commentsSection);

fragment.appendChild(articleElement);
}

return fragment;
}

/*
16. displayPosts
a. Dependencies: createPosts, createElemWithText
b. Is an async function
c. Receives posts data as a parameter
d. Selects the main element
e. Defines a variable named element that is equal to:
i. IF posts exist: the element returned from await createPosts(posts)
ii. IF post data does not exist: create a paragraph element that is identical to
the default paragraph found in the html file.
iii. Optional suggestion: use a ternary for this conditional
f. Appends the element to the main element
g. Returns the element variable
*/

async function displayPosts(posts) {
try {
// Select the main element
const main = document.querySelector('main');

// Define the element based on whether posts exist
const element = posts
  ? await createPosts(posts)
  : createDefaultParagraph();

// Append the element to the main element
main.appendChild(element);

// Return the element variable
return element;
} catch (error) {
console.error(error);
return undefined; // Return undefined in case of an error
}
}

function createDefaultParagraph() {
const defaultParagraph = document.createElement('p');
defaultParagraph.classList.add('default-text');
defaultParagraph.textContent = 'Select an Employee to display their posts.';
return defaultParagraph;
}


/*
17. toggleComments
a. Dependencies: toggleCommentSection, toggleCommentButton
b. Receives 2 parameters: (see addButtonListeners function description)
i. The event from the click event listener is the 1st param
ii. Receives a postId as the 2nd parameter
c. Sets event.target.listener = true (I need this for testing to be accurate)
d. Passes the postId parameter to toggleCommentSection()
e. toggleCommentSection result is a section element
f. Passes the postId parameter to toggleCommentButton()
g. toggleCommentButton result is a button
h. Return an array containing the section element returned from
toggleCommentSection and the button element returned from
toggleCommentButton: [section, button
*/

function toggleComments(event, postId) {
// Dependencies: toggleCommentSection, toggleCommentButton

// Check if the required event and postId parameters are provided
if (!event || !postId) {
return undefined;
}

// Set event.target.listener to true for testing accuracy
event.target.listener = true;

// Toggle the comment section
const sectionElement = toggleCommentSection(postId);

// Toggle the comment button
const buttonElement = toggleCommentButton(postId);

// Return an array containing the section and button elements
return [sectionElement, buttonElement];
}


/*
18. refreshPosts
a. Dependencies: removeButtonListeners, deleteChildElements, displayPosts,
addButtonListeners
b. Is an async function
c. Receives posts JSON data as a parameter
d. Call removeButtonListeners
e. Result of removeButtonListeners is the buttons returned from this function
f. Call deleteChildElements with the main element passed in as the parameter
g. Result of deleteChildElements is the return of the main element
h. Passes posts JSON data to displayPosts and awaits completion
i. Result of displayPosts is a document fragment
j. Call addButtonListeners
k. Result of addButtonListeners is the buttons returned from this function
l. Return an array of the results from the functions called: [removeButtons, main,
fragment, addButtons]
*/

async function refreshPosts(postsData) {
// Check if the required postsData parameter is provided
if (!postsData) {
console.error('Error: Missing postsData parameter');
return undefined;
}

try {
// Call removeButtonListeners and store the returned buttons
const removeButtons = removeButtonListeners();

// Call deleteChildElements with the main element passed in as the parameter
const mainElement = deleteChildElements(document.querySelector('main'));

// Pass postsData to displayPosts and await completion
const fragment = await displayPosts(postsData);

// Call addButtonListeners and store the returned buttons
const addButtonListenersResult = addButtonListeners();

// Return an array of results from the functions called
return [removeButtons, mainElement, fragment, addButtonListenersResult];
} catch (error) {
console.error('Error during refreshPosts:', error);
return null; // or handle the error in an appropriate way
}
}

/*
19. selectMenuChangeEventHandler
a. Dependencies: getUserPosts, refreshPosts
b. Should be an async function
c. Automatically receives the event as a parameter (see cheatsheet)
d. Disables the select menu when called into action (disabled property)
e. Defines userId = event.target.value || 1; (see cheatsheet)
f. Passes the userId parameter to await getUserPosts
g. Result is the posts JSON data
h. Passes the posts JSON data to await refreshPosts
i. Result is the refreshPostsArray
j. Enables the select menu after results are received (disabled property)
k. Retuasync function selectMenuChangeEventHandler(event)
*/

const selectMenu = document.getElementById('selectMenu');
selectMenu.addEventListener('change', selectMenuChangeEventHandler);


async function selectMenuChangeEventHandler(event) {
try {
// Check if event parameter is provided
if (!event) {
  console.error('Error: Change event parameter is missing.');
  return undefined; // Return undefined if event parameter is missing
}

// Disable the select menu
const selectMenu = document.getElementById('selectMenu');
selectMenu.disabled = true;

// Define userId based on the event target value or default to 1
const userId = event?.target?.value || 1;

// Fetch user posts
const posts = await getUserPosts(userId);

// Refresh posts
const refreshPostsArray = await refreshPosts(posts);

// Enable the select menu after results are received
selectMenu.disabled = false;

// Return an array with userId, posts, and refreshPostsArray
return [userId, posts, refreshPostsArray];
} catch (error) {
console.error(error);
return undefined; // Return undefined in case of an error
}
}


/*
20. initPage
a. Dependencies: getUsers, populateSelectMenu
b. Should be an async function
c. No parameters.
d. Call await getUsers
e. Result is the users JSON data
f. Passes the users JSON data to the populateSelectMenu function
g. Result is the select element returned from populateSelectMenu
h. Return an array with users JSON data from getUsers and the select element
result from populateSelectMenu: [users, select]
*/

async function initPage() {
// Fetch users data
const users = await getUsers();

// Populate select menu
const select = await populateSelectMenu(users);

// Return the results
return [users, select];
}

/*
21. initApp
a. Dependencies: initPage, selectMenuChangeEventHandler
b. Call the initPage() function.
c. Select the #selectMenu element by id
d. Add an event listener to the #selectMenu for the “change” event
e. The event listener should call selectMenuChangeEventHandler when the change
event fires for the #selectMenu
f. NOTE: All of the above needs to be correct for your app to function correctly.
However, I can only test if the initApp function exists. It does not return anything.
*/

function initApp() {
// Call initPage function
initPage().then(([users, select]) => {
// Select the #selectMenu element
const selectMenu = document.getElementById('selectMenu');

// Add event listener for the "change" event
selectMenu.addEventListener('change', (event) => {
  // Call selectMenuChangeEventHandler when the change event fires
  selectMenuChangeEventHandler(event, users);
});
});
}

// Add an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
// Call initApp when the DOM content has loaded
initApp();
});