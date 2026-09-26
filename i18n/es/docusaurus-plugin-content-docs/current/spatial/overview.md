---
sidebar_position: 1
---

# Cómo se mueve la voz

VOrbit ASMR puede mover tu voz alrededor de la cabeza de quien escucha o sobre un plano. Ambas opciones se configuran en la pestaña **Posición**.

<img src="/VOrbit-ASMR-Docs/img/spatial-mapping-es.svg" alt="Vista superior que compara una voz que recorre un arco alrededor de la cabeza con una voz que se mueve en línea recta" width="1200" height="650" />

_Diagrama conceptual con movimiento solo horizontal. [Abre la imagen para ampliarla](/img/spatial-mapping-es.svg)._

## Órbita alrededor de la cabeza (recomendado)

Es la opción predeterminada. Con **Órbita alrededor de la cabeza (recomendado)** marcada, la voz se mueve sobre una esfera centrada en la cabeza en lugar de sobre un plano.

- Los valores horizontal y vertical se convierten en ángulos alrededor de quien escucha. Los ángulos se fijan con **Arco horizontal** y **Arco vertical** en **Rango de desplazamiento**.
- La distancia la fija **Distancia base** y no cambia al moverte hacia los lados o hacia arriba y abajo; así el volumen se mantiene estable y la voz rodea los oídos.
- Solo si asignas un eje de profundidad, la voz se acerca o se aleja de la distancia base, hasta el **Rango de profundidad**.

La estimación de profundidad de las webcams suele ser poco fiable, así que esta opción funciona bien cuando el seguimiento se encarga solo de izquierda/derecha y arriba/abajo y tú fijas la distancia con Distancia base.

## Movimiento en plano

Desmarca **Órbita alrededor de la cabeza (recomendado)** para convertir los valores horizontal y vertical directamente en posiciones en metros. La profundidad también mueve la voz hacia delante y hacia atrás dentro de su rango. Úsalo cuando quieras mover la posición de la voz directamente, sin que rodee la cabeza.

## Orientación de la cabeza artificial

**Orientación de la cabeza artificial** indica hacia dónde mira quien escucha.

- **Frente**: quien escucha y el avatar se miran de frente.
- **Espalda**: la voz llega desde atrás.

**Distancia base** es la distancia a la voz en tu postura habitual.

## Cómo leer los paneles de posición

Los dos paneles de la pestaña Posición muestran la posición horizontal y vertical (izquierda) y la horizontal y la profundidad (derecha). El punto rojo es tu voz (azul durante el seguimiento) y los círculos numerados son audios mono cargados en la pestaña **Audio**.

Con **Rango de vista** en **Auto**, la escala del panel se ajusta a lo lejos que puede llegar la voz con tus ejes y ajustes actuales. En **Manual** eliges tú la distancia del centro al borde.

## Mostrar la cabeza artificial en el stream {#dummy-head-overlay}

Activa **Mostrar la cabeza artificial en el stream** para colocar una imagen del micrófono de cabeza artificial dentro de la aplicación conectada (VTube Studio / nizima LIVE).

- La imagen cambia automáticamente al alternar entre frente y espalda.
- Arrástrala en esa aplicación para ajustar su posición y tamaño.
- Si en nizima LIVE se queda pegada a tu avatar, desmarca «Seguir al modelo» en la ventana de operaciones del elemento y se quedará en su sitio.
- Las imágenes están en la carpeta que abre **Abrir carpeta de imágenes**; puedes reemplazarlas por tus propios dibujos con los mismos nombres de archivo.
