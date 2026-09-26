---
sidebar_position: 2
---

# Usa el puente VST

El puente VST envía el audio del micrófono desde un DAW o host VST a VOrbit ASMR y devuelve la señal espacializada a la misma inserción del plugin.

<img src="/VOrbit-ASMR-Docs/img/vst-bridge-flow-es.svg" alt="El audio va del micrófono a VOrbit Bridge y, por la salida del DAW, a OBS. VOrbit ASMR intercambia audio con Bridge y los auriculares aparecen como una ruta de monitoreo aparte" width="1400" height="820" />

_Diagrama conceptual del flujo de señal. [Abre la imagen para ampliarla](/img/vst-bridge-flow-es.svg)._

Para hacer stream, **configura aparte una ruta para que OBS capture la salida procesada del DAW**. Elige el método que encaje con tu DAW y tus dispositivos, como una salida adecuada o un dispositivo de audio virtual. Oírlo en los auriculares no prueba que llegue a OBS: revisa su medidor de audio y haz una grabación de prueba corta.

## Configuración

Al elegir **DAW (puente VST)** en la pestaña Dispositivos, aparecen cuatro pasos en **Usarlo dentro de un DAW (puente VST)**.

1. **Copia “VOrbit Bridge.vst3” en la carpeta VST3 de tu DAW**
   Pulsa **Abrir la carpeta del puente** y copia **la carpeta `VOrbit Bridge.vst3` completa** en la carpeta VST3 que escanea tu DAW. Aunque se llame .vst3, es una carpeta con archivos dentro; no saques solo los archivos de dentro.
2. **Pon la ruta de audio de esta aplicación en “DAW (puente VST)”**
   No se puede cambiar mientras está en marcha, así que pulsa **Detener** primero.
3. **Vuelve a escanear en tu host e insértalo en la pista del micrófono**
   Vuelve a escanear los plugins en tu DAW e inserta **VOrbit Bridge** en la pista del micrófono. Activa también la monitorización de entrada en el DAW.
4. **Pulsa Iniciar**
   Cuando el host se conecte, podrás empezar a espacializar.

![Pantalla de configuración del puente VST](/img/screenshots/es/vst-bridge-es.png)

_La aplicación también muestra la carpeta de origen y el estado actual de la conexión. La ruta de la imagen es un ejemplo de desarrollo; la tuya depende de dónde esté instalada._

## Ajustes del DAW

- Configura la entrada, la salida, la frecuencia de muestreo y el tamaño del búfer en el DAW.
- Las frecuencias admitidas son **44,1 kHz y 48 kHz**.
- Sin conexión con VOrbit ASMR, el plugin deja pasar el audio sin cambios.
- Los archivos de audio y la voz de tu compañero de colab vuelven al DAW como salida de la pista donde está el puente. No lo pongas en la mezcla general del DAW, o tu compañero oirá su propia voz como eco.
- Mientras no haya un DAW conectado, no se pueden usar los audios ni las llamadas.
- El renderizado (procesamiento sin conexión) y la congelación dejan pasar el audio sin cambios.

## Grabar voz, audios y compañero por separado

Copia también **`VOrbit Bridge Multi.vst3`** desde la misma carpeta y cárgalo como instrumento en tu DAW. Por sí solo no produce sonido.

## Actualizarlo o quitarlo

- Después de actualizar VOrbit ASMR, vuelve a copiar el nuevo `VOrbit Bridge.vst3`.
- Para dejar de usarlo, borra tú mismo tu copia de `VOrbit Bridge.vst3`; desinstalar la aplicación no la elimina.

Si no se conecta, detén VOrbit ASMR, vuelve a elegir la ruta de audio y vuelve a escanear el plugin en tu DAW.
