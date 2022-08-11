const container = document.querySelector("#container");
const standings =document.querySelector("#standings")
const gamestandings =document.querySelector("#gamestandings")



getInfo()
function getInfo() {
  const button = document.querySelector('#btn')
button.addEventListener('click', getStandings)



}
function getStandings() {
  $.get('https://api-football-standings.azharimm.site/leagues', logStandings)
}

function logStandings(eachTeam) {
 const team = eachTeam.data
  

 runTeam(team)
}

function runTeam (team) { 
  for(let i = 0; i < team.length; i++) {
    const eachTeam =  team[i]
    const teamId = eachTeam.id
    // console.log(eachTeam)
    teamName (eachTeam, teamId)
  }

}
function teamName (eachTeam, teamId) {
  const teama = eachTeam.name
  // console.log(teama)
const teamDiv = document.createElement('div')
teamDiv.id =teamId
teamDiv.className = 'teamDiv'
teamDiv.textContent = `TeamName: ${teama}`

standings.appendChild(teamDiv)



teamData(teamDiv)

}
function teamData(teamDiv) {
  teamDiv.addEventListener('click', getTeam)


// console.log(e)
// console.log(teamDiv) 

}

function getTeam (e) {
  $.get(`https://api-football-standings.azharimm.site/leagues/${e.target.id}`, function(data)  {
    console.log(data)
   accessTeam(data)
   $(standings).hide()
   
   
  }) 
   
}
function accessTeam(data) {
  for(let key in data) {
    const teamKey = data.slug
    console.log(teamKey)
   makeDiv(teamKey)
  }
}

function makeDiv(teamKey) {
  const gameDiv = document.createElement('div')
  
  gameDiv.className = 'gameDiv'
  gameDiv.innerText = `${teamKey.abbr}\n${teamKey.slug} `
  
  gamestandings.append(gameDiv)

}
backbtn()

function backbtn() {

  const back = document.createElement("button")
  back.id = "btn";
  back.innerText = "back";
  container.append(back);
  back.addEventListener("click", function () {
    
     $(gamestandings).hide()
     $(standings).show()
     
  })
}
