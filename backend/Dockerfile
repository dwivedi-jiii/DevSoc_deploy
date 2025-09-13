# 1. Use official Node.js image
FROM node:20

# 2. Set working directory in container
WORKDIR /app

# 3. Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all backend files
COPY . .

# 5. Expose the port your server uses
EXPOSE 5000

# 6. Start the server
CMD ["node", "server.js"]
