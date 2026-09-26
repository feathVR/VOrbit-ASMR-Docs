---
sidebar_position: 2
---

# Calibración

La calibración le indica a VOrbit ASMR cómo interpretar los valores que envía tu aplicación de seguimiento. Registras tu postura habitual como centro y mides cuánto te mueves durante el stream (el rango de movimiento).

Cada eje asignado se calibra por separado, y un eje en `—` siempre se considera centrado.

## Pasos

<img src="/VOrbit-ASMR-Docs/img/calibration-es.svg" alt="Diagrama en cuatro pasos: elegir el eje horizontal, registrar el centro mirando al frente, medir el rango moviéndote a izquierda y derecha y comprobar Calibrado" width="1200" height="660" />

_Sigue el diagrama mientras lo haces. [Abre la imagen para ampliarla](/img/calibration-es.svg)._

1. [Conecta el seguimiento](./overview) y asigna un parámetro al eje horizontal.
2. Mantén tu postura y posición habituales y pulsa **Registrar centro**.
3. Pulsa **Medir rango de movimiento** y muévete un poco más de lo normal en un stream, a lo largo de cada eje asignado.
4. Pulsa **Terminar medición** y comprueba que el estado cambie de **Sin calibrar** a **Calibrado**.
5. Muévete a izquierda y derecha y comprueba que la voz recorra el rango que esperas.

![La tarjeta de calibración](/img/screenshots/es/calibration-es.png)

_Registrar centro, Medir rango de movimiento y Restablecer calibración, con el estado de la calibración a la derecha._

## Ajusta el movimiento

Se ajusta en **Rango de desplazamiento**, en la pestaña Posición.

- Si el movimiento va al revés, marca **Invertir** para ese eje.
- Si tiembla, sube el **Suavizado**.
- Si la voz se desplaza demasiado o demasiado poco, ajusta **Arco horizontal**, **Arco vertical** o **Rango de profundidad**.

La calibración mide el movimiento de tu cuerpo (la entrada); el rango de desplazamiento fija cuánto se mueve la voz (la salida). Volver a calibrar no cambia los ajustes del rango de desplazamiento.

## Cuándo volver a calibrar

La calibración se guarda por fuente de seguimiento y nombre del parámetro elegido. Vuelve a calibrar para la nueva entrada cuando:

- cambies el parámetro que usas,
- muevas la cámara, o
- cambies de modelo o de rastreador.

Para afinar los números, abre **Ajustar la calibración numéricamente** e introduce directamente el centro y el semirrango de cada eje.
