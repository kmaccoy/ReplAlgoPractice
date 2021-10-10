  // Find the Discount
  // Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
  
  //Declare a function that takes 2 arguments, the original price and discount percent
  function discounter(price, discount){
    //Declare a variable that holds the amount to discount off the original price.
    let amountToDiscount  = 0;
    //Declare a variable that has the final discounted price.
    let finalDiscountedPrice = 0;
    //Set discount amount by multiplying price by discount amount as a decimal
    amountToDiscount = (discount / 100) * price;
    console.log(amountToDiscount);
    //Set final discount by subtracting the price by the discount amount.
    finalDiscountedPrice = price - amountToDiscount;
    //Return the final discount
    return finalDiscountedPrice;
    };
    // Examples
    //discounter(1500, 50) //➞ 750
    
    //discounter(89, 20) //➞ 71.2
    
    //discounter(100, 75) //➞ 25