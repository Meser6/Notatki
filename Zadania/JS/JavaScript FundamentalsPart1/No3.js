/*There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the averages core for each team, using the test data below
2. Compare the team's averages cores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1: Include are quirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2: Minimum score also applies to a draw! Soadraw only happens when both teams have the same score and 
both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

const dolphinsScore1 = 97
const dolphinsScore2 = 112
const dolphinsScore3 = 101

const koalasScore1 = 109
const koalasScore2 = 95
const koalasScore3 = 106

function calculateSum(firstScore, secondScore, thirdScore){
    return (firstScore, secondScore, thirdScore)
}

const dolphinsSum = calculateSum(dolphinsScore1, dolphinsScore2, dolphinsScore3)
const koalasSum = calculateSum(koalasScore1, koalasScore2, koalasScore3)

const dolphinsAverages = dolphinsSum/3
const koalasAverages = koalasSum/3
console.log(dolphinsSum)
console.log(koalasSum)
if (dolphinsSum >= 100 &&  koalasSum >= 100){
    if (dolphinsAverages > koalasAverages){
        console.log('Dolphins wins!')
    } else if (koalasAverages > dolphinsAverages){
        console.log('Koalas wins!')
    } else{
        console.log('Draw')
    }
} else {
    console.log('No one win')
}