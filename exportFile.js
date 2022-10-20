// This function checks whether the incoming value is tsring or not
const isString = (val) => {
    const typeOfValue = typeof val;
    console.log(typeOfValue);
    if (typeOfValue === 'string')
        return true;
    else 
        return false;
}

exports.isString = isString;