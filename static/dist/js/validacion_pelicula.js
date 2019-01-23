let campo_nombre = $('#id_nombre');
let campo_director = $('#id_nombre_director');
let campo_sinopsis = $('#id_sinopsis');
let campo_reparto = $('#id_reparto');
let campo_genero = $('#id_genero');

let contador_error = 0;

var regex = /^([a-z]){3,30}$/i;
var regex_sinopsis_reparto = /^([a-z]){3,500}$/i;

function validarPeliculas(){
    var nombre = campo_nombre.val();
    var director = campo_director.val();
    var sinopsis = campo_sinopsis.val();
    var reparto = campo_reparto.val();
    var genero = campo_genero.val();

    $('.error').remove();

    if (!regex.test(nombre)){
        contador_error += 1;
        campo_nombre.parent().removeClass('has-success has-error');
        campo_nombre.parent().addClass('has-error');
        campo_nombre.parent().append('<label class="control-label error" for="inputError"><i class="fa fa-times-circle-o"></i> Nombre debe ser mayor a 3 caracteres y a-z</label>')
    }

    if (!regex.test(director)){
        contador_error += 1;
        campo_director.parent().removeClass('has-success has-error');
        campo_director.parent().addClass('has-error');
        campo_director.parent().append('<label class="control-label error" for="inputError"><i class="fa fa-times-circle-o"></i> Director debe ser mayor a 3 caracteres y a-z</label>')
    }

    if(!regex_sinopsis_reparto.test(sinopsis)){
        contador_error += 1;
        campo_sinopsis.parent().removeClass('has-success has-error');
        campo_sinopsis.parent().addClass('has-error');
        campo_sinopsis.parent().append('<label class="control-label error" for="inputError"><i class="fa fa-times-circle-o"></i> Sinopsis debe ser mayor a 3 caracteres y a-z</label>')
    }

    if (!regex_sinopsis_reparto.test(reparto)){
        contador_error += 1;
        campo_reparto.parent().removeClass('has-success has-error');
        campo_reparto.parent().addClass('has-error');
        campo_reparto.parent().append('<label class="control-label error" for="inputError"><i class="fa fa-times-circle-o"></i> Reparto debe ser mayor a 3 caracteres y a-z</label>')
    }


}

function validacion_pelicula() {
    validarPeliculas();
    if (!contador_error){
        contador_error = 0;
        return true;
    }else{
        contador_error  = 0;
        return false;
    }
}


