const users = [{ name: "Yarik" }, { name: "Roma" }];

function sayHello() {
  console.log(`Hi, ${this.name}!`);
}

users.forEach((user) => sayHello.call(user));
