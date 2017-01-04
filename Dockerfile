# Pull base image.
FROM ubuntu:14.04

# Install Node.js
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

# Install PM2
RUN npm install -g pm2

# ENV NODE_ENV development
# COPY . /backend
# COPY package.json /np-docker-mean/

# ADD package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /np-docker-mean && cp -a /tmp/node_modules /np-docker-mean/

ADD start.sh /start.sh
RUN chmod 755 /start.sh

# Define working directory
WORKDIR /np-docker-mean

# Define mountable directories.
VOLUME ["/np-docker-mean"]

# Binds to port 8085
EXPOSE 8085

# Set the dockerized entry-point application
# ENTRYPOINT ["node npm install"]

# Define default command.
# pm2 start app.js --max-memory-restart 120M -i 4
# CMD ["pm2-docker", "process.yml"]
CMD ["/start.sh"]
