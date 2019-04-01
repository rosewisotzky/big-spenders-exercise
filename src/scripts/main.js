// I am filtering through my array of businesses and then using find to return the businesses that are over 9000.00 into a new array that is stored in the variable bigSpenders.
const bigSpenders = businesses.filter(business => {
    return business.orders.find(order => order > 9000)
})
console.log(bigSpenders)