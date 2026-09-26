---
sidebar_position: 2
---

# Calibração

A calibração diz ao VOrbit ASMR como interpretar os valores enviados pelo seu aplicativo de rastreamento. Você registra sua postura habitual como centro e mede o quanto se move durante a live (a amplitude de movimento).

Cada eixo atribuído é calibrado separadamente, e um eixo em `—` é sempre tratado como centralizado.

## Passos

<img src="/VOrbit-ASMR-Docs/img/calibration-pt-BR.svg" alt="Diagrama em quatro passos: escolher o eixo horizontal, registrar o centro olhando para a frente, medir a amplitude movendo-se para os lados e conferir Calibrado" width="1200" height="660" />

_Acompanhe o diagrama enquanto faz. [Abra a imagem para ampliar](/img/calibration-pt-BR.svg)._

1. [Conecte o rastreamento](./overview) e atribua um parâmetro ao eixo horizontal.
2. Mantenha sua postura e posição habituais e pressione **Registrar centro**.
3. Pressione **Medir amplitude de movimento** e mova-se um pouco mais do que o normal numa live, em cada eixo atribuído.
4. Pressione **Terminar medição** e confira se o status mudou de **Não calibrado** para **Calibrado**.
5. Mova-se para a esquerda e a direita e confira se a voz percorre o alcance esperado.

![O cartão de calibração](/img/screenshots/pt-BR/calibration-pt-BR.png)

_Registrar centro, Medir amplitude de movimento e Redefinir calibração, com o status da calibração à direita._

## Ajuste o movimento

Ajuste em **Alcance do deslocamento**, na aba Posição.

- Se o movimento estiver invertido, marque **Inverter** nesse eixo.
- Se tremer, aumente a **Suavização**.
- Se a voz se deslocar demais ou de menos, ajuste **Arco horizontal**, **Arco vertical** ou **Faixa de profundidade**.

A calibração mede o movimento do seu corpo (a entrada); o alcance do deslocamento define o quanto a voz se move (a saída). Calibrar de novo não altera as configurações do alcance do deslocamento.

## Quando calibrar de novo

A calibração é salva por fonte de rastreamento e nome do parâmetro escolhido. Calibre de novo para a nova entrada quando você:

- trocar o parâmetro que usa,
- mudar a câmera de lugar, ou
- trocar de modelo ou de rastreador.

Para ajustar os números com precisão, abra **Ajuste numérico da calibração** e digite diretamente o centro e a semiamplitude de cada eixo.
