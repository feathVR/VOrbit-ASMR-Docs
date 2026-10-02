---
sidebar_position: 1
---

# Chamadas de collab

Envie ASMR estéreo a parceiros distantes. Os passos dependem do modo e da versão.

![A tela Collab](/img/screenshots/pt-BR/collab-pt-BR.png)

_Tela atual do aplicativo. Os recursos dependem da distribuição._

## Modos de chamada e versões {#call-modes}

O código atual inclui **Baixa latência** e **Chamada estável**. Ambos usam Opus estéreo a 48 kHz. Estão em desenvolvimento: a integração na distribuição pública e a verificação de chamadas reais entre PCs ainda não terminaram. A disponibilidade depende da versão recebida.

| Modo | Requisitos e comportamento |
| --- | --- |
| **Baixa latência** | Precisa do Steam aberto, componentes de integração e propriedade do produto. Até 4 pessoas, incluindo você. A sala termina quando o anfitrião sai. |
| **Chamada estável** | Chamada estéreo por servidor configurado pelo distribuidor. O limite depende dele. Atualmente a recepção armazena cerca de 200 ms antes de reproduzir, aumentando o atraso. Indisponível sem servidor configurado. |

### Conectar nos novos modos

1. Todos escolhem entrada/saída e iniciam o áudio. No VST Bridge, conecte primeiro o DAW.
2. Escolha o mesmo modo. Não pode mudar durante criação de convite, conexão ou chamada.
3. O anfitrião cria o código e compartilha só com participantes. Eles colam e conectam. Não é necessário devolver código de resposta.
4. Use **Copiar convite** para mais participantes. Desconecte para sair. Ainda não há recuperação automática de conexão interrompida.

A versão gratuita só entra em salas compatíveis de chamada estável; não cria salas nem emite códigos. Não pode entrar na sala de baixa latência do produto. Sua distribuição e permissões também estão pendentes antes da publicação. Os códigos dos modos não são compatíveis. “—” em atraso ou perdas significa sem medição, não zero.

## Chamadas individuais anteriores {#legacy-call}

Os passos abaixo valem para versões que trocam convite e resposta, diferentes dos novos modos.

![Como uma chamada de collab se conecta](/img/screenshots/pt-BR/help-collab-pt-BR.png)

_Troca antiga de convite e resposta. Os novos modos estão acima._

1. **Os dois pressionam Iniciar**
   Os dois escolhem primeiro o microfone e a saída e pressionam **Iniciar** no topo. Fones de ouvido são recomendados.
2. **Envie um código de convite (quem convida)**
   Na aba **Collab**, pressione **Criar um código de convite** e envie o código copiado só para o seu parceiro, por exemplo por DM no Discord.
3. **Cole o código e devolva a resposta (quem é convidado)**
   Cole o código recebido em **Cole o código que seu parceiro enviou** e pressione **Conectar**. O código de resposta é copiado automaticamente; envie-o para quem convidou.
4. **Cole o código de resposta (quem convida)**
   Cole o código de resposta e pressione **Conectar**. Quando os dois virem **Em chamada**, está pronto.

:::warning O código de convite é a chave da chamada
Qualquer pessoa com o código pode entrar na chamada. Nunca o publique em um canal público. Se uma tentativa falhar, crie um código novo em vez de reutilizar o antigo.
:::

## Durante a chamada

- Ajuste o **Volume do parceiro** e silencie
- Acompanhe o **Atraso** e a **Perda de pacotes**
- Encerre a chamada com **Desconectar**

Os áudios tocados na aba **Áudios** também são enviados ao parceiro durante a chamada.

## Usar um microfone binaural real

Se você já tem um microfone binaural ou um sistema de gravação estéreo, marque **Usar microfone binaural real (sem espacialização)**. Os canais esquerdo e direito são enviados ao parceiro sem alterações. Deixe desmarcado com um microfone comum.

Esta configuração não pode ser alterada durante a execução.

## Se não conectar {#cannot-connect}

Na baixa latência, confira Steam, propriedade, componentes, convite e vagas. Se a chamada estável informar servidor não configurado, é necessária uma distribuição compatível. Confira o modo do código e cancele ou desconecte antes de tentar novamente. Só nas chamadas diretas antigas, tente conexão fixa ou IPv6 se falhar.
