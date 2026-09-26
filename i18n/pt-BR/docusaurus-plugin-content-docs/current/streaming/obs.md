---
sidebar_position: 1
---

# Envie o áudio para o OBS

Leve a voz processada para o OBS por **uma única rota**. As mesmas orientações aparecem em **Como levar isso para a sua live**, na aba Dispositivos.

![Como enviar o áudio para o OBS](/img/screenshots/pt-BR/help-streaming-pt-BR.png)

_“Enviar o áudio para o OBS ou para uma live” na aba Ajuda. Use o método A ou o B, não os dois._

## Método A: Captura de áudio de aplicativo (recomendado)

Adicione **Captura de áudio de aplicativo** no OBS e selecione o VOrbit ASMR. Só o áudio do VOrbit ASMR é capturado, e nenhum software extra é necessário.

## Método B: Captura de saída de áudio

Escolha um fone ou outra saída no VOrbit ASMR; depois adicione **Captura de saída de áudio** no OBS e selecione o mesmo dispositivo. Jogos, notificações e tudo o que for enviado para esse dispositivo também são capturados.

## Confira com uma gravação curta

Antes da live, grave uns 20 segundos movendo a voz para a esquerda e a direita e ouça nos fones. Confira se a posição muda e se o áudio não está duplicado.

:::warning O que causa áudio duplicado
Capturar o mesmo sinal pelo Áudio da área de trabalho e por uma fonte separada, ou capturar também no OBS o microfone sem processamento, duplica o áudio. Observe os medidores do OBS e garanta que o sinal processado entre por uma única rota.
:::

## Se você usa uma DAW

Com a rota de áudio em **DAW (ponte VST)**, a voz processada sai da DAW. Configure uma rota para o OBS capturar a saída processada da DAW. Veja [Use a ponte VST](../audio/vst-bridge).

## Mostre a imagem da cabeça artificial (opcional)

Você também pode mostrar na live uma imagem do microfone de cabeça artificial. Ative **Mostrar a cabeça artificial na live** na aba Posição e ajuste tamanho e posição no VTube Studio ou no nizima LIVE. Veja [Como a voz se move](../spatial/overview#dummy-head-overlay).
