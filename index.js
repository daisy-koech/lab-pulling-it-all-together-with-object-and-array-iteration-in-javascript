function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored (playerName) {
    const game = gameObject();
   
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }
    else if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }
    else {
        return null;
    }
}
// console.log(numPointsScored("Jason Terry"));

function shoeSize (playerName) {
    const game = gameObject();

     if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    }
    else if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }
    else {
        return null;
    }
}
// console.log(shoeSize("Brendan Hayword"));

function teamColors (teamName){
    const game = gameObject();
    const teams = {
        [game.home.teamName]: game.home.colors,
        [game.away.teamName]: game.away.colors
    }
    return teams[teamName];
}
// console.log(teamColors("Charlotte Hornets"));

function teamNames () {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
// console.log(teamNames());

function playerNumbers (teamName) {
    const game = gameObject();

    let teamPlayers;
    if (teamName === game.home.teamName) {
        teamPlayers = game.home.players;
    }
    else if (teamName === game.away.teamName) {
        teamPlayers = game.away.players;
    }
    else {
        return [];
    }

    const numbers = [];
    for (let player in teamPlayers) {
        numbers.push(teamPlayers[player].number);
    }
    return numbers;
}
// console.log(playerNumbers("Charlotte Hornets"));

function playerStats (playerName) {
    const game = gameObject();

     if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
    else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    else {
        return null;
    }
}
// console.log(playerStats("Brendan Hayword"));

// function bigShoeRebounds () {
//     const game = gameObject();

//     const allPlayers = {
//         ...game.home.players,
//         ...game.away.players
//     }
//    let largestShoeSize = 0;
   
// }