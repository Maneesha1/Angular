function Ifunction(mydata) {
    return (mydata.Name + "" + mydata.Title);
}
var dat = { Name: "man", Title: "trian" };
console.log(Ifunction(dat));
var user = /** @class */ (function () {
    function user(id, name, email, age) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Age = age;
        console.log("usr created");
    }
    user.prototype.Register = function () {
        console.log(this.Name + "SuccesfullyRegistered");
        console.log(this.Id + "" + this.Name + "" + this.Email + "" + this.Age);
    };
    user.prototype.getAge = function (id) {
        if (this.Id == id)
            return this.Age;
        else
            return 0;
    };
    return user;
}());
var cUser = new user(1, "ram", "r@gmail.com", 23);
cUser.Register();
console.log(cUser.getAge(1));
