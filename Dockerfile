# Dockerfile optimisé pour Next.js avec approche "green"
# Utilise une image Alpine ultra-légère pour réduire la taille et la consommation

# ===== STAGE 1: Dependencies =====
FROM node:20-alpine AS deps
# Installe uniquement les dépendances système nécessaires
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copie les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installation optimisée des dépendances
RUN corepack enable pnpm && \
    pnpm install --frozen-lockfile --prod --no-scripts && \
    # Nettoie le cache pnpm pour réduire la taille
    pnpm store prune

# ===== STAGE 2: Builder =====
FROM node:20-alpine AS builder

WORKDIR /app

# Copie les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installation des dépendances pour le build
RUN corepack enable pnpm && \
    pnpm install --frozen-lockfile --no-scripts

# Copie le code source
COPY . .

# Build optimisé avec variables d'environnement pour la performance
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build de l'application
RUN pnpm run build && \
    # Supprime les dev dependencies après le build
    pnpm prune --prod

# ===== STAGE 3: Runner (Image finale) =====
FROM node:20-alpine AS runner

# Créé un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app

# Copie uniquement les fichiers nécessaires à l'exécution
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Change le propriétaire des fichiers
RUN chown -R nextjs:nodejs /app

# Configuration pour optimiser les performances et réduire la consommation
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
# Optimisation mémoire
ENV NODE_OPTIONS "--max-old-space-size=512"

USER nextjs

EXPOSE 3000

# Utilise exec form pour un meilleur signal handling
CMD ["node", "server.js"]