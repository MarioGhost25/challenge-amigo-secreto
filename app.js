// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let friends = [];

function agregarAmigo() {
    let inputFriend = document.getElementById('amigo');
    if (inputFriend.value.length === 0) {
        alert('Por favor, inserte un nombre.')
    }
    else {
        friends.push(inputFriend.value);
        inputFriend.value = '';
        recorrerLista();
    }

}


function recorrerLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = friends[i];
        ul.appendChild(li);

    }
}


function sortearAmigo() {

    if (friends.length !== 0) {
        let select = Math.floor(Math.random() * friends.length);
        select = friends[select];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = select;

    } else {
        alert('Agregue los nombres para poder sortear.')
    }

}

