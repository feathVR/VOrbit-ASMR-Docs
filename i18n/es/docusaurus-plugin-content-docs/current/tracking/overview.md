---
sidebar_position: 1
---

# Fuentes de seguimiento

VOrbit ASMR admite varios métodos de seguimiento. Al conectarse, obtiene los parámetros que ofrece cada aplicación para que puedas asignarlos por separado a los ejes horizontal, vertical y de profundidad.

## Fuentes compatibles

| Fuente | Conexión | Eje horizontal asignado al principio |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP (puerto de escucha predeterminado 39539) | `Head.RotZ` |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

En la primera conexión solo se asigna el eje horizontal; vertical y profundidad quedan en `—` (sin usar). Según lo que ofrezca la fuente, puedes asignar otros parámetros a la vertical y a la profundidad.

## Conectar

1. Abre primero la aplicación de seguimiento y su modelo.
2. En la pestaña **Posición**, pon **Modo de control** en **Automático (seguimiento)**.
3. Elige la aplicación en **Fuente de seguimiento** y pulsa **Conectar**.
4. Cuando el estado cambie a **Recibiendo**, llegan datos. El punto de la voz en los paneles pasa de rojo a azul y ya no se puede arrastrar (los círculos numerados de los audios sí se pueden mover).

![Modo de control y fuente de seguimiento](/img/screenshots/es/tracking-es.png)

_Elige la fuente en Automático (seguimiento) y pulsa Conectar._

## Permite la conexión en esa aplicación

- **VTube Studio**: activa la API en la versión de PC y aprueba la solicitud del plugin que aparece en la primera conexión.
- **VMC**: activa el envío VMC en la aplicación emisora. El puerto de escucha predeterminado es UDP 39539; puedes cambiarlo en **Detalles de conexión**.
- **nizima LIVE**: aprueba la conexión del plugin la primera vez.

## Elige los parámetros

Al conectarte aparece **Parámetros a leer**, donde eliges un parámetro para cada eje: horizontal, vertical y profundidad.

- Al principio se recomienda solo el horizontal. Un eje en `—` no se mueve.
- Como guía, usa un parámetro Angle (por ejemplo, `ParamAngleX`) para seguir los giros de cabeza del modelo y uno Position (por ejemplo, `FacePositionX`) para seguir el movimiento en el encuadre.
- Para mover la voz con el ratón en lugar de la cámara, VTube Studio ofrece `MousePositionX` / `MousePositionY`.
- La vertical y la profundidad tienden a recoger temblores de postura y de distancia a la cámara; añádelas solo si la entrada es estable.

Después de cambiar un parámetro, vuelve a [calibrar](./calibration).

## Primeros ajustes con VMC

El parámetro VMC más útil depende de la aplicación emisora y del modelo. El eje horizontal empieza con `Head.RotZ` (inclinación de la cabeza). Si se mueve muy poco o nada, prueba `Hips.PosX`.

En ambos casos, asigna solo el eje horizontal al principio y deja vertical y profundidad en `—`.

### Ejemplo: iFacialMocap con Warudo

| Elemento | Ajuste |
| --- | --- |
| Método de captura / cámara | iFacialMocap |
| Conexión con VOrbit ASMR | Envío desde Warudo por el protocolo VMC |
| Horizontal | `Head.RotZ` |
| Vertical | `—` |
| Profundidad | `—` |

Activa el envío VMC en Warudo; luego, en VOrbit ASMR, elige **VMC Protocol** como fuente de seguimiento y conéctate.

## Que otra aplicación también reciba VMC {#vmc-forwarding}

Cuando VOrbit ASMR recibe datos VMC en un puerto, otras aplicaciones ya no pueden recibirlos en ese puerto. Si otra aplicación del mismo PC también los necesita, activa **Reenviar los datos recibidos al puerto** en **Detalles de conexión** y usa el puerto en el que escucha esa aplicación.
