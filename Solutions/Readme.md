Instructions for running the code
------------------------------------->

Please clone this repository https://github.com/sahithikol/projecteuler

within the project , you would see the following files
1.GridSum.js
2.LetterCounts.js 3. NthPrime.js 4. index.html

please open index.html file on browser
where you would see the three buttons
button1 -> 10001st prime number
button2 -> LetterCounts
button3 -> GridSum

on click of them, you can see the time taken and link to the problem and the answer to it

A Sample of the Output
--------------------------->

1. on click of Nth Prime button
   output: The time taken for generating 10001 st Prime Number is 17.400000004272442 milliseconds and the result is 104743
2. onclick of LetterCount button
   output: The time taken for generating Number Letter Counts is 0.999999996565748 milliseconds and the result is 21124

3. onclick of GridSum button
   output: The time taken for generating Path sum: two ways is 3.899999996065162 milliseconds and the result is 427337

Why you chose the problems you did
-------------------------------------->

1. 10001st prime number
   I have selected the 10001st prime (nth prime number) because, I thought demonstrating better approach for computing prime number would show my understading over time and space complexity of an algorithm.

Brute force approach, of determing a prime number is to run the loop from 2 to n and check if it is a prime, this would have the time complexity of o(n).

The best practice to consider to check the prime is to run the loop till the square root of a number. this would reduce the time complexity to o(sqrt(n)).

2. Number Letter Counts

Though the problem statement looks verbose and straightforward.
To solve this problem, we need a simple trick of mathematics.
A number in tens (20/30) can be split into tens and units using division and modulo operation.
using this splitting, we can compute the letter counts independently and make summation for the whole operation.

I thought, this would demonstrate my understading of when to use a hashmap datastructure and also a general understanding of how a number can be split into hundreds,tens and units , in programmatic world.

3.Grid Sum

I thought, this problem would be a good choice for me to demonstrate my understading on dynamic programming approach.

A description of the process you followed in solving the problem
------------------------------------------------------------------>

For all of these problems 1. I tried to solve all of them with the approach i know without referencing any other blogs out there on the internet, just to check my self how well can i solve the problem.

    2. Once i am done with the source code, i tried to run it for the smaller input cases, once they are satisfied, i tried testing my code gradually to the desired input by the question, by this way i would understand , where my solution is failing and why.

What reference sources you used, if any
------------------------------------------------->

I have not used any source code from the internet available.
I have tried to solve problems on my own based on my understanding.

For Number Letter Counts, i read this artice
https://www.mathblog.dk/project-euler-17-letters-in-the-numbers-1-1000/

this helped to get the math trick that i used in my solution

For the grid sum, i tried to read the following article
https://www.mathblog.dk/project-euler-81-find-the-minimal-path-sum-from-the-top-left-to-the-bottom-right-by-moving-right-and-down/

How much time you spent on the exercise
--------------------------------------------->

As i was on vacation and travelling, i tried to solve this excercise when ever i got time

For the

1. 10001st prime number -> I took 30 minutes to write the solution and test the cases
2. Letter Counts -> I took 1 hour, i could come up with the solution and was working but the answer was not matching/getting accepted by euler , i had 200 charecter difference or more, because instead of hundred i was using hundreds , to get this mistake i spent aroung 10 minutes.

3. Grid Sum
   This took more than 2 hours .
   1. Initially i tried to solve this using DFS , as this was the best use case
      but this approach was taking more time.
   2. Then the second approach i took for this problem is, at every step we are comparing either left and bottom , and taking minimum among them and adding to the current sum . I tried to the same approach, but the answer was not matching , there was about 2000 or more difference.
      The reason was, i was trying to caluculate the minimum of the numbers instead it has to minimal path.
   3. Finally, i tried to read this https://www.mathblog.dk/project-euler-81-find-the-minimal-path-sum-from-the-top-left-to-the-bottom-right-by-moving-right-and-down/
      based on this understading, i though dynamic programming would be a best use case here.
      i followed a different approach from the article mentioned above.
      I tried to follow the top to bottom approach (intialising first row and column with the sums and from then at each level considering the minimum of sums)
