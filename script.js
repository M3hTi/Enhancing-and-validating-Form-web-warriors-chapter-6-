const run = function () {
    const productOrder = document.forms.productOrder
    // console.log(productOrder);
    const chooseModel = productOrder.elements.model
    // console.dir(chooseModel)

    const selectionList = productOrder.querySelectorAll('select')
     console.log(selectionList);

    chooseModel.focus()

    calcOrder()

    function calcOrder(){
        let modelIndex = chooseModel.selectedIndex 
        // console.log(modelIndex);
        let modelPrice = parseFloat(chooseModel.options[modelIndex].value)
        
        

        const quantitySelection = productOrder.elements.quantity
        // console.log(quantity);
        let quantityIndex = quantitySelection.selectedIndex
        let quantity = parseInt(quantitySelection.options[quantityIndex].value)


        let modelCost = productOrder.elements.modelCost
        modelCost.value = (modelPrice * quantity).toFixed(2)


    }

    selectionList.forEach( select => {
        select.addEventListener('change', calcOrder)
    });
    
    
} 
















window.addEventListener('load', run)




