// Interfaces genéricas em TypeScript: contratos parametrizados com tipos.

// Uma interface genérica define uma lista de parâmetros de tipo.
// Os parâmetros são declarados entre colchetes angulares <>.

// Exemplo
interface Pair<T, U> {
    first: T;
    second: U;
}

const pair: Pair<string, number> = {
    first: "Hello",
    second: 42
};

console.log(pair);

// Exemplo 2 — interface genérica para resposta de API
interface FetchResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
    const response = await fetch(url);
    const headers: Record<string, string> = {};

    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const data = await response.json();
    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}

(async () => {
    const response = await fetchJson<{ name: string }>("https://api.example.com/data");
    console.log(response.data.name);
})();

// Estudar mais sobre este tópico.
