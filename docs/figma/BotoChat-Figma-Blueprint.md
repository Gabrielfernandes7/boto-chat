# BotoChat — Blueprint de Figma (Semana 1)

Este documento funciona como **arquivo-base de Figma** para o time montar e manter o design system e as 3 telas iniciais do app:

- Onboarding
- Lista de Pares
- Chat

---

## 1) Estrutura recomendada do arquivo Figma

**Página 1 — Cover**
- Capa: `BotoChat · Mobile App`
- Versão: `v0.1 (Semana 1)`

**Página 2 — Foundations**
- Cores (Design Tokens)
- Tipografia
- Espaçamentos
- Raios de borda
- Elevação/Sombra

**Página 3 — Components**
- Botões
- Cards de pares
- Balões de chat
- Top Bar
- Item de lista

**Página 4 — Screens (Flows)**
- `01_Onboarding`
- `02_Peers`
- `03_Chat`

**Página 5 — Prototypes**
- Fluxo navegável:
  - Onboarding → Peers → Chat

---

## 2) Design Tokens (alinhados ao app)

### Cores
- `brand/rosa-boto`: `#FF6FA3`
- `brand/azul-rio`: `#2563EB`
- `brand/verde-floresta`: `#00B894`
- `neutral/off-white`: `#FFF7E6`
- `neutral/cinza-claro`: `#F0F4F8`
- `neutral/azul-profundo`: `#0B1E6D`
- `text/primary`: `#102A43`
- `base/white`: `#FFFFFF`

### Tipografia
- `title`: 28 / 700+
- `heading`: 22 / 700
- `body`: 16 / 400-600
- `caption`: 13 / 400

### Espaçamento
- `xs`: 4
- `sm`: 8
- `md`: 16
- `lg`: 24
- `xl`: 32

### Radius
- `sm`: 8
- `md`: 16
- `lg`: 24

---

## 3) Layout base dos frames

Use iPhone 16/15 base frame: **393 x 852**.

### 3.1 Onboarding
- Fundo: `neutral/off-white`
- Logo central (140 x 140), radius 24
- Título: "BotoChat"
- Subtítulo: "Conexões que fluem. Como o rio, como o som."
- CTA primário: "Entrar"
  - Cor: `brand/azul-rio`
  - Texto: branco

### 3.2 Lista de Pares
- Fundo: `neutral/off-white`
- Título: "Pares próximos"
- Cards (lista vertical)
  - Fundo branco
  - Borda `neutral/cinza-claro`
  - Radius 16
  - Nome do peer + status

### 3.3 Chat
- Fundo: `neutral/off-white`
- Título/topo: "Chat com Peer"
- Balões:
  - Entrada: branco, borda cinza, texto primário
  - Saída: azul-rio, texto branco

---

## 4) Componentes para transformar em variants

### Button / Primary
- Estado: Default, Pressed, Disabled

### PeerCard
- Estado: Online, Offline, Unknown

### MessageBubble
- Tipo: Inbound, Outbound

### TopBar
- Com e sem botão de voltar

---

## 5) Prototipação (interações)

- `Onboarding/Entrar` → Navigate to `Peers`
- `Peers/PeerCard` → Navigate to `Chat`

Animação sugerida: **Smart Animate, 250ms, Ease Out**.

---

## 6) Entrega para desenvolvimento

### Naming convention
- Frames: `Screen/Onboarding`, `Screen/Peers`, `Screen/Chat`
- Components: `Button/Primary`, `Card/Peer`, `Bubble/Inbound`, `Bubble/Outbound`
- Styles: `Color/...`, `Text/...`, `Effect/...`

### Export
- Ícone app: PNG 1024x1024
- Assets ilustrativos: SVG quando possível

---

## 7) Checklist de pronto

- [ ] Tokens criados como Styles/Variables
- [ ] Componentes com Auto Layout
- [ ] Telas com constraints responsivas
- [ ] Fluxo navegável publicado
- [ ] Link de Figma compartilhado com devs

