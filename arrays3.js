//1.Write a function that accepts an array of strings and console.logs each element using a for loop.
function arrStrings(num){
    for(let a=0;a<num.length;a++){
        console.log(num[a]);
    }
}
let num=[10,30,3,8,7,16,45];
arrStrings(num)
//2.Write a function that accepts an array of numbers and uses the forEach()method to console.log 
//each number multiplied by 2.
function numarr(arr){
for(let x=0;x<arr.length;x++){
        console.log(arr[x]*2);
    }
}
let arr=[10,30,3,8,7,16,45]
numarr(arr)
//3.Write a function that takes in an array of numbers and consoles the first four items multiplied by 8
// and the last two added by 5. Console the array with the new values
function nums(number){
    let z=0;
    while(z<number.length){
    console.log({"number":number[z]*8});
    if(z===3){
        break;
    }
    // else{console.log({"number":number[z]+5});}
    z++
};

}
let number=[10,30,3,8,7,16,45];
nums(number)
//4.Write a function that takes in the following array and use a while loop to iterate and break when
//the item is equal to the fourth index let arrNum = [1,2,3,4,5,6,7,8,9];
function numbers(arrNum){
let i=0;
while(i<arrNum.length){
    console.log({"arrNum":arrNum[i]});
    if(i===4){
        break;
    }
    i++
};
}
let arrNum = [1,2,3,4,5,6,7,8,9];
numbers(arrNum)

//5.Write a function that takes in a an array of strings and use a continue statement when the item is
//at the second index let fruits= ['apple','plum','banana','strawberries','kiwi']
function varFruits(fruits){
for(let a=0;a<fruits.length;a++){
    if(a===2 ){
    continue;
    }
    console.log({"continue":fruits[a]});
    }     
}
let fruits= ['apple','plum','banana','strawberries','kiwi']
varFruits(fruits)