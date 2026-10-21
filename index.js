let playerName = prompt("What is your Name?");
let round1 = prompt("what is your round 1 score?");
let round2 = prompt("what is your round 2 score?");
let round3 = prompt("what is your round 3 score?");

if (playerName === null || round1 === null || round2 === null || round3 === null) {
    alert(`PLease provide the above informaions before we can proceed to the next step.`);

} else {
     
    playerName = playerName.trim().toLowerCase();
    round1 = round1.trim();
    round2 = round2.trim();
    round3 = round3.trim();

    let firstRound = Number(round1);
    let secondRound = Number(round2);
    let thirdRound = Number(round3);

    if (playerName === "") {
       alert(`Please enter your Name`);

    } else if (round1 === "" || Number.isNaN(firstRound) || firstRound < 0 || firstRound > 100 || !Number.isInteger(firstRound)) {
        alert(`Please provide the correct input for the first score and try again.`);

    } else if (round2 === "" || Number.isNaN(secondRound) || secondRound < 0 || secondRound > 100 || !Number.isInteger(secondRound)) {
        alert(`Please provide the correct input for the Second score and try again`);

    } else if (round3 === "" || Number.isNaN(thirdRound) || thirdRound < 0 || thirdRound > 100 || !Number.isInteger(thirdRound)) {
        alert(`Please provide the correct input for the third score and try again`);

    } else {

        let totalScore = firstRound + secondRound + thirdRound;
        let bonusPoint = 0;
        let newtotalScore = totalScore
        if (totalScore >= 250) {
             bonusPoint = 20;
            newtotalScore = totalScore + bonusPoint;
            alert(`You got additional 20 points to your total.`);

        } else if (totalScore < 250) {
          alert(`You don't qualify to the 20 bonus points to your total.`);

        }

         let championshipQualification;
         if (newtotalScore >= 280) {
            championshipQualification = "qualified";
            alert(`You are qualified for the championship!`)

         } else {
            championshipQualification = "not qualified";
            alert(`You are not qualified for the championship`)

         }

         let tournamentReport = `
Player: ${playerName}
Round 1: ${firstRound}
Round 2: ${secondRound}
Round 3: ${thirdRound}
Raw total: ${totalScore}
Bonus points: ${bonusPoint}
Final score: ${newtotalScore}
Championship status: ${championshipQualification}
`;

console.log(tournamentReport);


    }

}

