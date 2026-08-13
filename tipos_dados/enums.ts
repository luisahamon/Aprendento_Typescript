// Enums em TypeScript: conjuntos de valores nomeados.

// Os enums são usados para enumerar valores possíveis.
// Estruturas que mapeiam chaves para valores.

enum TypeName {
    constante = 1,
    variavel = 2,
    funcao = 3
}

// console.log(TypeName);

// Tipos de enums

// 1. Enum numérico
// É indicado trabalhar com esse tipo (convenção).
// O compilador é responsável por atribuir valores numéricos aos membros.
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

// console.log(Idioma);

// 2. Enum string
// Cada membro deve ser inicializado com uma string como valor.
enum Idioma2 {
    Portugues = "pt",
    Espanhol = "es",
    Ingles = "en"
}

// console.log(Idioma2);

enum DiaDaSemana {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

// console.log(DiaDaSemana);

// Enum usando const
// Nota: const enum é inlinado pelo compilador (não gera objeto em runtime).
const enum Comida {
    Pizza = "Pizza",
    Hamburger = "Hamburger",
    Churrasco = "Churrasco"
}

function comida(c: Comida) {
    return c;
}

// console.log(comida(Comida.Pizza));
// console.log(comida(Comida.Hamburger));
// console.log(comida(Comida.Churrasco));

// Uso adequado de enums
// Ideal para um pequeno número de valores fixos, intimamente relacionados e conhecidos em tempo de compilação.
enum Tarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: "Tarefa concluída"
};

if (concluidaTarefa.status === Tarefa.Done) {
    console.log("Tarefa concluída");
}
