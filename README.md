emirps
======

happy new year

2015 = 5 * 13 * 31
it is interesting that 2015 includes the pair of emirps (13, 31).

let's get the list of emirps up to n

about "emirp", see this...
http://en.wikipedia.org/wiki/Emirp



emirp.js

 -emirp.getPrimes(R) : get the list of prime numbers up to R
 
 -emirp.isPrime(n, list) : check whether n is prime using list of prime numbers 
 
 -emirp.reverseNumber(n) : put the digits in n reversely
 
 -emirp.getEmirps(n) : get the list of emirps up to n


points

 1: using array digit = [[1,1], [1,3], [1,7], [1,9], [3,3], [3,7], [3,9], [7,7], [7,9], [9,9]]
   e.g.) emirp.isPrime(1xy7) && emirp.isPrime(7yx1) => 1xy7 is emirp
 
 2: separating getPrimes() and isPrime()
 
 3: loop goes along the number of digits
