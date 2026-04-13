# BotoChat — Blueprint de Figma (MVP para React Native)

Este guia descreve exatamente como estruturar o arquivo no Figma **sem dependência de geração automática**, deixando tudo pronto para implementação em React Native.

---

## 1) Estrutura do arquivo no Figma

Crie as páginas nesta ordem:

1. `01 - Foundations`
2. `02 - Components`
3. `03 - Screens (MVP)`
4. `04 - Flows`

---

## 2) Foundations (base visual)

### 🎨 Cores (identidade BotoChat)

- `primary`: `#FF6FB5` (rosa boto)
- `secondary`: `#6C5CE7` (roxo tecnológico)
- `background/dark`: `#0F1226`
- `surface`: `#1A1F3A`
- `text/primary`: `#FFFFFF`
- `text/secondary`: `#A0A4C0`
- `semantic/success`: `#2ECC71`
- `semantic/danger`: `#FF5A5F`

Gradiente principal:

- `gradient/main`: `#FF6FB5 → #6C5CE7`

### 🔤 Tipografia

- Títulos: **Poppins** (ou **Inter** como fallback)
- Corpo: **Inter**

Escala tipográfica:

- `h1`: `28`
- `h2`: `22`
- `body`: `16`
- `caption`: `12`

### 🔘 Estilo visual

- Border radius padrão: `16px` (orgânico)
- Elementos levemente arredondados
- Sombras suaves (efeito flutuante)
- Elemento-chave de identidade: **ondas / ripple / sonar**

---

## 3) Components (reutilizáveis)

Crie componentes antes das telas para garantir consistência:

### `Button/Primary`

- Fundo com gradiente principal
- Texto branco
- Radius `16`
- Variants:
  - `state=normal`
  - `state=loading`
  - `state=disabled`

### `Card/Device`

- Avatar
- Nome do dispositivo
- Intensidade de sinal (ícone/barras/ondas)
- Ação: botão **Conectar**

### `Bubble/Chat`

- Variante enviada (`type=sent`): rosa
- Variante recebida (`type=received`): cinza escuro
- Bordas orgânicas

### `Header/Default`

- Botão voltar
- Título
- Status de conexão

---

## 4) Screens do MVP

Nomeie os frames exatamente como abaixo para facilitar implementação:

- `SplashScreen`
- `OnboardingScreen`
- `PermissionScreen`
- `DiscoveryScreen`
- `PairingScreen`
- `ChatScreen`

### 4.1 `SplashScreen`

Objetivo: impacto visual inicial.

Elementos:

- Logo do boto central
- Fundo gradiente (animável)
- Texto: **BotoChat**

### 4.2 `OnboardingScreen` (1–2 telas)

**Tela 1**

- Ilustração de ondas
- Texto:
  - “Converse sem internet”
  - “Dispositivos próximos, conexão direta”

**Tela 2**

- Explicação simples sobre:
  - Bluetooth
  - Privacidade
- CTA: **Começar**

### 4.3 `PermissionScreen`

- Ícone de Bluetooth
- Texto principal:
  - “Precisamos de acesso ao Bluetooth”
- CTA: **Permitir**

### 4.4 `DiscoveryScreen` (núcleo do produto)

Elementos:

- Header: “Dispositivos próximos”

Estado 1 — buscando:

- Animação de ondas (radar)
- Texto: “Procurando...”

Estado 2 — lista:

- Cards com:
  - Nome (ex.: “Gabriel iPhone”)
  - Intensidade do sinal (ondas)
  - Botão **Conectar**

### 4.5 `PairingScreen`

Tela intermediária de conexão.

Elementos:

- Dois avatares
- Ondas conectando os avatares
- Status:
  - “Conectando...”
  - “Conectado”

### 4.6 `ChatScreen`

Estrutura:

- Header:
  - Nome do dispositivo
  - Status (Conectado / Fora de alcance)
- Corpo: lista de mensagens
- Input:
  - Campo de texto
  - Botão enviar

Extras importantes:

- Indicador de erro: “Mensagem não enviada”
- Timestamp leve por mensagem

### 4.7 Estado desconectado (dentro do fluxo de chat)

- Banner: “Fora de alcance”
- Ação: “Reconectar”

---

## 5) Fluxos UX (04 - Flows)

Fluxo principal:

1. Splash
2. Onboarding
3. Permissões
4. Descoberta
5. Pareamento
6. Chat

Fluxo alternativo:

- Chat → Desconexão → Voltar para Descoberta

---

## 6) Microinterações (diferencial)

Desenhar no Figma:

- Ondas ao buscar dispositivos
- Pulsação no botão conectar
- Animação de “eco” ao encontrar alguém
- Feedback de proximidade (mais ondas = mais perto)

---

## 7) Handoff para React Native

Para acelerar a implementação:

- Use nomes de frame exatamente como definidos na seção 4.
- Padronize componentes com variants e propriedades semânticas (`state`, `type`, `status`).
- Mantenha tokens (cores/tipografia/radius) centralizados em `01 - Foundations`.

---

## 8) Próximo passo recomendado

Melhor decisão técnica agora: começar por **DiscoveryScreen**, que é o núcleo do produto.

Opções de continuidade:

1. Transformar em wireframes de baixo nível (direto para código)
2. Desenhar layout pixel-perfect detalhado da `DiscoveryScreen`
3. Entregar código React Native baseado nas telas
