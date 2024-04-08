FROM node:18-alpine AS development

# ENV PROXY START (https://caprover.com/docs/app-configuration.html#environment-variables)

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# ENV PROXY END

WORKDIR /app

COPY package*.json ./

RUN npm ci --include=dev --legacy-peer-deps

COPY . .

RUN npm run build

CMD npm run dev
