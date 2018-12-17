document.addEventListener("DOMContentLoaded", function(event) {

    
    let nombreAplicacion =  $("#aplicacion");
    let temaAplicacion = $("#tema");
    let lenguajeProgramacion = $("#lenguaje");
    let horasDedicadas = $("#horas");
    let nombre = $("#nombre");
    let apellidos = $("#apellidos");
    let dni = $("#dni");
    let codigo = $("#codigo");
    let terminos = $("#terminos");
    let submit = $("#registro");


    nombreAplicacion.bind("keyup",function(event){
        comprobarNombreAplicacion(nombreAplicacion);
    });
    temaAplicacion.bind("change",function(event){
        comprobarTema(temaAplicacion);
    });
    lenguajeProgramacion.bind("focusout",function(event){
        comprobarLenguaje(lenguajeProgramacion);
    });
    horasDedicadas.bind("keyup",function(event){
        comprobarHoras(horasDedicadas);
    });
    nombre.bind("keyup",function(event){
        comprobarNombre(nombre);
    });
    apellidos.bind("keyup",function(event){
        comprobarNombre(apellidos);
    });
    dni.bind("keyup",function(event){
        comprobarDNI(dni);
    });
    codigo.bind("focusout",function(event){
        comprobarCodigo(codigo);
    });
    terminos.bind("change",function(event){
        comprobarTerminos(terminos);
    });
    submit.bind("click",function(event){
        comprobarNombreAplicacion(nombreAplicacion);
        comprobarTema(temaAplicacion);
        comprobarLenguaje(lenguajeProgramacion);
        comprobarHoras(horasDedicadas);
        comprobarNombre(nombre);
        comprobarNombre(apellidos);
        comprobarDNI(dni);
        comprobarCodigo(codigo);
        comprobarTerminos(terminos);
    });
});

function esCorrecto(input){
    input.removeClass("invalido");
    input.addClass("valido");
}

function esIncorrecto(input, error){
    input.removeClass("valido");
    input.addClass("invalido");
    let divError = buscarDivError(input);
    divError.empty();
    let spanError = $('<span></span>');
    spanError.text(error);
    divError.append(spanError);
}

function buscarDivError(input){
	let parent = input.parents('.input');
	let divError = parent.find('.error');
	return divError;
}

function comprobarNombreAplicacion(input){
    let correcto = false;
    let expresion = /^[A-Z\s]+$/g;
    if(expresion.test(input.val())){
        esCorrecto(input);
        correcto = true;
    }else{
        let error = "No puede contener minúsculas.";
        esIncorrecto(input, error);
    }
    return correcto;
}

function comprobarTema(input){
    let correcto = false;
    if(input.val() != '-'){
        esCorrecto(input);
        correcto = true;
    }else{
        let error = "Debe elegir un tema.";
        esIncorrecto(input, error);
    }
    return correcto;
}

function comprobarLenguaje(input){
    let correcto = false;
    let expresion = /^[a-zA-Z0-9#]+$/g;
    if(expresion.test(input.val())){
        esCorrecto(input);
        correcto = true;
    }else{
        let error = "No puede contener minúsculas.";
        esIncorrecto(input, error);
    }
    return correcto;
}

function comprobarHoras(input){
    let correcto = false;
    let expresion = /^[0-9]+$/g;
    if(expresion.test(input.val()) && input.val()>200 && input.val()<1000){
        esCorrecto(input);
        correcto = true;
    }else{
        let error = "No puede contener minúsculas.";
        esIncorrecto(input, error);
    }
    return correcto;
}

function comprobarNombre(input){
    let correcto = false;
    let expresion = /([A-Z][a-zA-Z]*)/g;
    if(expresion.test(input.val())){
        esCorrecto(input);
        correcto = true;
    }else{
        let error = "No puede contener minúsculas.";
        esIncorrecto(input, error);
    }
    return correcto;
}

function comprobarDNI(input){
    let correcto = false;
    let expresion = /^[0-9]{8,8}[A-Z]$/g;
    if(expresion.test(input.val())){
        esCorrecto(input);
        correcto = true;
    }else{
        let error = "Introduzca un DNI con formato válido.";
        esIncorrecto(input, error);
    }
    return correcto;
}

function comprobarTerminos(input){
    let correcto = false;
    if(input.is(':checked')){
        esCorrecto(input);
        correcto = true;
    }else{
        let error = "Debe aceptar los términos.";
        esIncorrecto(input, error);
    }
    return correcto;
}


