// const showMultiTable = require('../main');
const showMultiTable = require('../mainVersion2');
it ('should show multiplication table from 2 to 4 when call showMultiTable given 2 to 4', () => {
    expect(showMultiTable(2, 4)).toBe('2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16');
}) ;

it ('should show multiplication table from 2 to 5 when call showMultiTable given 2 to 5', () => {
    expect(showMultiTable(2, 5)).toBe('2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n2*5=10\t3*5=15\t4*5=20\t5*5=25');
}) ;

it ('should show multiplication table from 0 to 1 when call showMultiTable given 0 to 1', () => {
    expect(showMultiTable(0, 1)).toBe('两个参数均为1-1000之间的正整数！');
}) ;

it ('should show multiplication table from 3 to 2 when call showMultiTable given 3 to 2', () => {
    expect(showMultiTable(3, 2)).toBe('第一个参数需要小于第二个参数！');
}) ;

it ('should show multiplication table from 1.1 to 2.1 when call showMultiTable given 1.1 to 2.1', () => {
    expect(showMultiTable(1.1, 1.1)).toBe('输入的参数必须均为整数！');
}) ;