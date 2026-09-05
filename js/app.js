// Dados simulados do RetinaEdge

const pacientes = [
    {
        id: 1,
        nome: "João da Silva"
    },
    {
        id: 2,
        nome: "Maria Oliveira"
    },
    {
        id: 3,
        nome: "Carlos Santos"
    }
];


const exames = [
    {
        paciente: "João da Silva",
        data: "24/08/2026",
        resultado: "Baixo risco",
        confianca: "96,4%"
    },

    {
        paciente: "Maria Oliveira",
        data: "24/08/2026",
        resultado: "Alto risco",
        confianca: "94,7%"
    },

    {
        paciente: "Carlos Santos",
        data: "23/08/2026",
        resultado: "Baixo risco",
        confianca: "98,1%"
    }
];


// Atualiza os números do dashboard

document.getElementById("totalPacientes").textContent =
    pacientes.length;


document.getElementById("totalExames").textContent =
    exames.length;


const baixoRisco = exames.filter(
    exame => exame.resultado === "Baixo risco"
);


const altoRisco = exames.filter(
    exame => exame.resultado === "Alto risco"
);


document.getElementById("baixoRisco").textContent =
    baixoRisco.length;


document.getElementById("altoRisco").textContent =
    altoRisco.length;


// Preenche a tabela

const tabela = document.getElementById("tabelaExames");


exames.forEach(exame => {

    const linha = document.createElement("tr");


    let classeResultado = "";

    if (exame.resultado === "Baixo risco") {

        classeResultado = "resultado-baixo";

    } else {

        classeResultado = "resultado-alto";

    }


    linha.innerHTML = `

        <td>${exame.paciente}</td>

        <td>${exame.data}</td>

        <td class="${classeResultado}">
            ${exame.resultado}
        </td>

        <td>${exame.confianca}</td>

    `;


    tabela.appendChild(linha);

});