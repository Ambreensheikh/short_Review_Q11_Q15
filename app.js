//Q_11
let members = ["Ali", "Sana", "Hashir", "Mamu"];
for (let i = 0; i < members.length; i++) {
    // console.log(members[i]);  
}
//Q_12
let members1 = ["Ali", "Sana", "Hashir", "Mamu"];
let message = `Kal birthday he kis ki !`;
for (let i = 0; i < members.length; i++) {
    //console.log(message + members[i]);   
    //Q18
    let places = ["islamabad", "dehli", "anqara"];
    //console.log(`Original:`+ places);
    //array in alphabatical orders.sort()
    console.log(`copy:` + [...places].sort());
    //printing array again in original order .reverse()
    console.log(`copy:` + [...places].sort().reverse());
    // Reverse the order of your list. Print the array to show that its order has changed.
    console.log('original :' + places.sort());
    //  Reverse the order of your list again. Print the list to show it’s back to its original order.
    console.log('original :' + places.sort().reverse());
    //Q19 
    const languages = ['english', 'urdu', 'hindi', 'french', 'arabic'];
    console.log("List of languages:");
    for (let top of languages) {
        console.log(top);
    }
}
export {};
