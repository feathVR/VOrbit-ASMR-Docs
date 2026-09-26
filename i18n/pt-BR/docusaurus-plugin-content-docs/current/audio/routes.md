---
sidebar_position: 1
---

# Escolha uma rota de áudio

O VOrbit ASMR permite escolher por onde o áudio passa. Nenhuma rota soa melhor que a outra: escolha a que combina com o seu jeito de fazer lives e gravar. A troca é feita em **Rota de áudio**, na aba **Dispositivos**.

| Rota de áudio | Ideal para | Onde entrada e saída são configuradas |
| --- | --- | --- |
| **Normal** | Usar o VOrbit ASMR sozinho, rapidamente | A tela Dispositivos do VOrbit ASMR |
| **DAW (ponte VST)** | Trabalhar dentro de faixas da DAW e de uma cadeia de efeitos existente | Sua DAW / host VST |

![Configurações da tela Dispositivos](/img/screenshots/pt-BR/device-card-pt-BR.png)

_A tela Dispositivos com Normal: rota de áudio, redução de ruído, dispositivos de entrada e saída, modo anticortes e como levar isso para a sua live._

## Com Normal

Escolha o microfone em **Dispositivo de entrada (microfone)** e os fones em **Dispositivo de saída**, e pressione **Iniciar** no topo. Para um primeiro teste, pode deixar os dois em **Padrão do sistema**. Pressione **Atualizar** depois de reconectar um dispositivo.

### Iguale as taxas de amostragem

A tela mostra as taxas de amostragem do microfone e da saída. Coloque as duas no mesmo valor suportado (44100 / 48000 / 88200 / 96000 Hz) nas configurações de som do Windows ou no painel da sua interface de áudio. Depois, pressione **Parar** e **Iniciar** de novo.

### Modo anticortes

Se estalos ou cortes continuarem, ative o **Modo anticortes**. Ele faz o microfone e a saída funcionarem separadamente, com uma folga entre eles, o que adiciona cerca de 30 ms de latência. Também deixa tudo estável quando o microfone e a saída são dispositivos diferentes.

## Com DAW (ponte VST)

O VOrbit ASMR não abre os dispositivos de áudio sozinho. Ele recebe o áudio do **VOrbit Bridge**, inserido na sua DAW, e devolve o áudio espacializado para o mesmo lugar. Dispositivos, taxa de amostragem e buffer são configurados na DAW.

Se você usa uma interface de áudio, esta rota pode ser mais estável. Continue em [Use a ponte VST](./vst-bridge).

:::note
Enquanto estiver em execução, não é possível mudar a rota de áudio, os dispositivos de entrada e saída, a redução de ruído nem o modo anticortes. Pressione **Parar** primeiro.
:::
