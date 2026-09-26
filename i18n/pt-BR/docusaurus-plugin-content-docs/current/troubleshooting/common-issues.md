---
sidebar_position: 1
---

# Problemas comuns

As mesmas verificações estão no aplicativo, em **Se algo não estiver funcionando** na aba Ajuda.

![A tela Ajuda](/img/screenshots/pt-BR/help-pt-BR.png)

_A aba Ajuda: reiniciar o tutorial, abrir este guia e seguir instruções por tarefa. Use fones de ouvido para conferir o áudio binaural._

## Estalos ou cortes

1. Na tela **Dispositivos**, confira as taxas de amostragem do microfone e da saída.
2. Coloque as duas na mesma taxa suportada (44100 / 48000 / 88200 / 96000 Hz) nas configurações de som do Windows ou no painel da sua interface de áudio.
3. Pressione **Parar** e depois **Iniciar** de novo.
4. Se continuar, ative o **Modo anticortes** (adiciona cerca de 30 ms de latência).

Se você usa uma interface de áudio, a rota [DAW (ponte VST)](../audio/vst-bridge) pode ser mais estável.

## Você não ouve a própria voz ou não há som

- Confira se o botão no topo diz **Parar** (o áudio está em execução).
- Confira o medidor de entrada e depois os de saída. Se só a entrada se mexe, confira o dispositivo de saída e o volume de saída na aba Som.
- Confira se os dispositivos de entrada e saída são os que você quer. Pressione **Atualizar** depois de reconectar um dispositivo.
- Confira se **Silenciar** não está ativado no topo, e confira também o mudo e o volume do Windows.
- Com a rota **DAW (ponte VST)**, confira a entrada, a saída e o monitoramento na DAW.

## O rastreamento não conecta ou o ponto não fica azul

- Confira se o modo de controle da aba Posição está em **Automático (rastreamento)**.
- Confira se a fonte de rastreamento mostra **Recebendo**.
- Confira se o eixo que você usa tem um parâmetro diferente de `—`.
- Confira se o eixo atribuído mostra **Calibrado**.

## A voz se move, mas a posição parece errada

- [Calibre](../tracking/calibration) de novo na postura habitual do seu avatar.
- Confira **Inverter** e **Suavização** em **Alcance do deslocamento**.
- Confira se **Órbita ao redor da cabeça (recomendado)** está ligada ou desligada como você quer.
- Confira **Arco horizontal**, **Arco vertical** e **Faixa de profundidade**.

## Outro aplicativo no mesmo PC deixou de receber VMC

Ative **Encaminhar os dados recebidos para a porta** em **Detalhes da conexão**. Veja [Fontes de rastreamento](../tracking/overview#vmc-forwarding).

## A collab não conecta

Confira se os dois pressionaram Iniciar e recomece com um código de convite novo. Experimente também outra conexão fixa ou com IPv6. Veja [Chamadas de collab](../collab/call#cannot-connect).

## Áudio duplicado ou com eco

- Confira se o OBS não está capturando o mesmo sinal duas vezes ([Envie o áudio para o OBS](../streaming/obs)).
- Confira se o som das caixas não está voltando para o microfone. Fones de ouvido são recomendados.

## Se o problema continuar

Use **Exportar ZIP de diagnóstico** na aba Sobre, confira o conteúdo e anexe ao seu relato de bug. O ZIP não contém áudio, códigos de convite nem credenciais.
