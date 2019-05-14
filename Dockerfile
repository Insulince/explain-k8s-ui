FROM node:10.13-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN node_modules/\@angular/cli/bin/ng build --prod

FROM arm32v6/nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY --from=builder /app/dist/explain-k8s-ui/. .
COPY --from=builder /app/server.nginx /etc/nginx/server.nginx
CMD ["nginx", "-g", "daemon off;"]
