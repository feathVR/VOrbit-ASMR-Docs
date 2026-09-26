---
sidebar_position: 1
---

# Como a voz se move

O VOrbit ASMR pode mover sua voz ao redor da cabeça de quem ouve ou sobre um plano. As duas opções são configuradas na aba **Posição**.

<img src="/VOrbit-ASMR-Docs/img/spatial-mapping-pt-BR.svg" alt="Vista superior comparando uma voz que percorre um arco ao redor da cabeça com uma voz que se move em linha reta" width="1200" height="650" />

_Diagrama conceitual com movimento apenas horizontal. [Abra a imagem para ampliar](/img/spatial-mapping-pt-BR.svg)._

## Órbita ao redor da cabeça (recomendado)

É a opção padrão. Com **Órbita ao redor da cabeça (recomendado)** marcada, a voz se move sobre uma esfera centrada na cabeça, e não sobre um plano.

- Os valores horizontal e vertical viram ângulos ao redor de quem ouve. Os ângulos vêm de **Arco horizontal** e **Arco vertical** em **Alcance do deslocamento**.
- A distância é definida por **Distância base** e não muda quando você se move para os lados ou para cima e para baixo; assim o volume fica estável e a voz contorna os ouvidos.
- Só quando um eixo de profundidade é atribuído a voz se aproxima ou se afasta da distância base, até a **Faixa de profundidade**.

A estimativa de profundidade das webcams costuma ser pouco confiável, então esta opção funciona bem quando o rastreamento cuida só de esquerda/direita e cima/baixo e você define a distância com Distância base.

## Movimento no plano

Desmarque **Órbita ao redor da cabeça (recomendado)** para converter os valores horizontal e vertical diretamente em posições em metros. A profundidade também move a voz para a frente e para trás dentro da faixa. Use quando quiser mover a posição da voz diretamente, sem contornar a cabeça.

## Direção da cabeça artificial

**Direção da cabeça artificial** define para onde quem ouve está virado.

- **Frente**: quem ouve e o avatar ficam frente a frente.
- **Costas**: a voz vem de trás.

**Distância base** é a distância até a voz na sua postura habitual.

## Como ler os painéis de posição

Os dois painéis da aba Posição mostram a posição horizontal e vertical (esquerda) e a horizontal e a profundidade (direita). O ponto vermelho é sua voz (azul durante o rastreamento) e os círculos numerados são áudios mono carregados na aba **Áudios**.

Com **Área de visualização** em **Auto**, a escala do painel acompanha até onde a voz realmente pode ir com seus eixos e configurações atuais. Em **Manual**, você escolhe a distância do centro até a borda.

## Mostrar a cabeça artificial na live {#dummy-head-overlay}

Ative **Mostrar a cabeça artificial na live** para colocar uma imagem do microfone de cabeça artificial dentro do aplicativo conectado (VTube Studio / nizima LIVE).

- A imagem muda automaticamente quando você alterna entre frente e costas.
- Arraste-a nesse aplicativo para ajustar posição e tamanho.
- Se no nizima LIVE ela ficar grudada no avatar, desmarque “Seguir o modelo” na janela de operação do item e ela ficará no lugar.
- As imagens ficam na pasta aberta por **Abrir pasta de imagens**; você pode trocá-las pelos seus próprios desenhos usando os mesmos nomes de arquivo.
