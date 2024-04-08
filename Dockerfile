FROM node:18-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install
COPY . .
ENV PORT=8080
ENV NODE_ENV=production
EXPOSE 8080
RUN npm run build
CMD ["npm","start"]