//BUDGET CONTROLLER
var budgetController = (function() {

   

})();

//UI CONTROLLER
var UIController = (function() {



})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
                // 1. Get field input data

        // 2. Add item to budget controller

        // 3. add item to the UI

        // 4. Calculate budget

        // 5. Display Budget on UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);     

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });


})(budgetController, UIController);
