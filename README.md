Rulette

Credits have no real world value, this game is for entertainment purposes only. If you are someone you know has a gambling problem, please call 1-800 gambler.
Rules

You start with 100 credits. You can place a prediction on numbers, ranges of numbers, even/odd or colors.

Choose a number (Or a range of numbers) and choose an amount of tickets to place on that number.

Then choose one of the three spin types then wait to see if one of the numbers you picked is chosen! Then earn credits based off the number of tickets you put on a number. For number range options (12s, 18s, Even/Odd, Colors) the amount of tickets chosen for that range is split up between each number added. (Ex. 30 tickets for numbers 1-12 when added via the menu, the amount of tickets per numbet would be 30/12 rounded up.)
Spin Types

There are three spin types, each with different odds and payouts.

Standard Spin - The standard spin has a 1/37 chance of winning. The number is not influenced by anything.
Bias Spin - The bias spin has about a 9/37 chance of winning. The number is influenced by a set of 2 numbers.
Average Spin - The average spin has about a 6/37 chance of winning. The number is influenced by the average of 37 numbers.
Payouts

Payouts are calculated with the follow equations:

multiplier = Math.floor(Math.random()*3)

AM = (tickets * (1+multiplier))

randomLoss = (Math.floor(Math.random()*450))

win = Math.abs(Math.floor(AM-randomLoss))

Win is the amount of credits won after the equations, AM is the amount of credits you have after a multiplier. There is also a system inplace to prevent players from betting 0 and getting credits back, and to prevent players from winning more than 35x of what they put in.
Notes

When using "Higher Odds, Lower Cost", enter the number of tickets total you want to put down for the option in the "Enter a number, or a few!" section's ticket input.
