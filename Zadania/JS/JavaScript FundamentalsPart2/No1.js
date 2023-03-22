/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (Sat
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Date 2
5. Ignore draws this time
test date:
§ Date 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Date 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
*/
const dolphinsPoints1 = 44
const dolphinsPoints2 = 23
const dolphinsPoints3 = 71
  
const coalasPoints1 = 65
const coalasPoints2 = 54
const coalasPoints3 = 49

function calcAverage (points1, points2, points3) {
 return (points1 + points2 + points3)/3
}

function checkWinner(avgDolhins, avgKoalas) {
  if(avgDolhins > (2*avgKoalas)){
     console.log('Dolphins wins!')
     }
   else if(avgKoalas > (2*avgDolhins)) {
     console.log('Koalas wins!')      
     }
   else {
     console.log('Noone wins')
     }
}

checkWinner(calcAverage(dolphinsPoints1, dolphinsPoints2, dolphinsPoints3), calcAverage(coalasPoints1, coalasPoints2, coalasPoints3))
