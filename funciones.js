function resultadoOperacion(datoUno, datoDos){

    let numUno = parseInt(datoUno);
    let numDos = parseInt(datoDos);
    let resultado = numUno + numDos;

    document.getElementById("resultado").value = resultado;
}

function resultoperation(dato_uno, dato_dos){

    let num_uno = dato_uno;
    let num_dos = dato_dos;
    let resu_ltado = num_uno - num_dos;

    document.getElementById("resu_ltado").value = resu_ltado;
}

function resulttoperation(dato__uno, dato__dos){

    let num__uno = parseInt(dato__uno);
    let num__dos = parseInt(dato__dos);
    let resu__ltado = num__uno * num__dos

    document.getElementById("resu__ltado").value = resu__ltado
}

function rerurarooperarion(){

    let nununo = parseInt(document.getElementById("numeroruno").value);
    let nundos = parseInt(document.getElementById("numerordos").value);
    let reruraro = nununo / nundos;

    document.getElementById("reruraro").value = reruraro;
}

//as+

function addComment() {
    const commentContainer = document.getElementById('comment-container');
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.textContent = commentText;
        commentContainer.appendChild(comment);

        // Limpiar el campo de texto
        commentInput.value = "";
    } else {
        alert("Por favor, escribe un comentario antes de enviarlo.");
    }
}


