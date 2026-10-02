---
sidebar_position: 2
---

# Configurações de som (HRTF e ambiência da sala)

A aba **Som** define como a própria voz soa.

![A tela Som](/img/screenshots/pt-BR/sound-pt-BR.png)

_Tela atual do aplicativo. Os recursos dependem da distribuição._

## HRTF

Uma HRTF (função de transferência relacionada à cabeça) descreve como o formato da cabeça e das orelhas muda um som. Cada pessoa ouve de um jeito um pouco diferente, então escolha a que der a sensação de posição mais clara.

| Opção | Descrição |
| --- | --- |
| **Integrada do Steam Audio** | A HRTF padrão incluída no Steam Audio |
| **Neumann KU100** | Medida com o microfone de cabeça artificial KU100 |
| **KEMAR** | Medida com a cabeça artificial de pesquisa KEMAR |

Uma boa forma de escolher é alternar entre elas enquanto move a voz para a esquerda, a direita, a frente e trás nos fones, e ficar com a que der as posições mais claras e naturais.

## Ambiência da sala

Adiciona reflexões de uma sala à voz. O padrão é **Sem reverb**.

- Sem reverb
- Vestiário
- Banheiro
- Cabine de gravação
- Quarto pequeno mobiliado
- Câmara de reverberação
- Sala de concertos
- Túnel

## Volume de saída

O volume geral de tudo o que o VOrbit ASMR emite.

## Espacialização

Desmarque para enviar o microfone como está, sem espacialização. Também serve para comparar o som com e sem espacialização.

## Limitador de segurança {#safety-limiter}

Limita picos repentinos da mistura final de voz, fontes e participantes a −1 dBFS. Vem ligado, preserva a proporção esquerda/direita e mostra a redução quando atua. A antecipação acrescenta 5 ms mesmo desligado. Não controla ganho acrescentado depois por equipamentos ou software de live.

## Tampar ouvidos {#ear-cover}

Abaixo da acústica da sala, simula mãos cobrindo os ouvidos de quem escuta. Um ruído grave e sons de contato e descolamento acompanham o abafamento da voz, fontes 1–4, reverberação e participantes. O áudio enviado aos outros não é afetado.

- Os botões esquerdo, direito e ambos cobrem os ouvidos; pressione novamente para descobrir. Cada ouvido chega à última posição não zero do controle (inicialmente 100%). Se ambos estiverem cobertos, o botão conjunto descobre os dois; caso contrário, cobre os abertos.
- **Ouvido esq.** e **Ouvido dir.** definem a posição da mão (0–100%). A velocidade também muda o som. Dois cliques voltam a 0%.
- **Vincular esquerdo e direito** vem ligado: ambos mudam a mesma quantidade, mantendo a diferença até um chegar ao limite. O vínculo vale só para os controles deslizantes.
- **Tempo ao cobrir** e **Tempo ao soltar** definem a subida e o desaparecimento do grave nos botões. **Nível do ronco**, **Nível do descolar** e **Usar o som com óleo** ajustam nível e textura.
- Atalhos e Stream Deck também permitem cobrir só enquanto você segura a tecla. Ao soltar, o estado anterior volta.

Ao iniciar, os ouvidos estão abertos. O vínculo, os ajustes e as posições de fechamento são salvos, mas o grau atual de cobertura não.
