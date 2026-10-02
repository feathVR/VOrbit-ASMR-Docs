---
sidebar_position: 2
---

# Ajustes de sonido (HRTF y ambiente de la sala)

La pestaña **Sonido** define cómo suena la voz en sí.

![La pantalla Sonido](/img/screenshots/es/sound-es.png)

_Pantalla actual de la aplicación. Las funciones dependen de la distribución._

## HRTF

Una HRTF (función de transferencia relacionada con la cabeza) describe cómo la forma de la cabeza y de las orejas cambia un sonido. Cada persona las oye de forma un poco distinta, así que elige la que te dé la sensación de posición más clara.

| Opción | Descripción |
| --- | --- |
| **Integrada de Steam Audio** | La HRTF predeterminada incluida en Steam Audio |
| **Neumann KU100** | Medida con el micrófono de cabeza artificial KU100 |
| **KEMAR** | Medida con la cabeza artificial de investigación KEMAR |

Una buena forma de elegir es alternar entre ellas mientras mueves tu voz a izquierda, derecha, delante y detrás con auriculares, y quedarte con la que dé las posiciones más claras y naturales.

## Ambiente de la sala

Añade reflexiones de una sala a la voz. El valor predeterminado es **Sin reverberación**.

- Sin reverberación
- Vestidor
- Baño
- Cabina de grabación
- Habitación pequeña amueblada
- Cámara de reverberación
- Sala de conciertos
- Túnel

## Volumen de salida

El volumen general de todo lo que emite VOrbit ASMR.

## Espacialización

Desmárcala para enviar el micrófono tal cual, sin espacialización. También sirve para comparar el sonido con y sin espacialización.

## Limitador de seguridad {#safety-limiter}

Limita los picos repentinos de la mezcla final de voz, fuentes y participantes a −1 dBFS. Está activado por defecto, conserva la proporción izquierda/derecha y muestra la reducción cuando actúa. La anticipación añade 5 ms incluso si lo desactivas. No controla la ganancia añadida después por otros equipos o software de streaming.

## Tapar oídos {#ear-cover}

Debajo de la acústica de la sala puedes simular manos tapando los oídos del oyente. Un rumor grave y sonidos de contacto y desprendimiento acompañan el amortiguamiento de voz, fuentes 1–4, reverberación y participantes. No afecta al audio que envías a los demás.

- Los botones izquierdo, derecho y ambos tapan los oídos; vuelve a pulsar para destaparlos. Cada oído llega a su última posición no nula del deslizador (inicialmente 100%). Si ambos están tapados, el botón conjunto destapa ambos; si no, tapa los abiertos.
- **Oído izq.** y **Oído der.** ajustan la posición de la mano (0–100%). La velocidad también cambia el sonido. Un doble clic vuelve a 0%.
- **Vincular izquierda y derecha** está activado por defecto: ambos cambian la misma cantidad, manteniendo la diferencia hasta llegar a un extremo. Solo afecta a los deslizadores.
- **Tiempo al tapar** y **Tiempo al soltar** ajustan cuánto tarda el grave en aparecer y desaparecer al usar botones. **Nivel del rumor**, **Nivel del despegue** y **Usar el sonido con aceite** ajustan nivel y textura.
- Los atajos y Stream Deck permiten tapar solo mientras mantienes pulsado. Al soltar, vuelve el estado anterior.

Al iniciar, ambos oídos están abiertos. Se guardan el enlace, los ajustes y las posiciones objetivo, pero no el grado actual de cobertura.
