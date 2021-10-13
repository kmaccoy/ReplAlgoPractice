  // Find the Discount
  // Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
  
  //Declare a function that takes 2 arguments, the original price and discount percent
  //Declare a variable that holds the amount to discount off the original price.
  //Declare a variable that has the final discounted price.
  //Set discount amount by multiplying price by discount amount as a decimal
  //Set final discount by subtracting the price by the discount amount.
  //Return the final discount

  function discounter(price, discount){
    let amountToDiscount  = 0;
    let finalDiscountedPrice = 0;
    amountToDiscount = (discount / 100) * price;
    console.log(amountToDiscount);
    finalDiscountedPrice = price - amountToDiscount;
    return finalDiscountedPrice;
  };

    // Examples
    //discounter(1500, 50) //➞ 750
    
    //discounter(89, 20) //➞ 71.2
    
    //discounter(100, 75) //➞ 25