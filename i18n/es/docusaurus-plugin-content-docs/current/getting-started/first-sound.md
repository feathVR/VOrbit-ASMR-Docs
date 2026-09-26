---
sidebar_position: 1
---

# Tu primer sonido

Esta página te lleva desde la instalación hasta oír tu voz moverse por el espacio. Al principio no uses el seguimiento: mueve la voz a mano. Así es mucho más fácil ver dónde falla algo.

## Inicio rápido de un vistazo

<img src="/VOrbit-ASMR-Docs/img/quick-start-es.svg" alt="Inicio rápido de VOrbit ASMR en cinco pasos: primer sonido y seguimiento automático opcional" width="1200" height="1600" />

_Los pasos 1–3 comprueban el sonido y la posición. Sigue con los pasos 4–5 solo si quieres seguimiento automático. [Abre la imagen para ampliarla](/img/quick-start-es.svg)._

## Qué necesitas

- Un micrófono y auriculares (de diadema o intraurales)
- Para el movimiento automático, una aplicación de avatar o de seguimiento compatible (VTube Studio, nizima LIVE o un emisor VMC)

:::warning
Usa auriculares en lugar de altavoces para comprobar el audio espacial. Los altavoces no reproducen bien la posición binaural.
:::

## Sigue el tutorial

Al abrir la aplicación por primera vez se abre la pantalla Dispositivos y aparece arriba la guía **Primeros pasos**. Tiene cinco pasos:

![La guía Primeros pasos](/img/screenshots/es/tutorial-es.png)

_La guía Primeros pasos mostrando su primer paso, «Elige micrófono y salida»._

1. Elige micrófono y salida
2. Escucha el cambio de posición
3. Conecta el seguimiento
4. Registra el centro y tu rango de movimiento
5. Envía el audio a tu stream

**Ver ajustes**, en cada paso, abre la pantalla correspondiente y resalta dónde mirar. Cuando completas un paso aparece una marca, pero la guía nunca avanza sola. Pulsa **Confirmar y continuar** cuando estés listo.

Para dejarlo a medias, pulsa **Más tarde (Ayuda)**. Puedes empezar de nuevo desde el principio con **Iniciar tutorial** en la pestaña Ayuda.

## Pasos

### 1. Elige micrófono y salida

Abre la pestaña **Dispositivos** y comprueba que **Ruta de audio** esté en **Normal**. Elige tu micrófono en **Dispositivo de entrada (micrófono)** y el dispositivo al que están conectados tus auriculares en **Dispositivo de salida**. Si no estás seguro, deja **Predeterminado del sistema**.

Para usar VOrbit ASMR dentro de un DAW, elige **DAW (puente VST)** y sigue la [configuración del puente VST](../audio/vst-bridge).

![La pantalla Dispositivos](/img/screenshots/es/device-es.png)

_La pantalla Dispositivos. Con Normal, el micrófono y la salida se eligen aquí._

### 2. Pulsa Iniciar y haz un sonido

Pulsa **Iniciar** arriba y sostén un «aaa» frente al micrófono. Si te oyes en los auriculares y los medidores de entrada y salida de arriba se mueven, todo está bien.

### 3. Arrastra el punto rojo

En la pestaña **Posición**, pon **Modo de control** en **Manual**. Sin dejar de sostener el sonido, arrastra el punto rojo (tu voz) de un lado a otro en un panel. Si tu voz se mueve en los auriculares, ya tienes funcionando la experiencia básica de VOrbit ASMR.

![La pantalla Posición en modo Manual](/img/screenshots/es/position-manual-es.png)

_El panel izquierdo muestra la posición horizontal y vertical; el derecho, la horizontal y la profundidad. El punto rojo es tu voz._

### 4. Mueve la voz automáticamente (opcional)

Para que tu avatar mueva la voz, [conecta el seguimiento](../tracking/overview) y [calibra el centro y el rango](../tracking/calibration).

### 5. Envía el audio a tu stream

Si haces streams, consulta [Envía el audio a OBS](../streaming/obs).

:::tip La reducción de ruido es opcional
Actívala solo si te molesta un ruido de fondo constante, como el ventilador del PC o el aire acondicionado. Viene desactivada y añade unos 10 ms de latencia. Consulta [Reducción de ruido](../audio/noise-suppression).
:::

## Si no funciona

Revisa los cortes, los dispositivos de audio y la conexión del seguimiento en [Problemas frecuentes](../troubleshooting/common-issues).
