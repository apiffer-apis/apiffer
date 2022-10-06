FROM node:16

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2


# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ./ ./

# Build app
#RUN npm run build

# Expose the listening port
EXPOSE 1269 1240

# Launch app with PM2
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]