export default class Pregunta {
    #letra;
    #pregunta;
    #respuesta;
    #status;
    
    static #estado = new Array(0,1,2)

    constructor(letra,respuesta,pregunta){
        this.#letra=letra
        this.#respuesta=respuesta;
        this.#status = 0;
        this.#pregunta=pregunta;
    }

    set status(valor) {  
        if ( this.#estado.some(valor))   {
            this.#status = valor;
        }   
    }
    set letra (letra) {this.#letra = letra;}    
    set respuesta (respuesta) {this.#respuesta = respuesta;}
    set pregunta (pregunta) {this.#pregunta = pregunta;}
    get status () {return this.#status;}
    get letra () {return this.#letra;}    
    get respuesta () {return this.#respuesta;}
    get pregunta () {return this.#pregunta;}

}