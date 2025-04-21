FROM node:20-alpine AS BUilder

WORKDIR /app
COPY package*.json ./
RUN npm install 

COPY . .
RUN npm run build

FROM nginx:alphine

COPY --from=BUilder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","demon off"]
