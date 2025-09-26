FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json vite.config.js ./
COPY src ./src
COPY public ./public
RUN npm ci
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# copy custom nginx conf if needed
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]