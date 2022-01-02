module.exports = function reverse (n) {
    return n < 0 ? reverseNum(n) : reverseNum(n);

    function reverseNum(num) {
        let str = String(num);
        if (num < 0) str = str.slice(1);
        str.split('');
        let newStr = '';
    
        for (let i = str.length; i--;) {
            newStr = newStr + str[i];
        }
        return +newStr;
    }
}
