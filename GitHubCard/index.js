import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/retroazure').then((response)=>{
  const user = response;
  console.log(user);

  return githubCardMaker(user);
}).catch(()=> {
  console.log("There was an error with your input.");
});


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

for(let i = 0; i<6; i++){
  axios.get(`https://api.github.com/users/${followersArray[i]}`).then((response)=>{
  const user = response;
  console.log(user);

  return githubCardMaker(user);
}).catch(()=> {
  console.log("There was an error with your input.");
});
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const githubCardMaker = (object)=>{

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const avatarUrl = document.createElement("img");
  avatarUrl.src = `${object.data.avatar_url}`;

  cardDiv.appendChild(avatarUrl);

  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList.add("card-info");

  cardDiv.appendChild(cardInfoDiv);

  const name = document.createElement("h3");
  name.classList.add("name");
  name.innerHTML = `${object.data.name}`;

  cardInfoDiv.appendChild(name);

  const userName = document.createElement('p');
  userName.classList.add("username");
  userName.innerHTML = `${object.data.login}`;

  cardInfoDiv.appendChild(userName);

  const location = document.createElement("p");
  location.innerHTML = `Location: ${object.data.location}`;
  cardInfoDiv.appendChild(location);

  const profile = document.createElement('p');
  profile.innerHTML = 'Profile:';
  cardInfoDiv.appendChild(profile);

  const profileURL = document.createElement('a');
  profileURL.setAttribute("href", `${object.data.url}`);
  profileURL.innerHTML = `${object.data.url}`;
  profile.appendChild(profileURL);

  const userFollowers = document.createElement('p');
  userFollowers.innerHTML = `${object.data.followers}`;
  cardInfoDiv.appendChild(userFollowers);

  const followingCount = document.createElement('p');
  followingCount.innerHTML = `${object.data.following}`;
  cardInfoDiv.appendChild(followingCount);

  const biography = document.createElement('p');
  biography.innerHTML = `${object.data.bio}`;
  cardInfoDiv.appendChild(biography);

  return document.querySelector('body').append(cardDiv);

}






/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
