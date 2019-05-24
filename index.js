/* buildShoppingItemHTML - takes a String item and returns the HTML to build the item
    in the shopping list. */

function buildShoppingItemHTML(item) {

    return shoppingListItemTemplate = `
        <li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`;

}


function shoppingList() {

    // add an item unless the input is empty

    $('#js-shopping-list-form').submit(e => {

        e.preventDefault();
        let item = $('#shopping-list-entry').val();
        if (item !== "") {    
            $('.shopping-list').append(buildShoppingItemHTML(item));
        }
    });


    // delete item in focus

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    // strike or unstrike item depending on state

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').children('span').toggleClass('shopping-item__checked');
    });

}

$(shoppingList);