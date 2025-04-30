/**
 * 
 * @param {*} num1 - First number to add.
 * @param {*} num2 - Second number to add.
 * @param {*} add - Boolean value to tell the function what to do.
 * @returns The sum of num1 and num2 if add is true; false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add === true) {
        let result = 0;
        result = num1 + num2;
        return result;
    } else {
        return false;
    }
}

/**
 * 
 * @param {*} prices - An array of original prices.
 * @param {*} discount - A number between 0 and 1 representing the discount.
 * @returns An array of discounted prices, or false if input is invalid.
 */
function discountPrices(prices, discount) {

    if (!Array.isArray(prices) || typeof discount !== 'number') {
        return false;
    }
    if (prices.length === 0) return false;

    const discounted = [];
    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }
    return discounted;
}
module.exports = { sumValues, discountPrices };
