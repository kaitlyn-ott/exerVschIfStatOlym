if (5 > 3){
	console.log("is greater than")
}

cat = "cat"
if (cat.length === 3){
	console.log("is the length")
}

if ("cat"==="dog"){
	console.log("is the same")
}else {
	console.log("not the same")
}

const person = {
	name: "Bobby",
	age: 12
}
	
if (person.age >= 18) {
	console.log(person.name + " is allowed to go to the movie")
} else {
	console.log(person.name + " is not allowed to go to the movie")
}

if (person.name[0]=="B") {
	console.log(person.name + " is allowed to go to the movie")
} else {
	console.log(person.name + " is not allowed to go to the movie")
}

if (person.name[0]=="B" && person.age >=18) {
	console.log(person.name + " is allowed to go to the movie")
} else {
		console.log(person.name + " is not allowed to go to the movie")
}

if (1 === "1") {
	console.log("strict")
} 
if (1 == "1") {
	console.log("abstract")
} else {
	console.log("not equal at all")
}

if (1 <= 2 && 2===4) {
	console.log("yes")
}

if (typeof "dog" === "string") {
	console.log("string")
}

if (typeof true === "boolean") {
	console.log("boolean")
}

if (typeof car != "undefined") {
	console.log("undefined")
}

if ("s">12) {
	console.log("true")
} else {
	console.log("not the same type")
}

var myNum = 10;

if (myNum % 2 === 0) {
	console.log("even")
} else {
	console.log("odd")
}


