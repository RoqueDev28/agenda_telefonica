var form = document.getElementById('formulario')

var corpoAgenda = document.querySelector('.corpoTabela')

var resetaAgenda = document.querySelector('.reset')

var linhas = '';

var nomes = []
var ddds = []
var numeros = []

//FUNÇÕES
function adicionaLinha(){
    var inputNome = document.querySelector('.Nome').value;
    var inputDDD = parseInt(document.querySelector('.DDD').value);
    var inputNumero = parseInt(document.querySelector('.Telefone').value);

    nomes.push(inputNome);
    ddds.push(inputDDD);
    numeros.push(inputNumero)

    let linha = '<tr class="itemNovo">';
    linha += `<td>${inputNome}</td>`;
    linha += `<td>${inputDDD}</td>`;
    linha += `<td>${inputNumero}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

function atualizaTabela(){
    corpoAgenda.innerHTML = linhas
}

//LISTENERS
form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})