// 3---->Reverse given number
function numReverse(n)
{
	n = n + ""; //convert num to string, can also write "str = n.toString();"
	return n.split("").reverse().join("");
}
console.log(numReverse(456));