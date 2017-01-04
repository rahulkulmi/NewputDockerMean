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
COPY package.json /np-docker-mean/

# Define working directory
WORKDIR /np-docker-mean
VOLUME ["/np-docker-mean"]

RUN npm install

# Binds to port 8085
EXPOSE 8085

# Set the dockerized entry-point application
# ENTRYPOINT ["node"]

# Define default command.
# pm2 start app.js --max-memory-restart 120M -i 4
CMD ["pm2-docker", "process.yml"]
