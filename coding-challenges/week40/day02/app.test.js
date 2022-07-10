const {isDivisible, isString} = require('./app')


test("Should throw an error if second argument is 0",()=>{
    const result = isDivisible(5,0)
    expect(result).toBe("err")
})
test("Should return a number if arguments are number (except 0)",()=>{
    const num1 = 5
    const num2 = 3
    const result = isDivisible(num1, num2)
    const calc = Math.floor(num1/num2)
    // console.log("test",calc);
    expect(result).toBe(calc)
})

test("Should return a number greater than 1 if the second argument is less than the first argument",()=>{
    const result = isDivisible(5,3)
    expect(result).toBe(1)
})

test("Should return a number less than 0 if the second argument is greater than the first argument",()=>{
    const result = isDivisible(3,5)
    expect(result).toBe(0)
})




const arr = ["Sankalp", "Abhishek", "Roopam", "Vaishnavi", "Shivam", "Srinivas", "Dharam", "Atul"]

test("Should not remove any other strings",()=>{
    const result = isString(arr)
    expect(result).toEqual([ 'Sankalp', 'Shivam', 'Srinivas' ])
})

test("Should remove all “S” strings",()=>{
    const result = isString(arr)
    expect(result).not.toEqual(["Abhishek", "Roopam", "Vaishnavi", "Dharam", "Atul"])
})