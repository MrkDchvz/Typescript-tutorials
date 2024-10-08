// For each using reduce
function myForEach<Item>(list : Item[], callbackfn : (val: Item) => void) : void {
    list.reduce((a,c) => {
        callbackfn(c);
        return undefined;
    }, undefined)
}


// Filter function using reduce
function myFilter<Item>(list : Item[], callbackfn : (val : Item) => boolean) : Item[] {
    const listFiltered : Item[] = [];
    list.reduce((a,c,i) => {
        if (callbackfn(c)) {
            listFiltered.push(list[i]);
        }
        return undefined;
    },undefined)
    return listFiltered;
}
console.log(myFilter(['spray', 'elite', 'exuberant', 'destruction', 'present'], (val) => val.length > 6));



// Map function using reduce 