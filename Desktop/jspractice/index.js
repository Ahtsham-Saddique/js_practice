let arr =[1,2,4,5,5,6,35,6,4,6];

let elm = arr.find((Curelement,index,a)=>
{
    return Curelement>5, index,a;
});
console.log(elm);

console.log("Hello");

// filtering on base of condition

let value =6;
let arr2=[1,2,3,4,5,6,7,8,5,7,5];

let elmm = arr2.filter((Curelement2)=>
{
    return Curelement2 !=  value;
})
;
console.log(elmm);




let obj= [

    { name:"Ali",age:13},
    { name:"Alii",age:14},
    { name:"Ahmad",age:19},
    { name:"Ali",age:20},
    { name:"Ali",age:25},
    { name:"Ali",age:25},
    { name:"Ali",age:26},
    
];

let eligible= obj.filter((Curelement)=>
{
    

     return Curelement.age>18 && name==="Ali";
});

console.log(eligible);