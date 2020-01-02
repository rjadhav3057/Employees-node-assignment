class Response {
    buildSucessResponse(isSucess, data, error) {
        return {
            "isSucess": isSucess,
            "data": data,
            "error": error

        }
    }

    buildfailureResponse(isSucess, data, error) {
        return {
            "isSucess": isSucess,
            "data": data,
            "error": error

        }
    }
}

module.exports = Response;