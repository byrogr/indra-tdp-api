module.exports = {
  servers: [
    {
      url: "http://127.0.0.1:3000/api/v1/ftth/alarms",
      description: "Local server"
    },
    {
      url: "http://10.252.193.37:3000/api/v1/ftth/alarms",
      description: "Maqueta server"
    },
    {
      url: "http://127.0.0.1:3000/api/v1/mc/trafficDown",
      description: "Local server"
    }

  ]
}
