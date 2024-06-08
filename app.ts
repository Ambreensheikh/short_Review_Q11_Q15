//Q_11
let members:string[] = ["Ali","Sana","Hashir","Mamu"];
for(let i=0; i< members.length; i++){
   // console.log(members[i]);  
}
//Q_12
let members1:string[] = ["Ali","Sana","Hashir","Mamu"];
 let message:string = `Kal birthday he kis ki !`;
 for(let i = 0; i< members.length; i++){
    //console.log(message + members[i]);   
 }
 //Q_13
 let names:string[] = ["Car", "Bus","Truck"];
 let message1:string = `I like to ride on my !`
 for(let i = 0; i<names.length; i++){
 console.log(message1 + names[i]);}
 
 //Q_14
 //let guest_list:string[] = ["Ali","Sana","Hashir","Mamu"];
 //for(let i=0; i< guest_list.length; i++){
    //console.log(`Dear Sir/ Madam`+guest_list[i]+ `\nWe are really pleased to invite you in dinner!\n\n Thank You\n`);  
// }

 //Q_15
 let guest_list:string[] = ["Ali","Sana","Hashir","Mamu"];
 for(let i=0; i< guest_list.length; i++){
    console.log(`Dear Sir/ Madam`+guest_list[i]+ `\nWe are really pleased to invite you in dinner!\n\n Thank You\n`);  
 }
 let not_Present:string = "Ali";
 let new_Guest:string = "Babar Azam";
guest_list[0]= new_Guest;
for(let i=0; i< guest_list.length; i++){
console.log(`Dear Sir/ Madam ` +guest_list[i]+ `\nWe are really pleased to invite you in dinner!\n\n Thank You\n`);  }



 