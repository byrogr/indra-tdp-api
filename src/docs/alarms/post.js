module.exports = {
  post: {
    tags: ["Alarms FTTH"],
    description: " Use to store alarms",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AlarmRequestBody",
          }
        }
      }
    },
    responses: {
      201: {
        description:  "A resource has been created successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AlarmResponseBody"
            }
          }
        }
      },
      500: {
        description: "Server error",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AlarmResponseErrorBody"
            }
          }
        }
      }
    }
  }
}
