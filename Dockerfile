# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install Sendmail, Python3 y pip3
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y sendmail python3 python3-pip && \
    rm -rf /var/lib/apt/lists/* && \
    # Install the application dependencies for Node.js
    npm install && \
    # Install the application dependencies for Python
    pip3 install --no-cache-dir flask flask-cors

# Expose port 3000 for Node.js app
EXPOSE 3000

# Define the entry point for the container
CMD ["npm", "start"]
