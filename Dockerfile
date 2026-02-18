FROM node:22-bullseye

RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]