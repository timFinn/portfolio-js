FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install basic tools
RUN apk add --no-cache git

# Set environment variables for Next.js
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=development

# Expose port for Next.js dev server
EXPOSE 3000

# Keep container running and start dev server
CMD ["sh", "-c", "if [ ! -f package.json ]; then echo 'Creating Next.js app...'; npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --eslint --no; fi && npm install && npm run dev"]