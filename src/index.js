const jsonParse = data => {
    if (typeof data !== 'number') {
        try {
            return JSON.parse(data)
        } catch (e) {}
    }
    return {}
};

export default jsonParse
