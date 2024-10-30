//reduce method

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//reduce function algo:-
//accumulator=0
{
//accumulator=accumulator+currentValue
}
console.log(sum); // Output: 15


const shoppringCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"java course",
        price:3999
    }
]

const totalPrice=shoppringCart.reduce((accumulator,currentValue)=>accumulator+currentValue.price,0)

console.log(totalPrice)