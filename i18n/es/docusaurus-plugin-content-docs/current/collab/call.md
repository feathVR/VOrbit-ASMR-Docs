---
sidebar_position: 1
---

# Llamadas de colab

Envía ASMR estéreo a personas a distancia. Los pasos dependen del modo y la versión.

![La pantalla Colab](/img/screenshots/es/collab-es.png)

_Pantalla actual de la aplicación. Las funciones dependen de la distribución._

## Modos de llamada y versiones {#call-modes}

El código actual incluye **Baja latencia** y **Llamada estable**. Ambos usan Opus estéreo a 48 kHz. Están en desarrollo: falta completar la integración en la distribución pública y verificar llamadas reales entre PC. Su disponibilidad depende de la versión recibida.

| Modo | Requisitos y comportamiento |
| --- | --- |
| **Baja latencia** | Requiere Steam abierto, los componentes de integración y propiedad del producto. Hasta 4 personas, incluyéndote. La sala termina si sale el anfitrión. |
| **Llamada estable** | Llamada estéreo mediante un servidor configurado por el distribuidor. El límite depende del servidor. Actualmente se almacenan unos 200 ms antes de reproducir, aumentando la demora. No funciona sin servidor configurado. |

### Conectar con los nuevos modos

1. Todos eligen entrada y salida e inician el audio. Con VST Bridge, conecta primero el DAW.
2. Elige el mismo modo. No se cambia mientras se crea la invitación, se conecta o se está en llamada.
3. El anfitrión crea el código y lo comparte solo con participantes. Ellos lo pegan y conectan. No hace falta devolver código de respuesta.
4. Usa **Copiar invitación** para más participantes. Desconecta para salir. Aún no hay recuperación automática de conexiones interrumpidas.

La versión gratuita solo puede entrar en salas compatibles de llamada estable; no crea salas ni emite códigos. No puede entrar en la sala de baja latencia del producto. La distribución gratuita y sus permisos también están pendientes antes de la publicación. Los códigos de los modos no son compatibles. “—” en demora o pérdidas significa sin medir, no cero.

## Llamadas individuales anteriores {#legacy-call}

Los pasos siguientes corresponden a versiones que intercambian invitación y respuesta; difieren de los nuevos modos.

![Cómo se conecta una llamada de colab](/img/screenshots/es/help-collab-es.png)

_Intercambio anterior de invitación y respuesta. Los nuevos modos se explican arriba._

1. **Los dos pulsan Iniciar**
   Ambos eligen primero su micrófono y su salida y pulsan **Iniciar** arriba. Se recomiendan auriculares.
2. **Envía un código de invitación (quien invita)**
   En la pestaña **Colab**, pulsa **Crear un código de invitación** y envía el código copiado solo a tu compañero, por ejemplo por mensaje directo de Discord.
3. **Pega el código y devuelve la respuesta (quien recibe la invitación)**
   Pega el código recibido en **Pega el código que te envió tu compañero** y pulsa **Conectar**. El código de respuesta se copia automáticamente; envíaselo a quien invitó.
4. **Pega el código de respuesta (quien invita)**
   Pega el código de respuesta y pulsa **Conectar**. Cuando los dos vean **En llamada**, está listo.

:::warning El código de invitación es la llave de la llamada
Cualquiera que tenga el código puede entrar en la llamada. Nunca lo publiques en un canal público. Si un intento falla, crea un código nuevo en lugar de reutilizarlo.
:::

## Durante la llamada

- Ajusta el **Volumen del compañero** y silencia
- Revisa el **Retardo** y la **Pérdida de paquetes**
- Termina la llamada con **Desconectar**

Los audios que reproduzcas en la pestaña **Audio** también se envían a tu compañero durante la llamada.

## Usar un micrófono binaural real

Si ya tienes un micrófono binaural o un sistema de grabación estéreo, marca **Usar un micrófono binaural real (enviarlo tal cual, sin espacialización)**. Sus canales izquierdo y derecho se envían a tu compañero sin cambios. Déjalo sin marcar con un micrófono normal.

Este ajuste no se puede cambiar mientras está en marcha.

## Si no se conecta {#cannot-connect}

Para baja latencia revisa Steam, propiedad, componentes, invitación y plazas. Si la llamada estable indica servidor sin configurar, necesitas una distribución compatible. Verifica el modo del código y cancela o desconecta antes de reintentar. Solo para llamadas directas anteriores, prueba una conexión fija o IPv6 si falla.
