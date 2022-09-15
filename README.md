# Tp_Pasapalabra
Trábajo Práctico TP2 - Pasapalabra


Pasapalabra-rosco
Entidades potenciales:
“Jugador(nombre, puntaje0)”
Sistema(pregunta[])
“Rosco/partida(jugador,pregunta[])”
“Pregunta(letra,respuesta,estado[],pregunta)”
Ranking(jugador[])



Caso de uso 1: Registro del jugador
El sistema carga, en base a la edad, el rosco correspondiente
El sistema muestra la primer pregunta

Caso de uso 2: Ingreso de respuesta correcta

El jugador ingresa la respuesta correcta
El sistema indica que la respuesta es correcta
El sistema actualiza el puntaje
El sistema guarda el estado de la pregunta
El sistema pasa a la siguiente pregunta

Caso de uso 3: Ingreso de respuesta incorrecta

El jugador ingresa la respuesta incorrecta
El sistema indica que la respuesta es incorrecta y da la respuesta correcta
El sistema guarda el estado de la pregunta
El sistema pasa a la siguiente pregunta

Caso de uso 4: Ingreso de pasapalabra

El jugador ingresa “pasapalabra”
El sistema pasa a la siguiente pregunta

Caso de uso 5: Fin de juego

El jugador contestó todas las preguntas
Se muestra el puntaje

