const container = document.querySelector("#container");
const standings =document.querySelector("#standings")

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
    // console.log(eachTeam)
    teamName (eachTeam)
  }

}
function teamName (eachTeam) {
  const teama = eachTeam.name
  // console.log(teama)
const teamDiv = document.createElement('div')
teamDiv.textContent = `TeamName: ${teama}`

standings.appendChild(teamDiv)



teamData(teamDiv)

}
function teamData(teamDiv) {
  teamDiv.addEventListener('click', function() {
console.log(teamDiv)
  })
  

}

