const run = function () {
    const productOrder = document.forms.productOrder
    // console.log(productOrder);
    const chooseModel = productOrder.elements.model
    // console.dir(chooseModel)

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
        modelCost.value = modelPrice * quantity


    }
    
    
} 
















window.addEventListener('load', run)




