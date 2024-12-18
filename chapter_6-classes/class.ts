// type Scripts adds types and visibility modifiers to javascript classes

// Member: Types - The member of a class (properties & methods) are typed using type annotations, sim

// Excrise - 1 ...........................................................................................
class Person {
  name: String;
}

const person = new Person();
person.name = "Aritra";
console.log(person.name);

//Member : Visibility - class member also be given special modifiers there are three main visibility modifiers in typeScripts.

// Public - (define) allow acess to the class member from anywhere
// privet - only allows access to the class member from within the class
// protected - allows access to the class member from itself  and any class

// The this keyword in a class usually refers to the instance of the class

// Excrise -2 .......................................................................................
class Employee {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const employee = new Employee("John Doe");
console.log(employee.getName());


//Parameter Properties - TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
//Exercise-3 .......................................................................................
class Student{

    public constructor( private name: string) {
    }

    public getName() {
        return this.name;
    }
}

const student = new Student("Aritra");
console.log(student.getName()); 
