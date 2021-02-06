/// Splits property of the object around either capital letters or underscore "symbol".
export const splitString = (str) => {
    if(str.includes('_')) {
        return str.split('_').join(" ");
    }
    return str.split(/(?=[A-Z])/).join(" ");
}
