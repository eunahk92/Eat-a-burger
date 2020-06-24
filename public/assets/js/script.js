$(function() {
    $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        
        let newDevouredState = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            console.log(`Burger #${id} has been devoured.`);
            location.reload();
        });
    });

    $(".burger-form").on("submit", function(event) {
        event.preventDefault();
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

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log(`Burger #${id} has been deleted.`);
            location.reload();
        });
    });
});

