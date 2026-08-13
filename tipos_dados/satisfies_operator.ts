// Operador satisfies em TypeScript: verificação de conformidade sem perda de inferência.

// Introduzido na versão 4.9 do TypeScript.
// Visa dar a capacidade de atribuir tipos mais específicos sem perder a inferência original.

// Exemplos

 type NomeCidade = "São Paulo" | "Rio de Janeiro" | "Belo Horizonte";

const cidade: NomeCidade = "São Paulo";

 type CidadeCoordenadas = {
  lat: number;
  lng: number;
};

const cidadeCoordenadas: CidadeCoordenadas = {
  lat: -23.55052,
  lng: -46.633308
};

 type Pessoa = {
    localNascimento: CidadeCoordenadas;
    residencia: CidadeCoordenadas;
};

const pessoa: Pessoa = {
    localNascimento: cidadeCoordenadas,
    residencia: cidadeCoordenadas
};
