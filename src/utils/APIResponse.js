class APIResponse {
    constructor(statusCode,data,message="success")
    {
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400   //
    }
}

export {APIResponse}



/*
informational responses(100-199)
successfull responses(200-299)
redirection message(300-399)
client error message(400-499)
server error responses(500-599)

*/