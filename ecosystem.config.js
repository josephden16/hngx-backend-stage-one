module.exports = {
  apps: [
    {
      name: "backend-stage-one",
      script: "index.js",
      instances: 1, // Number of application instances to run
      autorestart: true, // Enable automatic restart on crash
      watch: false, // Watch for file changes and restart if necessary
      max_memory_restart: "1G", // Restart if memory usage exceeds 1GB
      env: {
        NODE_ENV: "production", // Set the environment to production
      },
    },
  ],
};
