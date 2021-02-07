/// Splits property of the object around either capital letters or underscore "symbol".
export const splitString = (str) => {
    let result;
    if(str.includes('_')) {
        result = str.split('_');
    }
    else {
        result = str.split(/(?=[A-Z])/);
    }
    result.join(" ");
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
}
