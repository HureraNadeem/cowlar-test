FROM node:18.12.1

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm cache clean --force

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]