/*
	2015.1.1.
	2015 = 5 * 13 * 31
	13 is an "emirp" number
	2015.1.2 upgrade
 */

/*
	minimize costs in creating prime number list
*/

var emirp = {};

// get the list of prime numbers up to R
emirp.getPrimes= function(R){
	if(R<2){
		return [];
	}
	var primes = [2];

	for(i=3;i<=R;i++){
		var product = 1;
		for(j=0;j<primes.length;j++){
			product = product * (i%primes[j]);
			if(product === 0)break;
		}
		if(product !== 0){
			primes.push(i);
		}
	}
	return primes;
};

// check whether n is prime
emirp.isPrime = function(n, list){
	if(list.indexOf(n)>0){
		return true;
	}
	var product = 1;
	for(var i=0; list[i]<=Math.sqrt(n); i++){
		product = product * (n%list[i]);
		if(product === 0) return false;
	}
	// console.log(n + " is prime.");
	return true;
}

// get the reversed number of n
emirp.reverseNumber = function(n){
	var str = n.toString(10);
	var result = "";
	for(var i=0; i<str.length; i++){
		result = str[i] + result;
	}
	return Number(result);
}

// get the list of emirps up to n
emirp.getEmirps = function(n){
	if(n<10)return [];

	var rank = n.toString(10).length;
	var range = Math.floor(Math.sqrt(Math.pow(10,rank)));
	var p = emirp.getPrimes(range);
	var result = [];

	// only digits 1, 3, 7 and 9 can appear at the highest and the lowest place
	var digit = [[1,1],[1,3],[1,7],[1,9],[3,3],[3,7],[3,9],[7,7],[7,9],[9,9]];
	for(var i=0; i<rank-1;i++){
		for(var d=0; d<digit.length;d++){
			if(digit[d][0]*Math.pow(10, i+1) > n) break;
			for(var m=0; m<Math.pow(10,i); m++){
				var current = digit[d][0]*Math.pow(10, i+1) + 10*m + digit[d][1];
				if(current <= n && emirp.isPrime(current, p)){
					// console.log(current + " is prime.");
					var reversed = emirp.reverseNumber(current);
					if(current !== reversed && result.indexOf(reversed)<0 && emirp.isPrime(reversed, p)){
						console.log( current + " is emirp.");
						result.push(current);
					}
				}
			}
		}
	}

	return result.sort(function(a,b){return a-b;});
}

