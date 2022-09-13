
const Want =[
    {phone:'Iphone15', Company:'Apple', Price:'1024$'},
    {phone:'Y30', Company:'Samsung', Price:'324$'},
    {phone:'redmi40', Company:'Xiomi', Price:'154$'},
    {phone:'vivo50', Company:'Vivo', Price:'104$'},
    {phone:'Tx h3', Company:'techno', Price:'104$'},
];

    //map return everything
const brand =Want.map(keysName =>keysName.Company)
console.log(brand);

const arr=Want.map(p => p.phone);
console.table(arr)


//forEach not return
Want.forEach(p => console.log(p.Price))
Want.forEach(p => console.log(p))


////filter return codition filled value

const specific=Want.filter(lowPrice => lowPrice.Company.includes('n'))
console.table(specific)


//destructuring 


const roundNum=[10,20,30,40,50,60,70,80,90];

//destructuring way one
const arrDestructure=[first,sec]=[100,110]
console.log(arrDestructure);

//destructuring way two
const [firstNum1,thirdNum2]=roundNum;
console.log([firstNum1,thirdNum2])

//WAY THREE use function for destructuring
const [num1,num2]=callFunc(300,500);

function callFunc(x,y){
    const bigNum =[x,y]
    return bigNum;
};
console.log(num1,num2)

//object destructuring

const obj={person1:'jahid',person2:{person3:'neni'}}

const{name,age} = {name:'jahid', age:22}
console.log(name,age)

const {person1,person3} =obj?.person2;
console.log(person1,person3)


//jsnon convert string

const leptop={model:'Dell core i3', Company:'dell', ram:'4gb', herdDis:'500gb'}
const strLeptop=JSON.stringify(leptop)
console.table(strLeptop)

//convert json string to Object


const parseObj=JSON.parse(strLeptop)
console.log(parseObj)

//fetch

//fetch()
//.then(res => res.json())
//.then(data => console.log(data))

//sudhu matro property pete chaile
const key=Object.keys(leptop)
console.log(key)

//sudhu matro values pete chaile
const value=Object.values(leptop)
console.log(value)


        //array method ekhon theke jegulow use korbo


    //map()           //kono ekta kaj korar jonne kaj seshe value diye kichu ekt korar jonno
    //filter()        //arrayr upor kono ekta condition sesh kore condition true kora value nite chailr
    //forEach()       //map er motoi kintu return kichu dibena.return kichu nite na chaile ..



    //array method use in array of object//


const love=[
{name:'jahid', age:22,},
{name:'nabila',age:19,}
]
const newAdd={relation:'love',time:'2years'}        //create new obj
const loveNew=[...love, newAdd]                 //love old array, love new is new array of copy
console.table(love)
console.table(loveNew)


//remove new array of copy without samsung //


const myphone=[
{name:'samsung', model:'on7',ram:'3gb', release:2017,color:'black', price:20000},
{name:'iphone', model:'se2',ram:'3gb', release:2020,color:'black and white', price:48000}
];          //declare a array of
console.table(myphone);

const newArray=myphone.filter(phone => phone.name !== 'samsung')        //create new array without samsung element
console.table(newArray);

const addphone={name:'iphone', model:'iphone 14',ram:'4gb', release:2022,color:'black and mate', price:200000} //create obj
const newArrayEle=[...newArray,addphone]  //newArrayr sathe addphone obj ke add kore newArrayEle ei arrayte rakhteci

console.table(newArrayEle)



