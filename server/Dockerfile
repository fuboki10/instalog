# Use a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the necessary files to the working directory
COPY . .

# Install dependencies
RUN npm install

# Set the startup command
CMD npm run dev