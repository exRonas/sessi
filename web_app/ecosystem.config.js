module.exports = {
  apps : [{
    name   : "web-test",
    script : "./server.js",
    env: {
      PORT: 3005,
      NODE_ENV: "production",
    }
  }]
}
