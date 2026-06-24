# Use Node 22 slim
FROM node:22-slim

WORKDIR /app

# Clean Yarn ENV from base image
ENV YARN_VERSION=

# Copy full app
COPY . .

# Use Corepack to install Yarn 4.x
RUN corepack enable && corepack prepare yarn@4.5.0 --activate

# Install deps
RUN yarn install --immutable

# Build Next.js app
RUN yarn build

# Runtime settings
ENV NODE_ENV=production
# EXPOSE 8081

# Run the app
CMD sh -c "yarn start"