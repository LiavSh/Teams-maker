export function teamsCreationCheck(teamsNumber, players) {
  if (!teamsNumber) {
    return {
      header: "Something is missing...",
      content: "Please select number of teams",
    };
  } else if (players.length < 1) {
    return {
      header: "Something is missing...",
      content: "Please enter players",
    };
  } else if (players.length < teamsNumber) {
    return {
      header: "Somtehing went wrong...",
      content: "Number of players must be greater then number of teams",
    };
  } else {
    return null;
  };
};

export function createTeams(teamsNumber, players) {
  let sortedPlayers = [...players];
  sortedPlayers.sort(function (a, b) {
    return b.rank - a.rank;
  });

  for (let i = teamsNumber; i < sortedPlayers.length; i += teamsNumber * 2) {
    if (i + teamsNumber - 1 < sortedPlayers.length) {
      let temp = sortedPlayers[i];
      sortedPlayers[i] = sortedPlayers[i + teamsNumber - 1];
      sortedPlayers[i + teamsNumber - 1] = temp;
    }
  }

  const listOfTeams = [];

  for (let i = 0; i < teamsNumber; i++) {
    listOfTeams.push([]);
  }

  for (let i = 0; i < sortedPlayers.length; i++) {
    listOfTeams[i % teamsNumber].push(sortedPlayers[i]);
  }

  return listOfTeams;
}
