FROM node:12

EXPOSE 3001

WORKDIR /usr/app/back

RUN npm i -g @adonisjs/cli

COPY . .

CMD ["adonis", "serve", "--dev"]
