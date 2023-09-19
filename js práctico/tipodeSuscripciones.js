const suscripcion = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic:  "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}
function plan (myplan) {
    if (suscripcion[myplan]){
        console.log(suscripcion[myplan])
        return;
    }
    console.warn('¡Ese plan no existe!');
}
plan('plan')