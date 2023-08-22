const form = document.getElementById('form-calculadora');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>'
const notaMinica = parseFloat(prompt("Digite a nota mínima:"))

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAtividade.value)){
        alert(`A atividade: ${nomeAtividade.value} já está cadastrada.`)
    } else{
        //metodo push, envia dados para dentro do array
        atividades.push(nomeAtividade.value)
        notas.push(parseFloat(notaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>'
    
        linhas += linha
    }

    
    nomeAtividade.value = ''
    notaAtividade.value = ''
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMediaFinal(){

    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinica ? spanAprovado : spanReprovado;
    
   
}


function calculaMediaFinal(){
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}