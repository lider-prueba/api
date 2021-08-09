const request = {
    body: {},
    headers: {}
}

const getMock = () => {
    const resp = {}
    resp.status = jest.fn().mockReturnValue(resp)
    resp.send = jest.fn().mockReturnValue(resp)
    return resp
}

const reqError = {
    status: 500,
    payload: 'Ocurrío un error en la base de datos, porfavor, intente mas tarde.',
    label: {},
    code: 'ER_PARSE_ERROR',
    errno: 1064
}

module.exports = { request, getMock, reqError }
