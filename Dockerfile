# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

COPY package.json .

# Install the application dependencies for Node.js
RUN npm install

RUN npm run build

# Expose port 3000 for Node.js app
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "run", "preview"]

