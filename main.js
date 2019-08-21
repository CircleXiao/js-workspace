function showMultiTable (start, end) {
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
    var result = '';
    for (let i = start; i <= end; i++) {
        var lineResult = '';
        for (let j = start; j <= i; j++) {          
            lineResult += (j + '*' + i + '=' + j*i); 
            if (i !== j) {
                lineResult += '\t';
            }
        } 
        result += lineResult + '\n';            
    }
    return result;
}

module.exports = showMultiTable;