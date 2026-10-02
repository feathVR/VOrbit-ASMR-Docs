---
sidebar_position: 1
---

# Problemas frecuentes

Las mismas comprobaciones están en la aplicación, en **Si algo no funciona** de la pestaña Ayuda.

![La pantalla Ayuda](/img/screenshots/es/help-es.png)

_La pestaña Ayuda: reiniciar el tutorial, abrir esta guía y seguir instrucciones por tarea. Usa auriculares para comprobar el audio binaural._

## Chasquidos o cortes

1. En la pantalla **Dispositivos**, revisa las frecuencias de muestreo del micrófono y de la salida.
2. Pon ambas en la misma frecuencia admitida (44100 / 48000 / 88200 / 96000 Hz) en la configuración de sonido de Windows o en el panel de tu interfaz de audio.
3. Pulsa **Detener** y luego **Iniciar** otra vez.
4. Si continúa, activa **Modo anticortes** (añade unos 30 ms de latencia).

Si usas una interfaz de audio, la ruta [DAW (puente VST)](../audio/vst-bridge) puede ser más estable.

## No oyes tu propia voz o no hay sonido

- Comprueba que el botón de arriba diga **Detener** (el audio está en marcha).
- Revisa el medidor de entrada y luego los de salida. Si solo se mueve la entrada, revisa el dispositivo de salida y el volumen de salida en la pestaña Sonido.
- Comprueba que los dispositivos de entrada y salida sean los que quieres. Pulsa **Volver a detectar** después de reconectar un dispositivo.
- Comprueba que **Silenciar** no esté activado arriba, y revisa también el silencio y el volumen de Windows.
- Con la ruta **DAW (puente VST)**, revisa la entrada, la salida y la monitorización en tu DAW.

## El seguimiento no se conecta o el punto no se vuelve azul

- Comprueba que el modo de control de la pestaña Posición sea **Automático (seguimiento)**.
- Comprueba que la fuente de seguimiento diga **Recibiendo**.
- Comprueba que el eje que usas tenga asignado un parámetro distinto de `—`.
- Comprueba que el eje asignado muestre **Calibrado**.

## La voz se mueve, pero la posición no parece correcta

- Vuelve a [calibrar](../tracking/calibration) con la postura habitual de tu avatar.
- Revisa **Invertir** y **Suavizado** en **Rango de desplazamiento**.
- Comprueba que **Órbita alrededor de la cabeza (recomendado)** esté activada o no, según lo que quieras.
- Revisa **Arco horizontal**, **Arco vertical** y **Rango de profundidad**.

## Otra aplicación del mismo PC ya no recibe VMC

Activa **Reenviar los datos recibidos al puerto** en **Detalles de conexión**. Consulta [Fuentes de seguimiento](../tracking/overview#vmc-forwarding).

## La colab no se conecta

Para baja latencia revisa Steam, propiedad, componentes, invitación y plazas. Si la llamada estable indica servidor sin configurar, necesitas una distribución compatible. Verifica el modo del código y cancela o desconecta antes de reintentar. Solo para llamadas directas anteriores, prueba una conexión fija o IPv6 si falla.

[Llamadas de colab](../collab/call#call-modes)

## Audio duplicado o con eco

- Comprueba que OBS no capture la misma señal dos veces ([Envía el audio a OBS](../streaming/obs)).
- Comprueba que el sonido de los altavoces no vuelva al micrófono. Se recomiendan auriculares.

## Si el problema continúa

Usa **Exportar ZIP de diagnóstico** en la pestaña Acerca de, revisa su contenido y adjúntalo a tu reporte de error. El ZIP no contiene audio, códigos de invitación ni credenciales.

## Sonido amortiguado o rumor grave

Revisa **Tapar oídos** en Sonido y vuelve ambos deslizadores a 0%. Suelta los atajos o botones de Stream Deck para tapar mientras se mantienen pulsados. Si solo se reducen los picos fuertes, revisa el indicador de **Limitador de seguridad**.

## No se encuentra la aplicación de seguimiento

Ejecuta VTube Studio para PC en el mismo equipo, activa su API y permite el plugin (localhost:8001 por defecto). La aplicación de iPhone sola no basta. Ejecuta nizima LIVE en el mismo PC y activa VOrbit ASMR en su gestor de plugins (localhost:22022). Reintenta cada 3 segundos durante la conexión. Si cierras estando conectado, vuelve a conectar automáticamente al iniciar.

## No se puede cargar un conjunto

Detén todas las fuentes y espera a que termine la carga. Comprueba si se movieron o borraron los archivos de audio del conjunto.
