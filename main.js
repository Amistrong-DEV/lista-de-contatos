const form = document.getElementById('form-atividade');
const imgcheck ='<img src="./contact.png" alt="Simbolo check"/>';
const nomes = [];
const numero = [];
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})
function adicionaLinha (){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já foi inserido`);
        return; 
    }
    if (inputNumeroContato.value.length <9) {
        alert('O número deve ter pelo menos 9 dígitos');
        return; 
    }

    nomes.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${imgcheck}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}
function atualizaTabela(){
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML=linhas;
}