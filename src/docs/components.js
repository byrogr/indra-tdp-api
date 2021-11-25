module.exports = {
  components: {
    schemas: {
      AlarmRequestBody: {
        type: "object",
        properties: {
          "deviceDescription": {
            type: "string",
            example: "OLT::U2000_GPON"
          },
          "notificationId": {
            type: "number",
            example: 175794137
          },
          "alarm": {
            type: "object",
            properties: {
              "alarmaId": {
                type: "number",
                example: 40939761
              },
              "name": {
                type: "string",
                example: "Communication with the device failed"
              },
              "location": {
                type: "string",
                example: "HUAWEI U2000_GPON NODE OLT_MA5800_TUMBES_30"
              },
              "source": {
                type: "string",
                example: "OLT_MA5800_TUMBES_30"
              },
              "specificProblem": {
                type: "string",
                example: "Not found the Node"
              },
              "reason": {
                type: "string",
                example: "Communication with the device failed"
              },
              "severity": {
                type: "string",
                example: "Critical"
              },
              "originalSeverity": {
                type: "string",
                example: "Critical"
              },
              "state": {
                type: "string",
                example: "ACTIVE"
              },
              "eventTime": {
                type: "datetime",
                example: "2021-07-19 16:22:38"
              },
              "clearTime": {
                type: "string",
                example: null
              },
            }
          },

          "additionalInfo": {
            type: ["object"],
            example: [
              {
                "key": "NodeType",
                "value": "MA5800-X17"
              },
              {
                "key": "NodeIp",
                "value": "10.227.120.144"
              }
            ],
          },
          "lastUpdateTime": {
            type: "datetime",
            example: null
          }
        }
      },
      AlarmResponseBody: {
        type: "object",
        properties: {
          "code": {
            type: "integer",
            example: 201
          },
          "failed": {
            type: "boolean",
            example: false
          },
          "data": {
            type: "object",
            properties: {
              "message": {
                type: "string",
                example: "Recurso creado correctamente"
              }
            }
          }
        }
      },
      AlarmResponseErrorBody: {
        type: "object",
        properties: {
          "code": {
            type: "integer",
            example: 500
          },
          "failed": {
            type: "boolean",
            example: true
          },
          "error": {
            type: "object",
            properties: {
              "message": {
                type: "string",
                example: "Error al conectarse con el servicio"
              }
            }
          }
        }
      }
    }
  }
}
