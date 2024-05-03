function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var carrera = document.getElementById("carrera").value;
    var tituloProyecto = document.getElementById("tituloProyecto").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFinal = document.getElementById("fechaFinal").value;

    // Validación del nombre
    if (nombre === "") {
        alert("Por favor, ingrese su nombre completo.");
        return false;
    }

    // Validación del correo electrónico
    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Validación de la carrera o programa académico
    if (carrera === "") {
        alert("Por favor, seleccione su carrera o programa académico.");
        return false;
    }

    // Validación del título del proyecto
    if (tituloProyecto === "") {
        alert("Por favor, ingrese el título del proyecto.");
        return false;
    }

    // Validación de las fechas
    if (fechaInicio === "" || fechaFinal === "") {
        alert("Por favor, ingrese las fechas de inicio y finalización.");
        return false;
    }

    if (new Date(fechaInicio) > new Date(fechaFinal)) {
        alert("La fecha de finalización debe ser posterior a la fecha de inicio.");
        return false;
    }

    // Si todas las validaciones son correctas
    return true;
}
