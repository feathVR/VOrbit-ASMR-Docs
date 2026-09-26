---
sidebar_position: 2
---

# Use a ponte VST

A ponte VST envia o áudio do microfone de uma DAW ou host VST para o VOrbit ASMR e devolve o sinal espacializado para a mesma inserção do plugin.

<img src="/VOrbit-ASMR-Docs/img/vst-bridge-flow-pt-BR.svg" alt="O áudio vai do microfone ao VOrbit Bridge e, pela saída da DAW, ao OBS. O VOrbit ASMR troca áudio com o Bridge e os fones aparecem como uma rota de monitoramento separada" width="1400" height="820" />

_Diagrama conceitual do fluxo de sinal. [Abra a imagem para ampliar](/img/vst-bridge-flow-pt-BR.svg)._

Para fazer live, **configure à parte uma rota para o OBS capturar a saída processada da DAW**. Escolha o método que combina com sua DAW e seus dispositivos, como uma saída adequada ou um dispositivo de áudio virtual. Ouvir nos fones não prova que chegou ao OBS: confira o medidor de áudio dele e faça uma gravação de teste curta.

## Configuração

Ao escolher **DAW (ponte VST)** na aba Dispositivos, quatro etapas aparecem em **Usar dentro de uma DAW (ponte VST)**.

1. **Copie “VOrbit Bridge.vst3” para a pasta VST3 da sua DAW**
   Pressione **Abrir a pasta da ponte** e copie **a pasta `VOrbit Bridge.vst3` inteira** para a pasta VST3 que sua DAW verifica. Apesar do nome .vst3, é uma pasta com arquivos dentro; não tire só os arquivos de dentro.
2. **Defina a rota de áudio deste aplicativo como “DAW (ponte VST)”**
   Ela não pode ser trocada durante a execução, então pressione **Parar** primeiro.
3. **Faça uma nova varredura no host e insira na faixa do microfone**
   Faça uma nova varredura de plugins na DAW e insira o **VOrbit Bridge** na faixa do microfone. Ative também o monitoramento de entrada na DAW.
4. **Pressione Iniciar**
   Quando o host se conectar, você pode começar a espacializar.

![Tela de configuração da ponte VST](/img/screenshots/pt-BR/vst-bridge-pt-BR.png)

_O aplicativo também mostra a pasta de origem e o estado atual da conexão. O caminho na imagem é um exemplo de desenvolvimento; o seu depende do local de instalação._

## Configurações da DAW

- Configure entrada, saída, taxa de amostragem e tamanho do buffer na DAW.
- As taxas suportadas são **44,1 kHz e 48 kHz**.
- Sem conexão com o VOrbit ASMR, o plugin deixa o áudio passar sem alterações.
- Os áudios e a voz do seu parceiro de collab voltam para a DAW como saída da faixa em que a ponte está. Não coloque a ponte na mixagem geral da DAW, senão o parceiro ouvirá a própria voz como eco.
- Enquanto nenhuma DAW estiver conectada, não é possível usar os áudios nem as chamadas.
- A renderização (processamento offline) e o congelamento deixam o áudio passar sem alterações.

## Gravar voz, áudios e parceiro separadamente

Copie também o **`VOrbit Bridge Multi.vst3`** da mesma pasta e carregue-o como instrumento na DAW. Sozinho, ele não produz som.

## Atualizar ou remover

- Depois de atualizar o VOrbit ASMR, copie o novo `VOrbit Bridge.vst3` de novo.
- Para deixar de usar, apague você mesmo a sua cópia do `VOrbit Bridge.vst3`; desinstalar o aplicativo não a remove.

Se não conectar, pare o VOrbit ASMR, escolha a rota de áudio de novo e faça uma nova varredura do plugin na DAW.
