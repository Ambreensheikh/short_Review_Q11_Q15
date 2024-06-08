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
}
//Q_13
let names = ["Car", "Bus", "Truck"];
let message1 = `I like to ride on my !`;
for (let i = 0; i < names.length; i++) {
    console.log(message1 + names[i]);
}
//Q_14
//let guest_list:string[] = ["Ali","Sana","Hashir","Mamu"];
//for(let i=0; i< guest_list.length; i++){
//console.log(`Dear Sir/ Madam`+guest_list[i]+ `\nWe are really pleased to invite you in dinner!\n\n Thank You\n`);  
// }
//Q_15
let guest_list = ["Ali", "Sana", "Hashir", "Mamu"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Sir/ Madam` + guest_list[i] + `\nWe are really pleased to invite you in dinner!\n\n Thank You\n`);
}
let not_Present = "Ali";
let new_Guest = "Babar Azam";
guest_list[0] = new_Guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Sir/ Madam ` + guest_list[i] + `\nWe are really pleased to invite you in dinner!\n\n Thank You\n`);
}
export {};
