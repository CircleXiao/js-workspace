function showMultiTable(start, end) {
    var resultMsg = isInputValid(start, end);
    if ( resultMsg === 'Success!') {
        return createMultiTable(start, end);
    } else {
        return resultMsg;
    }
}

function isInputValid(start, end) {
    var checkMsg = '';
    if (!isInputInteger(start) || !isInputInteger(end)) {
        checkMsg = '输入的参数必须均为整数！';
    }else if (!isStartSmaller(start, end)) {
        checkMsg = '第一个参数需要小于第二个参数！';
    }else if (!isInScope(start) || !isInScope(end)) {
        checkMsg = '两个参数均为1-1000之间的正整数！';
    } else {
        checkMsg = 'Success!';
    }
    return checkMsg;
}

function isInputInteger(param) {
    return Number.isInteger(param);
}

function isStartSmaller(start, end) {
    if (start < end) {
        return true;
    } else {
        return false;
    }
}

function isInScope(param) {
    if (param >= 1 && param <= 1000) {
        return true;
    } else {
        return false;
    }
}

function createMultiTable(start, end) {
    let result = '';
    for (let index = start; index <= end; index++) {
        const seperator = index === end ? '' : '\n';
        result = result + getLine(start, index) + seperator;        
    }
    return result;
}

function getLine(start, end) {
    let result = '';
    for (let index = start; index <= end; index++) {       
        result = result + getItem(index, end);       
    }
    return result;   
}

function getItem(start, end) {
    let result = '';
    for (let index = start; index <= end; index++) {
        const seperator = index === end ? '' : '\t';
        result = result + getExpression(index, end) + seperator;       
    }
    return result;
}

function getExpression(firstFactor, secondFactor) {
   return `${firstFactor}*${secondFactor}=${firstFactor*secondFactor}`; 
}

console.log(showMultiTable(2, 4));

module.exports = showMultiTable;