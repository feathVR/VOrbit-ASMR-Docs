---
sidebar_position: 1
---

# Audio, atajos de teclado y vista compacta

## Audio (reproducir archivos)

La pestaña **Audio** reproduce hasta cuatro archivos de audio de forma independiente, para que puedas colocar efectos y ambientes en el mismo espacio que tu voz.

![La pantalla Audio](/img/screenshots/es/playback-es.png)

_Pantalla actual de la aplicación. Las funciones dependen de la distribución._

- Pulsa **Elegir archivo** en un espacio o arrastra y suelta un archivo de audio sobre él.
- Formatos admitidos: WAV / MP3 / M4A / AAC / FLAC / WMA (con los códecs de Windows), hasta 10 minutos por archivo.
- Los archivos **mono** se pueden posicionar. Aparecen como círculos numerados en los paneles de Posición y se pueden arrastrar en cualquier momento.
- Los archivos **estéreo** se reproducen con su imagen estéreo original. No se pueden posicionar.
- Para reproducir, el procesamiento de audio debe estar en marcha: pulsa **Iniciar** arriba.
- La reproducción se mezcla en la misma salida que el micrófono y, durante una llamada de colab, también se envía a tu compañero. El volumen se ajusta en cada espacio.
- Haz clic o arrastra sobre la forma de onda para elegir la posición de reproducción.

## Reproducción, pausa y volumen {#playback-controls}

Durante la reproducción el botón pasa a **Pausa**. La pausa conserva la posición y permite continuar desde ahí. **Detener** vuelve al principio. Haz clic en la onda o arrastra y suelta para saltar durante la reproducción o elegir el siguiente inicio si está detenida o pausada. En estéreo, L está arriba y R abajo. La altura se escala al pico del archivo y no indica el volumen de salida.

El volumen se ajusta en dB (−60 a +20 dB; 0 dB es el nivel original y −60 dB es silencio). **Sala** decide si cada fuente recibe reverberación. Las fuentes mono también se arrastran en los paneles frontal y superior de la página de audio. Estos no muestran tu voz y guardan su escala aparte de Posición.

## Preajustes y conjuntos de fuentes {#source-sets}

Elige sonidos incluidos en **Preajustes**. Los volúmenes 1–3 de “VR向けASMRループ音源集” de Mosco son para reproducir dentro de la aplicación y no se pueden extraer para otros usos. Acerca de muestra el autor y el enlace a la colección. Las versiones sin el paquete no muestran el menú.

**Conjuntos de fuentes** guarda las fuentes 1–4 juntas: sonido, volumen, bucle, posición y reverberación.

1. Detén todas las fuentes y elige un conjunto incluido o registrado con **Cargar conjunto**. **Cargar desde archivo…** abre archivos .vorbitset.
2. Tras cambiar la combinación, usa **Guardar conjunto**. También queda registrada para Stream Deck.
3. **Registrar conjunto existente…** registra un conjunto existente. **Quitar registro** solo elimina el registro, no los archivos originales.

No puedes cargar conjuntos mientras hay fuentes reproduciéndose. Los audios no se copian al conjunto; moverlos o borrarlos puede dejarlo inaccesible.

## Atajos de teclado

La pestaña **Atajos de teclado** asigna teclas a las acciones de la aplicación. Funcionan aunque otra aplicación esté activa.

![La pantalla Atajos de teclado](/img/screenshots/es/hotkeys-es.png)

_Pantalla actual de la aplicación. Las funciones dependen de la distribución._

1. Marca **Activar atajos**.
2. Haz clic en el cuadro de tecla a la derecha de la fila de la acción.
3. Pulsa la tecla que quieras y suéltala (se admiten combinaciones con Ctrl, Alt y Shift).

Pulsa Esc para cancelar y × para quitar una asignación. No se pueden usar teclas reservadas como la tecla de Windows, Esc o F12. Si una tecla no se puede registrar porque la usa otra aplicación, elige otra y pulsa **Comprobar conflictos de nuevo**.

## Silenciar todo {#master-mute}

El botón de altavoz superior silencia voz, fuentes, reverberación, participantes y lo enviado a ellos. Se vuelve rojo y el título indica silencio. Pulsa otra vez para recuperar el audio. Los archivos siguen avanzando sin sonido. Es independiente de silenciar solo tu micrófono en la llamada. Al iniciar se desactiva.

Para toser, asigna silencio mientras mantienes pulsado a un atajo o Stream Deck. También puedes asignar acciones de tapar oídos. Un atajo normal no se repite al mantenerlo. Durante la asignación se pausan los atajos; cancelar o encontrar un conflicto conserva la asignación anterior.

## Stream Deck y control externo {#stream-deck}

Instala el plugin incluido y coloca acciones en las teclas: silencio, tapar oídos, reproducción, volumen y cargar conjuntos. Se conecta automáticamente con la aplicación abierta. El icono rojo indica desconexión; las acciones pulsadas sin conexión no se ejecutan después.

Los diales de Stream Deck + controlan volumen de fuentes/salida y cobertura de oídos. La Infobar de Neo muestra el estado. Se incluye un perfil inicial para XL. No se cargan conjuntos durante la reproducción.

Las herramientas propias pueden usar la API WebSocket local en el mismo PC y usuario de Windows. La guía offline incluida explica la conexión y ofrece control.ps1 para PowerShell 7. No acepta conexiones de navegador.

## Vista compacta y Siempre en primer plano

**Vista compacta**, arriba, cambia a una ventana pequeña que ocupa poco espacio durante el stream. Desde ella también puedes iniciar, silenciar, reproducir audios y gestionar llamadas de colab. **Volver a la vista completa** regresa a la ventana normal.

Marca **Siempre en primer plano** para mantener la ventana de VOrbit ASMR delante de las demás.
