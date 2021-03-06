FROM node:12.20.1
ENV ROOT /usr/src/app
WORKDIR ${ROOT}
COPY . ${ROOT}
EXPOSE 5000
COPY scripts/install_deps.sh /install_deps.sh
RUN chmod +x /install_deps.sh
entrypoint "/install_deps.sh"