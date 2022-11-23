import Pregunta from '../src/Negocio/Models/Pregunta.js'; 
import assert from "assert";

describe("Pregunta",()=>{
    //lo que hace la prueba 
    describe("si no se ingresa ninguna letra",()=>{
        it("lanza un error",()=>{
            assert.throws(()=>new Pregunta("","VACIO","Que no contiene nada."));
            
        })
    })


    describe("si se ingresa mas de una letra",()=>{
        it("lanza un error",()=>{
            assert.throws(()=>new Pregunta("afsafasf","VACIO","Que no contiene nada."));
            
            
        })
    })


    describe("si no escribe respuesta",()=>{
        it("lanza un error",()=>{
            assert.throws(()=>new Pregunta("afsafasf","","que no contiene nada"));
            
            
        })
    })

    describe("si no escribe pregunta",()=>{
        it("lanza un error",()=>{
            assert.throws(()=>new Pregunta("afsafasf","VACIO",));
            
            
        })
    })

    describe("si intenta ingresa un estado fuera de los aceptados.",()=>{
        it("Si ingresa un estado fuera de los aceptados",()=>{
            assert.throws(()=>new Pregunta("V","VACIO","Que no contiene nada.").status(9));
            
            
        })
    })


    describe("si la respuesta no contiene la letra",()=>{
        it("lanza un error",()=>{
            assert.throws(()=>new Pregunta("X","VACIO","Que no contiene nada."));
            
            
        })
    })

    describe("si ingresa algo que no sea una letra",()=>{
        it("lanza un error",()=>{
            assert.throws(()=>new Pregunta(";","VACIO","Que no contiene nada."));
            
            
        })
    })
})