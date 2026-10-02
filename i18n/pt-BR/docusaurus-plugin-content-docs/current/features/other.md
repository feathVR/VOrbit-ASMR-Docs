---
sidebar_position: 1
---

# Áudios, atalhos de teclado e visualização compacta

## Áudios (tocar arquivos)

A aba **Áudios** toca até quatro arquivos de áudio de forma independente, para você posicionar efeitos e ambientes no mesmo espaço que a sua voz.

![A tela Áudios](/img/screenshots/pt-BR/playback-pt-BR.png)

_Tela atual do aplicativo. Os recursos dependem da distribuição._

- Pressione **Escolher arquivo** em um espaço ou arraste e solte um arquivo de áudio sobre ele.
- Formatos suportados: WAV / MP3 / M4A / AAC / FLAC / WMA (com os codecs do Windows), até 10 minutos por arquivo.
- Arquivos **mono** podem ser posicionados. Eles aparecem como círculos numerados nos painéis de Posição e podem ser arrastados a qualquer momento.
- Arquivos **estéreo** tocam com a imagem estéreo original. Não podem ser posicionados.
- Para tocar, o processamento de áudio precisa estar em execução: pressione **Iniciar** no topo.
- A reprodução é mixada na mesma saída do microfone e, durante uma chamada de collab, também é enviada ao parceiro. O volume é ajustado em cada espaço.
- Clique ou arraste na forma de onda para escolher a posição de reprodução.

## Reprodução, pausa e volume {#playback-controls}

Durante a reprodução, o botão vira **Pausar**. A pausa mantém a posição, e a reprodução continua dali. **Parar** volta ao começo. Clique na forma de onda ou arraste e solte para saltar durante a reprodução ou escolher o próximo início quando estiver parado ou pausado. No estéreo, L fica acima e R abaixo. A altura segue o pico do arquivo, não o volume de saída.

O volume usa dB (−60 a +20 dB; 0 dB é o nível original e −60 dB é silêncio). **Sala** decide se cada fonte recebe reverberação. Fontes mono também podem ser arrastadas nos painéis frontal e superior da página de áudio. Eles não mostram sua voz e salvam a escala separadamente de Posição.

## Predefinições e conjuntos de fontes {#source-sets}

Escolha sons incluídos em **Predefinições**. Os volumes 1–3 de “VR向けASMRループ音源集”, de Mosco, são para reprodução dentro do aplicativo e não podem ser extraídos para outros usos. Sobre traz o crédito e o link da coleção. Versões sem o pacote não mostram o menu.

**Conjuntos de fontes** salva as fontes 1–4 juntas: som, volume, loop, posição e reverberação.

1. Pare todas as fontes e escolha um conjunto incluído ou registrado em **Carregar conjunto**. **Carregar de arquivo…** abre arquivos .vorbitset.
2. Depois de ajustar, use **Salvar conjunto**. O conjunto também fica registrado para Stream Deck.
3. **Registrar conjunto existente…** registra um conjunto existente. **Remover registro** remove apenas o registro, preservando os arquivos originais.

Não é possível carregar conjuntos durante a reprodução. Os áudios não são copiados para o conjunto; movê-los ou apagá-los pode torná-lo indisponível.

## Atalhos de teclado

A aba **Atalhos de teclado** atribui teclas às ações do aplicativo. Elas funcionam mesmo com outro aplicativo ativo.

![A tela Atalhos de teclado](/img/screenshots/pt-BR/hotkeys-pt-BR.png)

_Tela atual do aplicativo. Os recursos dependem da distribuição._

1. Marque **Ativar atalhos**.
2. Clique na caixa de tecla à direita da linha da ação.
3. Pressione a tecla desejada e solte (combinações com Ctrl, Alt e Shift são permitidas).

Pressione Esc para cancelar e × para remover uma atribuição. Teclas reservadas como a tecla do Windows, Esc e F12 não podem ser usadas. Se uma tecla não puder ser registrada porque outro aplicativo a usa, escolha outra e pressione **Verificar conflitos novamente**.

## Silenciar tudo {#master-mute}

O botão de alto-falante no topo silencia voz, fontes, reverberação, participantes e o áudio enviado a eles. Fica vermelho, e o título indica silêncio. Pressione novamente para restaurar. Os arquivos continuam avançando sem som. É separado de silenciar só seu microfone na chamada. Ao iniciar, o silêncio fica desativado.

Para tossir, atribua silêncio enquanto segura a um atalho ou Stream Deck. Você também pode atribuir ações de cobrir ouvidos. Um atalho comum não se repete ao segurar. Durante a atribuição os atalhos pausam; cancelar ou encontrar conflito preserva a atribuição anterior.

## Stream Deck e controle externo {#stream-deck}

Instale o plugin incluído e coloque ações nas teclas: silêncio, cobrir ouvidos, reprodução, volume e carregar conjuntos. Conecta automaticamente com o aplicativo aberto. O ícone vermelho indica desconexão; ações pressionadas sem conexão não são executadas depois.

Os dials do Stream Deck + controlam volume de fontes/saída e cobertura dos ouvidos. A Infobar do Neo mostra o estado. Há um perfil inicial para XL. Não se carregam conjuntos durante a reprodução.

Ferramentas próprias podem usar a API WebSocket local no mesmo PC e usuário Windows. O guia offline incluído explica a conexão e oferece control.ps1 para PowerShell 7. Conexões de navegador são rejeitadas.

## Visualização compacta e Sempre no topo

**Visualização compacta**, no topo, muda para uma janela pequena que ocupa pouco espaço durante a live. Nela você ainda pode iniciar, silenciar, tocar áudios e cuidar das chamadas de collab. **Voltar à visão completa** retorna à janela normal.

Marque **Sempre no topo** para manter a janela do VOrbit ASMR na frente das outras.
