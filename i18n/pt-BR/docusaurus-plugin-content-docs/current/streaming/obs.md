---
sidebar_position: 1
---

# Envie o áudio para o OBS

Leve a voz processada para o OBS por **uma única rota**. As mesmas orientações aparecem em **Como levar isso para a sua live**, na aba Dispositivos.

![Como enviar o áudio para o OBS](/img/screenshots/pt-BR/help-streaming-pt-BR.png)

_“Enviar o áudio para o OBS ou para uma live” na aba Ajuda. Normalmente, use o método A ou B; se não quiser ouvir a própria voz ao vivo, siga as etapas do VB-CABLE abaixo. Não combine métodos de captura._

## Método A: Captura de áudio de aplicativo (recomendado)

Adicione **Captura de áudio de aplicativo** no OBS e selecione o VOrbit ASMR. Só o áudio do VOrbit ASMR é capturado, e nenhum software extra é necessário.

## Método B: Captura de saída de áudio

Escolha um fone ou outra saída no VOrbit ASMR; depois adicione **Captura de saída de áudio** no OBS e selecione o mesmo dispositivo. Jogos, notificações e tudo o que for enviado para esse dispositivo também são capturados.

## Envie sua voz ao OBS sem ouvi-la nos fones (VB-CABLE)

Se o OBS grava sua voz, mas ouvi-la continuamente nos fones é desconfortável, separe a saída com o [VB-Audio Virtual Cable (VB-CABLE)](https://vb-audio.com/Cable/). Estas etapas são para a rota de áudio **Normal**. Você pode ouvir a voz na primeira verificação, mas não precisa monitorá-la durante a live.

1. Instale o VB-CABLE pelo site oficial. O Windows mostrará **CABLE Input** como dispositivo de reprodução e **CABLE Output** como dispositivo de gravação.
2. Pressione **Parar** no VOrbit ASMR. Em **Dispositivos**, mude a saída para **CABLE Input (VB-Audio Virtual Cable)** e pressione **Iniciar**. Mantenha o mesmo microfone. Deixe os fones como saída padrão do Windows; não defina CABLE Input como saída geral do sistema.
3. Adicione uma única fonte **Captura de entrada de áudio** no OBS e selecione **CABLE Output (VB-Audio Virtual Cable)**. Não capture o VOrbit ASMR também pelo método A ou B.
4. Desative o monitoramento de áudio dessa fonte no OBS e mantenha desativada a opção **Escutar este dispositivo** do Windows para CABLE Output. Qualquer uma delas pode devolver sua voz aos fones.
5. Confira se o medidor do OBS reage e faça uma gravação curta. A gravação deve conter o movimento processado entre esquerda e direita, sem que você ouça a própria voz ao vivo nos fones.

**CABLE Input recebe o som do VOrbit ASMR; CABLE Output o entrega ao OBS.** Desativar apenas o monitoramento do OBS não interrompe a saída direta do VOrbit ASMR para os fones. Evite também a captura duplicada pelo Áudio do desktop ou pelo microfone sem processamento.

## Confira com uma gravação curta

Antes da live, grave uns 20 segundos movendo a voz para a esquerda e a direita e ouça nos fones. Confira se a posição muda e se o áudio não está duplicado.

:::warning O que causa áudio duplicado
Capturar o mesmo sinal pelo Áudio da área de trabalho e por uma fonte separada, ou capturar também no OBS o microfone sem processamento, duplica o áudio. Observe os medidores do OBS e garanta que o sinal processado entre por uma única rota.
:::

## Se você usa uma DAW

Com a rota de áudio em **DAW (ponte VST)**, a voz processada sai da DAW. Configure uma rota para o OBS capturar a saída processada da DAW. Veja [Use a ponte VST](../audio/vst-bridge).

## Mostre a imagem da cabeça artificial (opcional)

Você também pode mostrar na live uma imagem do microfone de cabeça artificial. Ative **Mostrar a cabeça artificial na live** na aba Posição e ajuste tamanho e posição no VTube Studio ou no nizima LIVE. Veja [Como a voz se move](../spatial/overview#dummy-head-overlay).
