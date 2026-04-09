# Boto Chat — Backlog Inicial Priorizado (MVP)

**Data:** 9 de abril de 2026  
**Modelo de prioridade:** P0 (essencial), P1 (importante), P2 (evolução)

## Épico 1 — Descoberta e Pareamento BLE

### História 1.1 (P0)
**Como** usuário, **quero** ver dispositivos próximos com o app aberto, **para** iniciar uma conexão.
- Critérios de aceitação:
  - Lista atualiza em tempo real durante o scan.
  - Estado vazio quando nenhum peer for encontrado.
  - Erro amigável quando permissão for negada.

### História 1.2 (P0)
**Como** usuário, **quero** conectar/desconectar de um dispositivo, **para** iniciar/finalizar conversa.
- Critérios de aceitação:
  - Botão de conectar e desconectar funcional.
  - Indicador visual de estado (conectando/conectado/desconectado).

### História 1.3 (P1)
**Como** usuário, **quero** saber quando um peer sai de alcance, **para** entender por que a mensagem não foi enviada.
- Critérios de aceitação:
  - Estado “fora de alcance” detectado.
  - UI com orientação de reconexão.

---

## Épico 2 — Mensageria Offline 1:1

### História 2.1 (P0)
**Como** usuário, **quero** enviar mensagens de texto, **para** me comunicar sem internet.
- Critérios de aceitação:
  - Envio de mensagem para peer conectado.
  - Campo de texto com validação mínima.

### História 2.2 (P0)
**Como** usuário, **quero** receber mensagens em tempo real, **para** conversar naturalmente.
- Critérios de aceitação:
  - Mensagem recebida aparece na conversa sem refresh manual.
  - Ordenação por timestamp local.

### História 2.3 (P1)
**Como** usuário, **quero** ver status da mensagem, **para** entender se foi enviada com sucesso.
- Critérios de aceitação:
  - Status: pendente, enviada, falha.

---

## Épico 3 — Persistência Local

### História 3.1 (P0)
**Como** usuário, **quero** manter histórico local, **para** não perder conversa ao fechar o app.
- Critérios de aceitação:
  - Mensagens persistidas em SQLite.
  - Conversa restaurada ao reabrir app.

### História 3.2 (P1)
**Como** usuário, **quero** ver minhas conversas recentes, **para** retomar rapidamente.
- Critérios de aceitação:
  - Lista de conversas ordenada por atualização mais recente.

---

## Épico 4 — UX/UI e Marca

### História 4.1 (P0)
**Como** usuário, **quero** um fluxo simples de descoberta e conexão, **para** usar o app sem tutorial.
- Critérios de aceitação:
  - Jornada completa em até 3 ações principais.

### História 4.2 (P1)
**Como** usuário, **quero** feedbacks visuais claros, **para** entender estados e erros.
- Critérios de aceitação:
  - Mensagens de erro contextualizadas.
  - Indicadores consistentes de status de conexão.

### História 4.3 (P2)
**Como** usuário, **quero** tema claro/escuro alinhado à identidade Boto Chat, **para** melhor conforto visual.

---

## Épico 5 — Qualidade e Release Interna

### História 5.1 (P0)
**Como** time de produto, **queremos** checklist de testes manuais em 2+ dispositivos, **para** validar o MVP.

### História 5.2 (P1)
**Como** time de engenharia, **queremos** logs mínimos de sessão BLE, **para** depurar falhas de conexão.

### História 5.3 (P1)
**Como** time, **queremos** build alpha para testes internos, **para** coletar feedback real.

---

## Ordem sugerida de implementação (Sprint 1 e 2)
1. Histórias 1.1, 1.2, 2.1 (P0)
2. Histórias 2.2, 3.1, 4.1 (P0)
3. Histórias 2.3, 1.3, 4.2, 5.1 (P1)
4. Demais P1/P2 conforme capacidade

## Definition of Done (MVP)
- Critérios de aceitação atendidos.
- Testado manualmente em Android (mín. 2 dispositivos).
- Sem erro bloqueante conhecido para o fluxo principal.
- Documentação mínima atualizada.
