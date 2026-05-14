// Enums em TypeScript
// Enums são usados para enumerar valores possíveis
// São estruturas de dados não ordenadas
// Mapeiam chaves para valores

enum TypeName {
    constante = 1,
    variavel = 2,
    funcao = 3
}

//console.log(TypeName);

// Tipos de Enums
// 1. Enum numérico
// É indicado trabalhar com esse tipo (convenção)
// São Enums baseados em números
// O compilador é responsável por atribuir valores numéricos aos membros
// Exemplo
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

// console.log(Idioma);

// 2. Enum string
// São Enums baseados em strings
// Cada membro deve ser inicializado com uma string como valor
// Exemplo
enum Idioma2 {
    Portugues = "pt",
    Espanhol = "es",
    Ingles = "en"
}

//console.log(Idioma2);

enum DiaDaSemana {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

//console.log(DiaDaSemana);

// Enum usando const
// Nota: const enum é inlinado pelo compilador (não gera objeto em runtime)
const enum Comida {
    Pizza = "Pizza",
    Hamburger = "Hamburger",
    Churrasco = "Churrasco"
}

function comida (c: Comida) {
    return c;
}

//console.log(comida(Comida.Pizza));
//console.log(comida(Comida.Hamburger));
//console.log(comida(Comida.Churrasco));

// Uso adequado de enums
// Pequeno numero de valores fixos, intimamente relacionados e conhecidos em tempo de compilação
// exemplo
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
