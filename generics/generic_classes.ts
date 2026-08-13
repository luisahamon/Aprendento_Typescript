// Classes genéricas em TypeScript: reutilização de código para diferentes tipos de dados.

// Classes genéricas podem trabalhar com vários tipos de dados.
// Usam espaços reservados (type parameters) para os tipos de suas propriedades, métodos e parâmetros,
// tornando possível reutilizar o mesmo código para diferentes tipos de dados.

// Exemplo
class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}

const boxString = new Box<string>("Hello");
const boxNumber = new Box<number>(42);
const boxBoolean = new Box<boolean>(true);

console.log(boxString.getItem()); // Hello
console.log(boxNumber.getItem()); // 42
console.log(boxBoolean.getItem()); // true
// Pode ser usada com qualquer tipo de dado.
