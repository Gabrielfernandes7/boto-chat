# Boto Chat — Documento de Visão do Produto (MVP)

**Versão:** 1.0  
**Data:** 9 de abril de 2026  
**Horizonte:** MVP (8 semanas)

## 1) Visão
O **Boto Chat** é um aplicativo de mensagens **offline-first** e **descentralizado**, que permite comunicação direta entre dispositivos próximos usando protocolos de proximidade (começando por **Bluetooth Low Energy - BLE**). O produto foi concebido para funcionar sem internet, com foco em privacidade, resiliência e simplicidade de uso.

## 2) Problema que resolvemos
Em ambientes sem conectividade (eventos, viagens, áreas remotas, cenários de contingência) ou em situações que exigem maior privacidade, aplicativos de mensagens convencionais deixam de funcionar por dependerem de infraestrutura de rede e servidores centrais.

## 3) Proposta de valor
- **Comunicação sem internet** entre dispositivos próximos.
- **Menor dependência de servidor central** no fluxo principal de troca de mensagens.
- **Experiência simples** para descobrir, parear e conversar.
- **Identidade brasileira** forte, inspirada no boto-cor-de-rosa e no conceito de ecolocalização.

## 4) Público-alvo inicial
- Usuários em ambientes com baixa conectividade.
- Times de campo e grupos em deslocamento.
- Entusiastas de privacidade e tecnologia local-first.

## 5) Objetivos do MVP
1. Descobrir dispositivos próximos com o app aberto.
2. Parear e conectar via BLE.
3. Trocar mensagens de texto ponto a ponto.
4. Exibir status de conexão e alcance.
5. Persistir histórico localmente no dispositivo.

## 6) Escopo do MVP (entra)
- Descoberta BLE de dispositivos próximos.
- Pareamento/conexão simplificada entre dois dispositivos.
- Chat 1:1 com mensagens de texto.
- Persistência local com SQLite.
- Estados de conexão: conectando, conectado, desconectado, fora de alcance.

## 7) Fora do escopo MVP (v2+)
- Rede mesh multi-hop completa.
- Grupos, canais e broadcast avançado.
- Sincronização em nuvem e backup remoto.
- Mídia pesada (áudio, vídeo, anexos grandes).
- Criptografia ponta a ponta avançada com gestão de chaves multi-device.

## 8) Métricas de sucesso do MVP
- Dois dispositivos trocam mensagens sem internet em menos de **60 segundos** após abrir o app.
- Taxa de entrega local de mensagem em sessão ativa acima de **95%** em testes internos.
- Reconexão com feedback visual em até **10 segundos** quando voltar ao alcance.

## 9) Princípios de produto
- **Local-first:** dado primeiro no dispositivo.
- **Simplicidade > complexidade:** menos passos para conectar e conversar.
- **Transparência:** estados de conexão sempre visíveis.
- **Segurança progressiva:** bases sólidas no MVP e endurecimento na v2.

## 10) Naming e posicionamento
- Nome oficial: **Boto Chat**.
- Tom de marca: acolhedor, brasileiro, tecnológico e confiável.
- Assinatura sugerida: **"Conexões que fluem."**
