const handlePhnChange = ( isIncrement, item ) => {
    const cartInput = document.querySelector(`.${item}__input`).value
    let phnPrice = 0;
    let phnQuantity = parseInt(cartInput)
    if( isIncrement ) {
        phnQuantity += 1;
    }
    else if( !isIncrement ) {
        phnQuantity -= 1;
        if(phnQuantity < 0) {
            return;
        }
    }
    if(item === 'phn') {
        phnPrice = phnQuantity * 1219; 
    }
    else if(item === 'case') {
        phnPrice = phnQuantity * 59; 
    }
    document.querySelector(`.${item}__input`).value = phnQuantity;
    document.querySelector(`.cart__${item}--price`).innerText = phnPrice;
    priceCalculation();
}
const priceCalculation = () => {
    const phnInput = document.querySelector(`.phn__input`).value
    const caseInput = document.querySelector(`.case__input`).value
    let subTotal;
    subTotal = (phnInput * 1219) + (caseInput * 59);
    const totalTax = (subTotal * 0.1).toFixed(2);
    const totalPrice = parseInt(subTotal) + parseInt(totalTax)
    document.querySelector(".item-subtotal").innerText = subTotal
    document.querySelector(".item-tax").innerText = totalTax
    document.querySelector(".item-total").innerText = totalPrice
}
const handleRemove = (item) => {
    let phnPrice = 0;
    let phnQuantity = 0
    document.querySelector(`.${item}__input`).value = phnQuantity;
    document.querySelector(`.cart__${item}--price`).innerText = phnPrice;
    document.querySelector(`.cart__${item}`).style.display = "none";
    priceCalculation();
}
const checkOut = () => {
    document.querySelector(`.cart`).style.display = "none";
    document.querySelector(`.complete-order`).style.display = 'block'
}