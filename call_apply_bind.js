let name1 = {
  firstName: "Dasari",
  lastName: "sai",
  printFullName: function (homeTown) {
    console.log(this.firstName + this.lastName + homeTown);
  },
};
let name2 = {
  firstName: "Dasari1",
  lastName: "sai1",
};
name1.printFullName.call(name2, "kadapa", "state");
name1.printFullName.apply(name2, ["kadapa", "state"]);
let printName = name1.printFullName.bind(name2, "kadapa", "state"); // it returns the copy of the function later on we invoke it
printName();
