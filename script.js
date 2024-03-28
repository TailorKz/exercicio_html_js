let campoA = document.getElementById('numero')
let campoB = document.getElementById('numero2')


function submeter(){
let valorCampoA = campoA.value;
let valorCampoB = campoB.value;


    if (valorCampoB > valorCampoA){
        document.getElementById('text').innerHTML = 'Tudo ok!';
    }
    else{
        document.getElementById('text').innerHTML = 'O campo B deve ser maior que o campo A!';
    }
}