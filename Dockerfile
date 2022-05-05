#################
# Build the app #
#################
FROM node:10.16.0-alpine as node
WORKDIR /app

#set ssh key setting for internal repos
# RUN apk update && apk upgrade && \
#   apk add --no-cache bash git openssh

# RUN mkdir /root/.ssh/
# ADD ssh/id_rsa /root/.ssh/id_rsa
# ADD ssh/id_rsa.pub /root/.ssh/id_rsa.pub
# ADD ssh/config /root/.ssh/config

# RUN chmod 600 /root/.ssh/id_rsa
# RUN chmod 600 /root/.ssh/id_rsa.pub
# RUN chmod 600 /root/.ssh/config

# Create known_hosts
# RUN touch /root/.ssh/known_hosts

# Add ssh key
# RUN ssh-keyscan git-codecommit.ap-south-1.amazonaws.com >> /root/.ssh/known_hosts


# copy package.json and yarn.lock on server 
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn
COPY . .
RUN yarn build --prod


################
# Run in NGINX #
################
FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy our default nginx config and build app
COPY --from=node /app/dist/admin /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/static-js/env.template.js > /usr/share/nginx/html/assets/static-js/env.js && exec nginx -g 'daemon off;'"]