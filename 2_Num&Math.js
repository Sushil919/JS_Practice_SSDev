// JS follows the same order of opeartions as maths
// * && / have same priority and + & - have same...It calculates from left to right


//calculate 10%

// 36.93 * 0.1 (10/100)
// 3.693

//We can use (....) to make some calculations to be done first in side the bracket

//computes have a problem working with floats
//0.1 + 0.2 = 0.3000000000000004
//The reason this happens is bcoz of how the computers store the numbers

//Computers understands 0 & 1 but humans 0 to 9..but computers can store the decimals no in form of binary
//problem occurs with floating numbers

// 20.95 + 7.99 = 28.939999999999998

// to calculate accurately :
// (2095 + 799) / 100 = 29.94
//Notes : calculations with floats are sometimes inaccurate.
// When working with money :
// 1. Do the calculation in cents
// 2. Convert back to dollars

//Math.round

// Math.round(2.2) -> 2
// Math.round(2.8) -> 3

//10% tax

// ((2095 + 799) * 0.1) / 100  = 2.894 