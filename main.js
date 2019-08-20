function showMultiTable (start, end) {
    if (compareInputSize(start, end) && (checkInputRange(start, end))) {
        createMultiTable(start, end);
    } else {
        return null;
    }
}

function compareInputSize (start, end) {
    if (start < end) {
        return true;
    } else {
        return null;
    }
}

function checkInputRange(start, end) {
    if ((start < 1 || start > 1000) || (end < 1 || end > 1000)) {
        return false;
    } else {
        return true;
    }
}

function createMultiTable(start, end) {
    var result = '';
    for (let i = start; i <= end; i++) {
        var lineResult = '';
        for (let j = start; j <= i; j++) {          
            lineResult += (j + '*' + i + '=' + j*i + '\t'); 
        } 
        result += lineResult + '\n';            
    }
    return result;
}

// console.log(showMultiTable(2, 4));
console.log(createMultiTable(2, 4));
module.exports = createMultiTable;
// module.exports = showMultiTable;