const jsonParse = data => {
    let obj = {};
    try {
        obj = JSON.parse(data)
    } catch (e) {}
    return typeof obj === 'number' ? {} : obj
};

export default jsonParse
