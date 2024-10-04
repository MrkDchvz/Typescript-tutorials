// ==========================================
//function w/ a callback function parameter
// ==========================================

// Step 1: Create an Interface for type casting 
interface callbackFunc {
    (text : string) : void;
}

// Step 2: Create Callback function. callback must have the same signature as the created interface.
export function func(text : string) : void {
    console.log(text);
}
// Step 3: Create Main function use the created interface as the type for the callback param
export default function printToFile(text : string, callback : callbackFunc) : void {
    callback(text);
}
// Step 4: Use the callback function as the parameter. 
printToFile("I AM A CALLBACK", func);


