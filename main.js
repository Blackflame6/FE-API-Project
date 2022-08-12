const container = document.querySelector("#container");
const standings = document.querySelector("#standings");
const gamestandings = document.querySelector("#gamestandings");



getInfo();
function getInfo() {
  const button = document.querySelector("#btn");
  button.addEventListener("click", getStandings);
  $(standings).show();
}
function getStandings() {
  $.get("https://api-football-standings.azharimm.site/leagues", logStandings);
}

function logStandings(eachTeam) {
  const team = eachTeam.data;

  // console.log(team)
  runTeam(team);
}

function runTeam(team) {
  for (let i = 0; i < team.length; i++) {
    const eachTeam = team[i];
    const teamId = eachTeam.id;
    // console.log(eachTeam)
    teamName(eachTeam, teamId);
  }
}
function teamName(eachTeam, teamId) {
  const teama = eachTeam.name;
  // console.log(teama)
  const teamDiv = document.createElement("div");
  teamDiv.id = teamId;
  teamDiv.className = "teamDiv";
  teamDiv.textContent = `LEAGUE NAME: ${teama}`;

  standings.appendChild(teamDiv);

  teamData(teamDiv);
}
function teamData(teamDiv) {
  teamDiv.addEventListener("click", getTeam);

  // console.log(e)
  // console.log(teamDiv)
}

function getTeam(e) {
  return $.get(
    `https://api-football-standings.azharimm.site/leagues/${e.target.id}`,
    function (data) {
      // console.log(data)
      accessTeam(data);
      // $(standings).hide() 
      hideStandings()
      // hideViewButton()
    }
  ).then (response => {
    // console.log(response);
    return response.data
  }) 
}
function accessTeam(data) {
  // for (let key in data) {
  //   const teamKey = data;
    
  //   console.log(teamKey);
  // }
  makeDiv(data.data);
}



function  makeDiv(teamKey) {
  // console.log(teamKey.logos["light"])
  const light = teamKey.logos.light
   console.log( light)
  
  const gameDiv = document.createElement("div");
  const teamPic = $('<img>');

  gameDiv.className = "gameDiv";
  gameDiv.innerText = `${teamKey.name} \n ${teamKey.abbr}\n  `;
  gameDiv.className = 'gameDiv'
   teamPic.attr('src', teamKey.logos.light)
   
  gameDiv.append(teamPic[0]);
  gamestandings.append(gameDiv);
  showContainer()
  
}
function showContainer() {
  const back = document.createElement('button')
  const backDiv = document.createElement('div')
 back.id = "btn2"
container.append(backDiv)
backDiv.appendChild(back)

  back.innerText = 'back'

  back.addEventListener('click', () => {
    $(gamestandings).show()
    hideGameStandings()
  })

}

function hideGameStandings ()  {
  $(gamestandings).hide()
  $(gamestandings).empty()
  
  $(standings).show()
  $(back).hide()
}

function hideStandings() {
  $(standings).hide()
  $(gamestandings).show()
  
}


// function hidePost () {
//   $(gamestandings).hide()
//   $(gamestandings).empty()
//   $(back).hide()
//   showView()
// }
// function hideStandings() {
//   $(standings).hide()
//   $(gamestandings).show()
//   $(back).show()
  

// }
// // function hideViewButton() {
// //   const view = document.getElementById('btn')
// //   $(view).hide()
// // }

// // function showView() {
// //   const view = document.getElementById('btn')
// //   $(view).show()
// // }



