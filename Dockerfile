FROM node:16

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2


# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./server/package*.json ./server/
COPY ./website/package*.json ./website/

# Install dependencies
RUN cd ./server && npm install
RUN cd ../
RUN cd ./website && npm install

# Copy all files
COPY ./ ./
COPY ./server/ ./server/
COPY ./website/ ./website/

# Build app
#RUN npm run build

# Expose the listening port
EXPOSE 1269 1240 3000

# Launch app with PM2
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]