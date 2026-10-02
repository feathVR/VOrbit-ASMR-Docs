---
sidebar_position: 1
---

# Envía el audio a OBS

Lleva la voz procesada a OBS por **una sola ruta**. Las mismas indicaciones aparecen en **Cómo llevarlo a tu stream**, en la pestaña Dispositivos.

![Cómo enviar el audio a OBS](/img/screenshots/es/help-streaming-es.png)

_«Enviar el audio a OBS o a un stream» en la pestaña Ayuda. Normalmente se usa el método A o B; si no quieres oír tu voz en directo, sigue los pasos de VB-CABLE más abajo. No combines métodos de captura._

## Método A: Captura de audio de aplicación (recomendado)

Añade **Captura de audio de aplicación** en OBS y selecciona VOrbit ASMR. Solo se captura el audio de VOrbit ASMR y no necesitas software adicional.

## Método B: Captura de salida de audio

Elige unos auriculares u otra salida en VOrbit ASMR; luego añade **Captura de salida de audio** en OBS y selecciona el mismo dispositivo. También se capturan juegos, notificaciones y todo lo que se envíe a ese dispositivo.

## Envía tu voz a OBS sin oírla en los auriculares (VB-CABLE)

Si OBS graba tu voz pero te resulta incómodo oírla continuamente en los auriculares, separa la salida con [VB-Audio Virtual Cable (VB-CABLE)](https://vb-audio.com/Cable/). Estos pasos son para la ruta de audio **Normal**. Puedes escuchar tu voz durante la primera comprobación, pero no necesitas monitorizarla durante el stream.

1. Instala VB-CABLE desde su sitio oficial. Windows mostrará **CABLE Input** como dispositivo de reproducción y **CABLE Output** como dispositivo de grabación.
2. Pulsa **Detener** en VOrbit ASMR. En **Dispositivos**, cambia la salida a **CABLE Input (VB-Audio Virtual Cable)** y pulsa **Iniciar**. Conserva el mismo micrófono. Deja los auriculares como salida predeterminada de Windows; no pongas CABLE Input como salida general del sistema.
3. Añade una sola fuente **Captura de entrada de audio** en OBS y selecciona **CABLE Output (VB-Audio Virtual Cable)**. No captures VOrbit ASMR a la vez con el método A o B.
4. Desactiva la monitorización de audio de esta fuente en OBS y deja desactivada la opción **Escuchar este dispositivo** de Windows para CABLE Output. Cualquiera de las dos puede devolver tu voz a los auriculares.
5. Comprueba que el medidor de OBS reacciona y haz una grabación corta. La grabación debe contener el movimiento procesado entre izquierda y derecha, mientras que no oyes tu voz en directo en los auriculares.

**CABLE Input recibe el sonido de VOrbit ASMR; CABLE Output se lo entrega a OBS.** Desactivar solo la monitorización de OBS no detiene la salida directa de VOrbit ASMR a los auriculares. Evita también capturar el mismo sonido por Audio del escritorio o por el micrófono sin procesar.

## Comprueba con una grabación corta

Antes del stream, graba unos 20 segundos moviendo la voz a izquierda y derecha y reprodúcelo con auriculares. Comprueba que la posición cambia y que el audio no se duplica.

:::warning Qué causa el audio duplicado
Capturar la misma señal por Audio del escritorio y por una fuente aparte, o capturar además en OBS el micrófono sin procesar, duplica el audio. Vigila los medidores de OBS y asegúrate de que la señal procesada entra por una sola ruta.
:::

## Si usas un DAW

Con la ruta de audio en **DAW (puente VST)**, la voz procesada sale del DAW. Configura una ruta para que OBS capture la salida procesada del DAW. Consulta [Usa el puente VST](../audio/vst-bridge).

## Muestra la imagen de la cabeza artificial (opcional)

También puedes mostrar en el stream una imagen del micrófono de cabeza artificial. Activa **Mostrar la cabeza artificial en el stream** en la pestaña Posición y ajusta su tamaño y posición en VTube Studio o nizima LIVE. Consulta [Cómo se mueve la voz](../spatial/overview#dummy-head-overlay).
