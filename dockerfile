FROM node:18
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run prisma:generate
RUN npm run build
# RUN npm prune --production
EXPOSE 3333
CMD ["node", "dist/src/main.js"]