import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/sjsussman')
.then(response => {
  console.log(response);
  const myInfo = response.data;
  cardMaker(response.data);
  const mainCard = document.querySelector('.cards');
  const cardInfo = cardMaker(myInfo);
  console.log(myInfo);
  mainCard.appendChild(cardInfo)
})
.catch(error => {
  console.log(error);
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

const followersArray = ['c0d3-vp', 'zoelud', 'agyin3 ', 'james-coulter', 'jamiehardesty'];

followersArray.forEach((follower, i) => {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
        .then(response => {
            console.log(response);
            const myInfo = response.data;
            const mainCard = document.querySelector('.cards');
            const cardInfo = cardMaker(myInfo);
            console.log(cardInfo);
            mainCard.appendChild(cardInfo)
        })
        .catch(error => {
            console.log(error)
        });
    console.log(followersArray);
});

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const mainCard = document.querySelector('.cards');

const cardMaker = (data) => {
  //create elements
  const mainContainer = document.createElement('div')
  const img = document.createElement('img')
  const divHolder = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const a = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  const graph = document.createElement('img') // stretch

  //create classes
  mainContainer.classList.add('card')

  divHolder.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')


  //append img and second div to div container
  mainContainer.appendChild(img)
  mainContainer.appendChild(divHolder)
  mainContainer.appendChild(graph)

  //append the rest of the elements the divHolder
  divHolder.appendChild(h3)
  divHolder.appendChild(username)
  divHolder.appendChild(location)
  divHolder.appendChild(profile)
    profile.appendChild(a) //append anchor element to profile
  divHolder.appendChild(followers)
  divHolder.appendChild(following)
  divHolder.appendChild(bio)


  img.src = `${data.avatar_url}`;
  h3.textContent = `${data.name}`;
  username.textContent = `Username: ${data.login}`;
  location.textContent = `Location: ${data.location}`;
  // profile.textContent = `Profile:`
  a.href = `${data.html_url}`;
  a.textContent = `${data.html_url}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;
  graph.src = `http://ghchart.rshah.org/${data.login}`; // stretch

  console.log(mainContainer)
  return mainContainer
}

cardMaker();


