// Shorthand callbacks
export function printToFile(text : string, callback : (text : string) => void) : void {

}

// Callback function mutating array example
export function arrayMutation(numbers : number[], mutate: (num : number) => number) : number[] {
    numbers.forEach((element, index) => {
        // use callback function
        element = mutate(element);
        numbers[index] = element;
    });
    return numbers
}

// callback function 
export function plusTwo(num : number) : number {
    return num + 2;
}


console.log(arrayMutation([1,2,3,4,5,6,7], plusTwo));

interface Ball {
    diameter : number;
}

interface Tube {
    diameter : string;
}

let ball : Ball = {diameter : 10};
let tube : Tube = {diameter : "20"};
ball = tube
console.log(ball);