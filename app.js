let amigos = [];

function adicionarAmigo(){
    let amigo_input = '';
    amigo_input = document.querySelector('#amigo').value;
    if(amigos.includes(amigo_input)){
        alert('Amigo já adicionado');
    }else{
        amigos.push(amigo_input);
    }

    let ul = document.querySelector("#listaAmigos");
    let li = document.createElement("li");
    li.innerHTML = amigo_input;
    ul.appendChild(li)
    console.log(amigos)
}

function sortearAmigo(){
    let indexSorteado = parseInt(Math.random()*(amigos.length - 0));
    let amigoSorteado = amigos[indexSorteado];
    //let botao = document.querySelector(".button-draw");
    //botao.disabled = true; 
    console.log(amigoSorteado)

    let p = document.querySelector("#resultado");
    mensagemDoResultado = `O amigo sorteado foi: ${amigoSorteado}`
    p.innerHTML = mensagemDoResultado;
}