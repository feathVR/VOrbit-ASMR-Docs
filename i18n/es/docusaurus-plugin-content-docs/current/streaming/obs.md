---
sidebar_position: 1
---

# Envía el audio a OBS

Lleva la voz procesada a OBS por **una sola ruta**. Las mismas indicaciones aparecen en **Cómo llevarlo a tu stream**, en la pestaña Dispositivos.

![Cómo enviar el audio a OBS](/img/screenshots/es/help-streaming-es.png)

_«Enviar el audio a OBS o a un stream» en la pestaña Ayuda. Usa el método A o el B, no ambos._

## Método A: Captura de audio de aplicación (recomendado)

Añade **Captura de audio de aplicación** en OBS y selecciona VOrbit ASMR. Solo se captura el audio de VOrbit ASMR y no necesitas software adicional.

## Método B: Captura de salida de audio

Elige unos auriculares u otra salida en VOrbit ASMR; luego añade **Captura de salida de audio** en OBS y selecciona el mismo dispositivo. También se capturan juegos, notificaciones y todo lo que se envíe a ese dispositivo.

## Comprueba con una grabación corta

Antes del stream, graba unos 20 segundos moviendo la voz a izquierda y derecha y reprodúcelo con auriculares. Comprueba que la posición cambia y que el audio no se duplica.

:::warning Qué causa el audio duplicado
Capturar la misma señal por Audio del escritorio y por una fuente aparte, o capturar además en OBS el micrófono sin procesar, duplica el audio. Vigila los medidores de OBS y asegúrate de que la señal procesada entra por una sola ruta.
:::

## Si usas un DAW

Con la ruta de audio en **DAW (puente VST)**, la voz procesada sale del DAW. Configura una ruta para que OBS capture la salida procesada del DAW. Consulta [Usa el puente VST](../audio/vst-bridge).

## Muestra la imagen de la cabeza artificial (opcional)

También puedes mostrar en el stream una imagen del micrófono de cabeza artificial. Activa **Mostrar la cabeza artificial en el stream** en la pestaña Posición y ajusta su tamaño y posición en VTube Studio o nizima LIVE. Consulta [Cómo se mueve la voz](../spatial/overview#dummy-head-overlay).
