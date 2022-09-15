export default class Jugador {
    #nombre;
    #edad;
    #puntaje

    constructor(nombre,edad) {
        this.#nombre = nombre;
        this.#edad = edad;
        puntaje(0);

    }

    set puntaje(puntaje) { 
        this.#puntaje = puntaje;
    }

    get nombre() { 
        return this.#nombre;
    }

    get edad() { 
        return this.#edad;
    }

    get puntaje() { 
        return this.#puntaje;
    }

    

}