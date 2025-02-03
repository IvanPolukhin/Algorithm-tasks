const user = {
  name: "Ivan",
  sayHello() {
    console.log(`Привет, ${this.name}!`);
  },
};

const sayHello = user.sayHello.bind(user);
setTimeout(sayHello, 1000);
