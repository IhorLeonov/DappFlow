# DappFlow TODO

This file is the project learning roadmap and task tracker. Keep it updated after every meaningful planning or implementation change.

## Working Mode

- Frontend: Codex can handle routine implementation and refactors.
- Backend and Solidity: Codex acts as mentor. The user writes the routine code, while Codex explains the goal, tradeoffs, mechanics, and common mistakes.
- Use this file as the Obsidian-friendly source of truth for what to do next.

## Current Focus

Backend foundation: create an Express + TypeScript backend and understand the server pieces before connecting Solidity.

## Backend MVP Features

- [ ] `GET /health` returns backend status.
- [ ] `POST /auth/nonce` creates a nonce for wallet login.
- [ ] `POST /auth/verify-wallet` verifies a signed wallet message.
- [ ] `GET /me` returns the current authenticated user.
- [ ] `POST /rewards/claim-registration` grants the first registration reward once per wallet.

## Backend Stack Decision

- Runtime: Node.js.
- HTTP framework: Express.js.
- Language: TypeScript.
- Database ORM: Prisma.
- Database for learning/MVP: SQLite first, PostgreSQL later.
- Validation: Zod.
- Auth token: JWT.
- Wallet signature verification: viem.
- Environment config: dotenv plus validation.

## Backend Milestones

### 1. Create Backend Project

- [x] Create `backend/` in repository root.
- [x] Run `npm init -y` inside `backend/`.
- [x] Install runtime dependencies:

```bash
npm install express cors dotenv zod jsonwebtoken viem
```

- [x] Install dev dependencies:

```bash
npm install -D typescript tsx @types/express @types/cors @types/jsonwebtoken @types/node
```

- [x] Create TypeScript config:

```bash
npx tsc --init
```

### 2. Create Basic Backend Structure

- [ ] Create `backend/src/server.ts`.
- [ ] Create `backend/src/app.ts`.
- [ ] Create `backend/src/routes/health.routes.ts`.
- [ ] Create `backend/src/config/env.ts`.
- [ ] Add scripts to `backend/package.json`:

```json
{
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

### 3. First Endpoint

- [ ] Implement `GET /health`.
- [ ] Run backend on port `4000`.
- [ ] Verify:

```bash
curl http://localhost:4000/health
```

Expected response:

```json
{
  "status": "ok"
}
```

### 4. Environment Config

- [x] Add `backend/.env`.
- [ ] Add `PORT=4000`.
- [ ] Validate env variables with Zod in `src/config/env.ts`.
- [ ] Use parsed env values in `server.ts`.

### 5. Database Setup

- [ ] Install Prisma.
- [ ] Initialize Prisma with SQLite.
- [ ] Create initial models: `User`, `WalletNonce`, `Reward`.
- [ ] Add uniqueness rules to prevent repeated rewards and duplicate wallets.

### 6. Wallet Auth

- [ ] Learn nonce-based wallet auth flow.
- [ ] Implement nonce generation.
- [ ] Implement signed message verification.
- [ ] Create or find user after valid signature.
- [ ] Issue JWT.
- [ ] Protect `GET /me` with auth middleware.

### 7. Registration Reward

- [ ] Create reward type for registration.
- [ ] Prevent duplicate registration claim per wallet.
- [ ] First implement reward as a database record.
- [ ] Later replace or extend reward with ERC20 mint transaction.

## Solidity Later

- [ ] Add `contracts/` workspace.
- [ ] Create `SkillToken.sol` ERC20.
- [ ] Create `AvatarNFT.sol` ERC721.
- [ ] Add tests for owner-only minting and one-avatar-per-wallet.
- [ ] Connect backend reward flow to contract minting.

## Parking Lot

- [ ] GitHub OAuth reward.
- [ ] Avatar generator metadata.
- [ ] Task catalog.
- [ ] Public profile page.
- [ ] Badge NFT / SBT contract.
- [ ] Testnet deploy.
