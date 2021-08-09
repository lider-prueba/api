class ParserResponse {
    static parse(resp, label = {}) {
        const serverResponse = new Object()
        serverResponse.status = 200
        serverResponse.payload = resp
        serverResponse.label = label
        if (resp.code) {
            serverResponse.status = 500
            serverResponse.payload = 'Ocurrío un error en la base de datos, porfavor, intente mas tarde.'
            serverResponse.code = resp.code
            serverResponse.errno = resp.errno
        }
        return serverResponse
    }

    static validate(req, fields) {
        const { headers, body } = req
        const serverResponse = new Object()
        for (const property in fields) {
            if (!headers.hasOwnProperty(property) && fields[property].isObligatory && fields[property].paramType === 'header') {
                serverResponse.status = 400
                serverResponse.payload = `campo ${property} inexistente o con formato inválido`
                return serverResponse
            }
            if (!body.hasOwnProperty(property) && fields[property].isObligatory && fields[property].paramType === 'body') {
                serverResponse.status = 400
                serverResponse.payload = `campo ${property} inexistente o con formato inválido`
                return serverResponse
            }
        }
        return true
    }
}

exports.ParserResponse = ParserResponse
