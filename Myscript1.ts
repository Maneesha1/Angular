/*let mydata:any;
mydata="heloo"+""+"welcome";
console.log(mydata);
mydata=12.34;
console.log(mydata);
let mystring:string;
mystring="welcome to chennai";
console.log(mystring.slice(0,3));
let myNumber:number;
myNumber=22;
console.log(myNumber.toString()+"my result");*/
//arrays
/*let mysArray:Array<string>;
let mynArray:Array<number>;
mysArray=["hello"];
mynArray=[4,5,6];
console.log(mysArray);
console.log(mynArray);
console.log(mynArray[1]);
for(var n=0;n<mynArray.length;n++)
{
    console.log(mynArray[n]);
}
mysArray.forEach(function(value)
{
    console.log(value);
})*/
/*let myTuple:[number,string,number,string]
myTuple=[2,"Typescript",12,"hii"];
console.log(myTuple);
let myvar:void;
myvar=undefined;
console.log(myvar);
let myvar1:null;
myvar1=null;
console.log(myvar1);
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/
//enum
//enum myenum{sunday=0,monday,tuesday,wednday};
//console.log(myenum.tuesday);
//functions
/*function addfunction(num1:any,num2:any):any
{
    return (num1+num2);
}
console.log(addfunction("hi","manu"));

function addnumber(num1:any,num2:any):number
{
    if(typeof num1=='string'&& typeof num2=='string')
    {
        let x:number;
        let y:number;
        x=parseInt(num1);
        y=parseInt(num2);
        //return(parseInt(num2));
        return (x+y);
    }
    else
    return(num1+num2);
   
}
console.log(addnumber("hi","hlooo"));
function getName(firstname:string,lastname:string)
{
    if(lastname==undefined)return firstname;
    return(firstname+""+lastname);
}
console.log("john","don");*/
//interface
//interface with properties
interface myinterface
{
    Name:string;
    Title:string;

}
function Ifunction(mydata:myinterface):string
{
    return(mydata.Name+""+mydata.Title);

}
let dat={Name:"man",Title:"trian"}
console.log(Ifunction(dat));
//class
/*class User
{
    Id:number;
    Name:string;
    Email:string;
    age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.age=age;
        console.log("usr created");

    }
}
let firstUser=new User(1,"ram","ram@gmail.com",4)
console.log(firstUser.Id+""+firstUser.Name+""+firstUser.Email+""+firstUser.age);*/
//class with functions and methods
/*class User1
{
    private Id:number;
    private Name:string;
    private Email:string;
    private age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.age=age;
        console.log("usr created");

    }
    register()
    {
    console.log(this.Name+"SuccesfullyRegistered");
    console.log(firstUser1.Id+""+firstUser1.Name+""+firstUser1.Email+""+firstUser1.age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.age;
        else return 0;

    }
}
let firstUser1=new User1(1,"ram","r@agmail.com",21);
firstUser1.register();
console.log(firstUser1.getAge(1));*/
/*class User1
{
    Id:number;
     Name:string;
     Email:string;
     age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.age=age;
        console.log("usr created");

    }
    register()
    {
    console.log(this.Name+"SuccesfullyRegistered");
    console.log(firstUser1.Id+""+firstUser1.Name+""+firstUser1.Email+""+firstUser1.age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.age;
        else return 0;

    }
}
let firstUser1=new User1(1,"ram","r@agmail.com",21);
firstUser1.register();
console.log(firstUser1.getAge(1));
//inheritance
class Admin extends User1
{
    Type:string;
    constructor (id:number,name:string,email:string,age:number)
    {
        super(id,name,email,age)
        this.Type=type;
    }
    displayAdmin()
    {
        console.log("u r"+this.Type+"admin");
        console.log(this.Id+""+this.Name+""+this.Email+""+this.age);
    }
    
}
let cUser=new Admin(2,"ram","r@gmail.com",23);
cUser.register();
cUser.displayAdmin();*/
interface Iuser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    Register():void;
    getAge(id:number):number

}
class user implements Iuser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("usr created");
    }
    Register()
    {
    console.log(this.Name+"SuccesfullyRegistered");
   console.log(this.Id+""+this.Name+""+this.Email+""+this.Age);
    }

    getAge(id:number):number
    {
        if(this.Id==id)return this.Age;
        else return 0;

    }


}
let cUser=new user(1,"ram","r@gmail.com",23);
cUser.Register();
console.log(cUser.getAge(1));
