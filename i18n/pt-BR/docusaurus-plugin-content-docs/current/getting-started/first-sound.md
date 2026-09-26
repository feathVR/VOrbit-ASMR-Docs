---
sidebar_position: 1
---

# Seu primeiro som

Esta página leva você da instalação até ouvir sua voz se mover pelo espaço. No começo, não use o rastreamento: mova a voz com a mão. Assim fica muito mais fácil ver onde algo deu errado.

## Início rápido em uma imagem

<img src="/VOrbit-ASMR-Docs/img/quick-start-pt-BR.svg" alt="Início rápido do VOrbit ASMR em cinco passos: primeiro som e rastreamento automático opcional" width="1200" height="1600" />

_Os passos 1–3 conferem o som e a posição. Siga para os passos 4–5 só se quiser rastreamento automático. [Abra a imagem para ampliar](/img/quick-start-pt-BR.svg)._

## O que você precisa

- Um microfone e fones de ouvido (headphone ou fone intra-auricular)
- Para o movimento automático, um aplicativo de avatar ou de rastreamento compatível (VTube Studio, nizima LIVE ou um emissor VMC)

:::warning
Use fones de ouvido em vez de caixas de som para conferir o áudio espacial. Caixas de som não reproduzem bem o posicionamento binaural.
:::

## Siga o tutorial

Na primeira vez que você abre o aplicativo, a tela Dispositivos é aberta e o guia **Primeiros passos** aparece no topo da janela. Ele tem cinco etapas:

![O guia Primeiros passos](/img/screenshots/pt-BR/tutorial-pt-BR.png)

_O guia Primeiros passos mostrando a primeira etapa, “Escolha o microfone e a saída”._

1. Escolha o microfone e a saída
2. Ouça a mudança de posição
3. Conecte o rastreamento
4. Registre o centro e sua amplitude de movimento
5. Envie o áudio para a sua live

**Ir para esta etapa**, em cada etapa, abre a tela correspondente e destaca onde olhar. Quando você conclui uma etapa, ela recebe uma marca, mas o guia nunca avança sozinho. Pressione **Feito — próximo** quando estiver pronto.

Para parar no meio, pressione **Mais tarde (retomar em Ajuda)**. Você pode recomeçar do início com **Iniciar tutorial** na aba Ajuda.

## Passos

### 1. Escolha o microfone e a saída

Abra a aba **Dispositivos** e confira se **Rota de áudio** está em **Normal**. Escolha seu microfone em **Dispositivo de entrada (microfone)** e o dispositivo em que seus fones estão conectados em **Dispositivo de saída**. Se não tiver certeza, deixe em **Padrão do sistema**.

Para usar o VOrbit ASMR dentro de uma DAW, escolha **DAW (ponte VST)** e siga a [configuração da ponte VST](../audio/vst-bridge).

![A tela Dispositivos](/img/screenshots/pt-BR/device-pt-BR.png)

_A tela Dispositivos. Com Normal, o microfone e a saída são escolhidos aqui._

### 2. Pressione Iniciar e faça um som

Pressione **Iniciar** no topo e segure um “aaa” no microfone. Se você se ouvir nos fones e os medidores de entrada e saída no topo se moverem, está tudo certo.

### 3. Arraste o ponto vermelho

Na aba **Posição**, coloque **Modo de controle** em **Manual**. Sem parar o som, arraste o ponto vermelho (sua voz) de um lado para o outro em um painel. Se sua voz se mover nos fones, a experiência básica do VOrbit ASMR está funcionando.

![A tela Posição no modo Manual](/img/screenshots/pt-BR/position-manual-pt-BR.png)

_O painel da esquerda mostra a posição horizontal e vertical; o da direita, a horizontal e a profundidade. O ponto vermelho é sua voz._

### 4. Mova a voz automaticamente (opcional)

Para que o avatar mova a voz, [conecte o rastreamento](../tracking/overview) e [calibre o centro e a amplitude](../tracking/calibration).

### 5. Envie o áudio para a sua live

Se você faz lives, veja [Envie o áudio para o OBS](../streaming/obs).

:::tip A redução de ruído é opcional
Ative-a só se um ruído de fundo constante, como a ventoinha do PC ou o ar-condicionado, estiver incomodando. Ela vem desligada e adiciona cerca de 10 ms de latência. Veja [Redução de ruído](../audio/noise-suppression).
:::

## Se não funcionar

Confira os cortes, os dispositivos de áudio e a conexão do rastreamento em [Problemas comuns](../troubleshooting/common-issues).
