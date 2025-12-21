FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# ❌ Source code with secrets copied into image
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]