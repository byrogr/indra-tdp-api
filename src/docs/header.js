module.exports = {
    header:{
        parameters:{
            XIBMClientIdParam:{
                in: header,
                name: "X-IBM-Client-Id",
                schema: {
                    type:String
                }
            }
        }
    }
}