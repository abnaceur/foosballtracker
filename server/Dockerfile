FROM node:12.20.1
ENV ROOT /usr/src/app
WORKDIR ${ROOT}
RUN npm i -g nodemon
# COPY package*.json ./
# RUN npm i
COPY . ${ROOT}
EXPOSE 3000

COPY scripts/install_deps.sh /install_deps.sh
RUN chmod +x /install_deps.sh
entrypoint "/install_deps.sh"