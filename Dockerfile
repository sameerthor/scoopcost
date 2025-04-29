# Use official Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js app (it will look inside /src automatically)
RUN npm run build

# Expose the port that Cloud Run uses
EXPOSE 8080

# Start the server, bind to Cloud Run provided PORT
CMD ["npm", "start"]
