
var url_do_select = refereciaServidor + 'selectsJson.php?';

console.log(url_do_select);
console.log()

chamadaAjax(url_do_select + 'parametro=agendamento', card);

function card(data) {
    html = "";
    console.log(data);
    for (i = 0; i < data.length; i++) {

        html +=
            '<div class="mdl-cell mdl-cell--4-col">'
            + '<div class="mdl-card mdl-shadow--2dp demostracao-card card">'
            + '<div class="mdl-card__title">'
            + '<h2 class="mdl-card__title-text">' + data[i].Nome + '</h2>'
            + '</div>'
            + '<div class="mdl-card__supporting-text">'
            + '<p>' + data[i].IH + '</p>'
            + '<p>' + data[i].Procedimento + '</p>'
            + '</div>'
            + '<div class="mdl-card__actions mdl-card--border">'
            + '<a href="./questionario.html?id_paciente=' + data[i].id + '" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent">Preencher Ficha</a>'
            + '</div>'
            + '</div>'
            + '</div>'
            ;
    }

    var cards = document.getElementById("cards");
    if (cards) {
        document.getElementById("cards").innerHTML = html;
    } else {
        console.log("Não existe Cards");
    }
}

cria_subtitulo();

function cria_subtitulo() {


    btn_add_input_subtitulo = document.getElementById('add_subtitulo');

    btn_add_input_subtitulo.addEventListener("click", function () {

        // var html = "teste 1"
        // // html = '<div class="mdl-textfield mdl-js-textfield">'
        // //                 + '<input class="mdl-textfield__input" type="text" name="sub1" id="titulo_questionario">'
        // //                 + '<label class="mdl-textfield__label" for="titulo_questionario">Sub-titulo</label>'
        // //                 +' </div>';


        /*Iria colocar o input na tela e depois o insert para salvar */

        // Buscar elemento pai
        var elemento_pai = btn_add_input_subtitulo;

        // Criar elemento
        var titulo = document.createElement('h1');

        // Criar o nó de texto
        var texto = document.createTextNode("Um título qualquer");

        // Anexar o nó de texto ao elemento h1
        titulo.appendChild(texto);

        // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
        elemento_pai.appendChild(titulo);


        document.getElementById("inputs_sub").appendChild("teste");
    });

    // html = ""; 


    //     

    // document.getElementById("cards").innerHTML = html;

}




//chamada de funções

// function localizacao(data) {
//     tabela_localizacao(data, '#tabela_localizacao')
// }

// setInterval(function () {
//     chamadaAjax('php/selectsJson.php?parametro=setor', localizacao);
//     chamadaAjax('php/selectsJson.php?parametro=localizacao', tabela);
// },1000);


// function tabela_localizacao(data, id_da_tabela, html) {
//     var html = "";

//     for (let i = 0; i < data.length; i++) {
//         if(data[i].qtdsala === "" || data[i].qtdsala === null){
//             setor = 0;
//         }else{
//             setor = data[i].qtdsala
//         }





//         
//     }

//     document.getElementById("tabela_localizacao").innerHTML = html;
//     var status = document.querySelectorAll(".status_localizacao");
//     coresStatus(status);


// }




// //rastrio de pacientes
// function tabela(data) {
//     var html = "";
//     if (data.length === 0) {
//         html += '<tr><td colspan= "2">Não ha pacientes no momento</td></tr>';
//     } else {
//         for (let i = 0; i < data.length; i++) {
//             html += '<tr class="linha_pacientes"><td>' + data[i].paciente + '</td><td class="status"  class="' + data[i].setor + '">' + data[i].setor + '</td></tr>';
//         }
//     }
//     document.getElementById("tabela").innerHTML = html;
//     var status = document.querySelectorAll(".status");
//     // coresStatus(status);
// }



// function error() {
//     console.log('nao esta chamando a função')
// }



// //cores de status
// function coresStatus(status) {
//     for (i = 0; i < status.length; i++) {
//         valordoStatus = status[i].textContent;
//         if (valordoStatus == "Aguardando" || valordoStatus == "Disponivel") {
//             status[i].setAttribute('class', 'status disponivel');
//         } else if (valordoStatus == 'Indisponivel') {
//             status[i].setAttribute('class', 'status Indisponivel');
//         } else if (valordoStatus == 'finalizado') {
//             status[i].setAttribute('class', 'status finalizado');
//         } else if (valordoStatus == 'null') {
//             status[i].setAttribute('class', 'status nenhum');
//         } else {
//             status[i].setAttribute('class', 'status emuso');
//         }
//     }
// }


// //total de pacientes
// function totaldePaciente() {
//     chamadaAjax('php/selectsJson.php?parametro=qtdpacientes', exibirTotalPaciente);
// }

// function exibirTotalPaciente(data) {
//     var numTotal = document.querySelector('#totaldePacientes').textContent = data[0]['totpacientes'];;
// }
