FROM node:alpine AS node-builder

WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM heroiclabs/nakama:3.8.0

COPY --from=node-builder /backend/build/*.js /nakama/data/modules/build/
COPY local.yml /nakama/data/