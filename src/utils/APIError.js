// when api error comes then execute this code
class APIError extends Error
{
    constructor(statusCode, message="something Went wrong.",errors=[],stack="")
    {
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors;//errors array means multiple error

        if(stack)
        {
            //stack means error stacks(how error are comes and how to handles)
            this.stack=stack

        }
        else
        {
            Error.captureStackTrace(this,this.constructor);
        }
    }

}

export {APIError};