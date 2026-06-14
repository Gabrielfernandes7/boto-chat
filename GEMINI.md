# BotoChat - Project Context

BotoChat is a decentralized mobile messaging application built with **React Native (Expo)** and **TypeScript**. It focuses on peer-to-peer communication using proximity protocols (Bluetooth, Wi-Fi Direct) to enable messaging without internet access, following a **local-first** and **decentralized** architecture.

## Project Overview

- **Core Technology:** React Native (Expo SDK 54)
- **Language:** TypeScript
- **Architecture:** Clean Architecture
- **Routing:** Expo Router (File-based routing)
- **Styling:** Themed components and specialized theme tokens (`ui/theme`)
- **Main Goal:** Offline communication in areas without network signal, inspired by Brazilian fauna (Boto-cor-de-rosa).

## Directory Structure & Architecture

The project follows a modular structure based on Clean Architecture principles:

- `app/`: Expo Router entry points and layout definitions.
- `application/`: Application services (e.g., `ChatService`) that orchestrate use cases.
- `domain/`: Business logic core.
    - `entities/`: Pure data models (Message, Peer, Session).
    - `usecases/`: Granular business actions (SendMessage, DiscoverPeers).
- `infrastructure/`: External world adapters.
    - `transport/`: P2P communication implementations (currently using mock adapters).
    - `storage/`: Local data persistence.
    - `sync/`: Peer-to-peer data synchronization logic.
- `ui/`: User interface layer.
    - `screens/`: Domain-specific screen components.
    - `components/`: Reusable UI components.
    - `hooks/`: UI-specific logic and state management (e.g., `useChat`).
    - `theme/`: Styling tokens and global styles.

## Building and Running

The project uses standard Expo scripts:

- **Start Development Server:** `npm start`
- **Run on Android:** `npm run android`
- **Run on iOS:** `npm run ios`
- **Run on Web:** `npm run web`

## Development Conventions

- **Types:** Strictly use TypeScript interfaces and types defined in `domain/entities`.
- **Absolute Imports:** Use `@/` alias for clean imports (e.g., `import { Message } from '@/domain/entities'`).
- **Clean Architecture:** Keep business logic in `domain` and coordinate it through `application` services. UI components should primarily interact with `hooks` or `application` services.
- **Theming:** Use themed components from `components/Themed.tsx` and tokens from `ui/theme/tokens.ts` to ensure consistency.
- **State Management:** Currently using React `useState` and custom hooks (`ui/hooks`).

## Key Files

- `package.json`: Dependency and script definitions.
- `app.json`: Expo configuration.
- `domain/entities/index.ts`: Central export point for domain models.
- `infrastructure/transport/index.ts`: Definition of the `TransportAdapter` interface and its current implementation.
