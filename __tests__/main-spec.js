// const createMultiTable = require('../main');
const showMultiTable = require('../main');
it ('should show multiplication table from 2 to 4 when call showMultiTable given 2 to 4', () => {
    expect(showMultiTable(2, 4)).toBe('2*2=4\t\n2*3=6\t3*3=9\t\n2*4=8\t3*4=12\t4*4=16\t\n');
}) ;

// it ('should show multiplication table from 0 to 1 when call showMultiTable given 0 to 1', () => {
//     expect(showMultiTable(0, 1)).toBe('2*2=4\t\n2*3=6\t3*3=9\t\n2*4=8\t3*4=12\t4*4=16\t\n');
// }) ;