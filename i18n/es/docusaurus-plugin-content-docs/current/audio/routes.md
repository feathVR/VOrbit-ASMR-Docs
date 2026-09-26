---
sidebar_position: 1
---

# Elige una ruta de audio

VOrbit ASMR te permite elegir por dónde pasa el audio. Ninguna ruta suena mejor que la otra: elige la que encaje con tu forma de hacer streams y grabar. Se cambia en **Ruta de audio**, en la pestaña **Dispositivos**.

| Ruta de audio | Ideal para | Dónde se configuran entrada y salida |
| --- | --- | --- |
| **Normal** | Usar VOrbit ASMR por sí solo, rápidamente | La pantalla Dispositivos de VOrbit ASMR |
| **DAW (puente VST)** | Trabajar dentro de pistas del DAW y una cadena de efectos existente | Tu DAW / host VST |

![Ajustes de la pantalla Dispositivos](/img/screenshots/es/device-card-es.png)

_La pantalla Dispositivos con Normal: ruta de audio, reducción de ruido, dispositivos de entrada y salida, modo anticortes y cómo llevarlo a tu stream._

## Con Normal

Elige tu micrófono en **Dispositivo de entrada (micrófono)** y tus auriculares en **Dispositivo de salida**, y pulsa **Iniciar** arriba. Para una primera prueba puedes dejar ambos en **Predeterminado del sistema**. Pulsa **Volver a detectar** después de reconectar un dispositivo.

### Iguala las frecuencias de muestreo

En la pantalla se muestran las frecuencias de muestreo del micrófono y de la salida. Pon ambas en el mismo valor admitido (44100 / 48000 / 88200 / 96000 Hz) en la configuración de sonido de Windows o en el panel de tu interfaz de audio. Después, pulsa **Detener** y luego **Iniciar** otra vez.

### Modo anticortes

Si los chasquidos o cortes continúan, activa **Modo anticortes**. Hace funcionar el micrófono y la salida por separado con un margen entre ellos, lo que añade unos 30 ms de latencia. También da estabilidad cuando el micrófono y la salida son dispositivos distintos.

## Con DAW (puente VST)

VOrbit ASMR no abre los dispositivos de audio por sí mismo. Recibe el audio de **VOrbit Bridge**, insertado en tu DAW, y devuelve el audio espacializado al mismo lugar. Los dispositivos, la frecuencia de muestreo y el búfer se configuran en el DAW.

Si usas una interfaz de audio, esta ruta puede ser más estable. Continúa con [Usa el puente VST](./vst-bridge).

:::note
Mientras está en marcha no puedes cambiar la ruta de audio, los dispositivos de entrada y salida, la reducción de ruido ni el modo anticortes. Pulsa **Detener** primero.
:::
