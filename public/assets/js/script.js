$(function() {
    $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        // let devoured = $(this).data("devouredstate");
        
        let newDevouredState = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            console.log("Burger has been devoured.");
            location.reload();
        });
    });

    $(".burger-form").on("submit", e => {
        e.preventDefault();
        burgerEntry = $("#burger").val().trim();
        if (burgerEntry.length < 1) {
            return;
        }
        let newBurger = {
            burger_name: burgerEntry,
            devoured: 0
        };
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("New burger has been added.");
            location.reload();
        });
    });
});

