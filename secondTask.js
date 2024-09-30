function createPersonObjects(name, age) {
  //// object literal
  const personLiteral = { name, age };

  ////constructor
  function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
  }

  const personConstructor = new PersonConstructor(name, age);

  //// classes
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const personClass = new PersonClass(name, age);

  ////object.create()
  const personPrototype = {
    info() {
      return { name: this.name, age: this.age };
    },
  };

  const personFromCreate = Object.create(personPrototype);

  personFromCreate.name = name;
  personFromCreate.age = age;

  return [personLiteral, personConstructor, personClass, personFromCreate];
}

// test
const persons = createPersonObjects("Levan", 28);

console.log(persons);
