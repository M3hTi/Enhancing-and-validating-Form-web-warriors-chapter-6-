const initializeProductOrderForm = function () {
    const productOrder = document.forms.productOrder
    // console.log(productOrder);
    const chooseModel = productOrder.elements.model
    // console.dir(chooseModel)

    const selectionList = productOrder.querySelectorAll('select')
    //  console.log(selectionList);

    const optionRadioElements = productOrder.querySelectorAll('input[type= "radio"]')
    // console.log(optionRadioElements);

    chooseModel.focus()

    calcOrder()

    function calcOrder(){
        const modelIndex = chooseModel.selectedIndex 
        // console.log(modelIndex);
        const modelPrice = parseFloat(chooseModel.options[modelIndex].value)
        

        const quantitySelection = productOrder.elements.quantity
        // console.log(quantity);
        const quantityIndex = quantitySelection.selectedIndex
        const quantity = parseInt(quantitySelection.options[quantityIndex].value)


        const modelCost = productOrder.elements.modelCost
        const modelTotal = modelPrice * quantity;
        modelCost.value = modelTotal.toLocaleString(undefined, {style: 'currency', currency: 'USD'});


        //NOTE: retrieve the cost of the protection plan
        const planValue = parseFloat(document.querySelector('input[name = "plan"]:checked').value)
        
        // NOTE: charge the plan to each item ordered
        const planCost = productOrder.elements.planCost
        // console.log(planCost);

        const planTotal = planValue * quantity;
        planCost.value = planTotal.toLocaleString(undefined, {style: 'currency', currency: 'USD'});


        // NOTE: Calculate the order subtotal
        const subTotal = productOrder.elements.subTotal
        
        const subTotalValue = modelTotal + planTotal;
        subTotal.value = `${(subTotalValue).toLocaleString(undefined, {style: 'currency', currency : 'USD'})}`




        // NOTE: Calculate the 5% sales tax
        const salesTax = productOrder.elements.salesTax
        const taxAmount = subTotalValue * 0.05;
        salesTax.value = taxAmount.toLocaleString(undefined, {style: 'currency', currency: 'USD'});


        //NOTE: Calculate the total cost of the order
        const totalCost = productOrder.elements.totalCost 
        totalCost.value = (subTotalValue + taxAmount).toLocaleString(undefined, {style: 'currency', currency: 'USD'});
    }

    selectionList.forEach( select => {
        select.addEventListener('change', calcOrder)
    });

    optionRadioElements.forEach( option => {
        option.addEventListener('change', calcOrder)
    });
    
    
} 
















window.addEventListener('load', initializeProductOrderForm)




