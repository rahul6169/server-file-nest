FROM node:18
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run prisma:generate
RUN npm run build
ENV DATABASE_URL=mongodb+srv://Rahul6169:Rahul2002@cluster0.zroci3w.mongodb.net/test?retryWrites=true&w=majority

# RUN npm prune --production
EXPOSE 3333
CMD ["node", "dist/src/main.js"]
