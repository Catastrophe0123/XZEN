# DOCKERFILE FOR THE BACKEND
FROM node:14.16.0
WORKDIR /usr/src/app/client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run","start"]