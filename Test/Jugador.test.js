import Jugador from "../src/Negocio/Models/Jugador.js"

describe('Jugador', ()=>{
    describe('si el nombre no es string',()=>{
        it('lanza error',()=>{
            //preparacion
            const argumento = 12
            //ejercicio
            let fallo = false
            try {
                const jugador = new Jugador(argumento,12).nombre(47)
            } catch(error){
                fallo=true;
            }
            //validacion
            if (!fallo) {
                throw new Error('salio mal!')

            }
        })
    })
    describe('si el nombre tiene menos de 3 carateres',()=>{
        it('lanza error',()=>{
            //preparacion
            const argumento = 'aa'
            //ejercicio
            let fallo = false
            try {
                const jugador = new Jugador(argumento,12).nombre("aa")
            } catch(error){
                fallo=true;
            }
            //validacion
            if (!fallo) {
                throw new Error('salio mal!')

            }
        })
    })   
    describe('si el nombre tiene mas de 20 carateres',function (){
        it('lanza error',function(){
            //preparacion
            const argumento = 'abcdefghijklmnopqrstuvwxyz'
            //ejercicio
            let fallo = false
            try {
                const jugador = new Jugador(argumento,12).nombre(argumento)
            } catch(error){
                fallo=true;
            }
            //validacion
            if (!fallo) {
                throw new Error('salio mal!')

            }
        })
    })    
    describe('si la edad es no numerico',function (){
        it('lanza error',function(){
            //preparacion
            const argumento = 'abcdefghijklmnopqrstuvwxyz'
            //ejercicio
            let fallo = false
            try {
                const jugador = new Jugador('Hernán',argumento).edad(argumento)
            } catch(error){
                fallo=true;
            }
            //validacion
            if (!fallo) {
                throw new Error('salio mal!')

            }
        })
    })          
    describe('si la edad es no positivo',function (){
        it('lanza error',function(){
            //preparacion
            const argumento = -20
            //ejercicio
            let fallo = false
            try {
                const jugador = new Jugador('Hernán',argumento).edad(argumento)
            } catch(error){
                fallo=true;
            }
            //validacion
            if (!fallo) {
                throw new Error('salio mal!')

            }
        })
    })      
    describe('si la edad es > 120',function (){
        it('lanza error',function(){
            //preparacion
            const argumento = 121
            //ejercicio
            let fallo = false
            try {
                const jugador = new Jugador('Hernán',argumento).edad(argumento)
            } catch(error){
                fallo=true;
            }
            //validacion
            if (!fallo) {
                throw new Error('salio mal!')

            }
        })
    })  

})