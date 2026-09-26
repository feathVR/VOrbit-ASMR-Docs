---
sidebar_position: 1
---

# Fontes de rastreamento

O VOrbit ASMR aceita vários métodos de rastreamento. Ao conectar, ele obtém os parâmetros oferecidos por cada aplicativo para que você possa atribuí-los separadamente aos eixos horizontal, vertical e de profundidade.

## Fontes compatíveis

| Fonte | Conexão | Eixo horizontal atribuído no início |
| --- | --- | --- |
| VTube Studio | PC API WebSocket | `FacePositionX` |
| VMC | OSC/UDP (porta de escuta padrão 39539) | `Head.RotZ` |
| nizima LIVE | Plugin WebSocket | `Cubism.ParamAngleX` |

Na primeira conexão, só o eixo horizontal é atribuído; vertical e profundidade ficam em `—` (sem uso). Dependendo do que a fonte oferece, você pode atribuir outros parâmetros à vertical e à profundidade.

## Conectar

1. Abra primeiro o aplicativo de rastreamento e o modelo.
2. Na aba **Posição**, coloque **Modo de controle** em **Automático (rastreamento)**.
3. Escolha o aplicativo em **Fonte de rastreamento** e pressione **Conectar**.
4. Quando o status mudar para **Recebendo**, os dados estão chegando. O ponto da voz nos painéis passa de vermelho para azul e não pode mais ser arrastado (os círculos numerados dos áudios continuam podendo ser movidos).

![Modo de controle e fonte de rastreamento](/img/screenshots/pt-BR/tracking-pt-BR.png)

_Escolha a fonte em Automático (rastreamento) e pressione Conectar._

## Permita a conexão no aplicativo

- **VTube Studio**: ative a API na versão para PC e aprove a solicitação do plugin exibida na primeira conexão.
- **VMC**: ative o envio VMC no aplicativo emissor. A porta de escuta padrão é UDP 39539; você pode mudá-la em **Detalhes da conexão**.
- **nizima LIVE**: aprove a conexão do plugin na primeira vez.

## Escolha os parâmetros

Depois de conectar, aparece **Parâmetros a ler**, onde você escolhe um parâmetro para cada eixo: horizontal, vertical e profundidade.

- No começo, recomenda-se só o horizontal. Um eixo em `—` não se move.
- Como referência, use um parâmetro Angle (por exemplo, `ParamAngleX`) para acompanhar os giros de cabeça do modelo e um Position (por exemplo, `FacePositionX`) para acompanhar o movimento no enquadramento.
- Para mover a voz com o mouse em vez da câmera, o VTube Studio oferece `MousePositionX` / `MousePositionY`.
- Vertical e profundidade costumam captar tremores de postura e de distância da câmera; adicione-os só quando a entrada for estável.

Depois de trocar um parâmetro, [calibre](./calibration) de novo.

## Primeiras configurações com VMC

O parâmetro VMC mais útil depende do aplicativo emissor e do modelo. O eixo horizontal começa com `Head.RotZ` (inclinação da cabeça). Se ele se mover pouco ou nada, experimente `Hips.PosX`.

Em qualquer caso, atribua só o eixo horizontal no começo e deixe vertical e profundidade em `—`.

### Exemplo: iFacialMocap com Warudo

| Item | Configuração |
| --- | --- |
| Método de captura / câmera | iFacialMocap |
| Conexão com o VOrbit ASMR | Envio pelo Warudo via protocolo VMC |
| Horizontal | `Head.RotZ` |
| Vertical | `—` |
| Profundidade | `—` |

Ative o envio VMC no Warudo; depois, no VOrbit ASMR, escolha **VMC Protocol** como fonte de rastreamento e conecte.

## Deixar outro aplicativo receber VMC também {#vmc-forwarding}

Quando o VOrbit ASMR recebe dados VMC em uma porta, outros aplicativos não conseguem mais recebê-los nessa porta. Se outro aplicativo no mesmo PC também precisar dos dados, ative **Encaminhar os dados recebidos para a porta** em **Detalhes da conexão** e use a porta em que esse aplicativo escuta.
