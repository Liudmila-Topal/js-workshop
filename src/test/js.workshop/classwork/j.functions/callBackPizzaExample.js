/*
The orderPizza function in this code is designed to simulate ordering a
pizza and then notifying the customer (or the delivery guy) once the pizza is ready.
It uses a callback function to allow flexible handling of the notification
once the pizza is ready.
 */

orderPizza('vegetarian', 'Sicilian', notifyMe);

/*
The orderPizza function takes three parameters:
    type: The type of pizza (e.g., "Margherita", "Pepperoni").
    name: The specific name of the pizza (e.g., "Classic", "Spicy").
    callback: A function that can be passed as an argument to handle
    the notification when the pizza is ready. This parameter is optional,
    meaning if a callback is not provided, a default message will be logged instead.

 */
function orderPizza(type, name, callback) {
    console.log(`Pizza ${type} ${name} is ordered`);

    setTimeout(function () {
        const msg = `pizza ${type} ${name} is ready`;
        /*
        If a callback function was provided when calling orderPizza, the function
        executes the callback with the message prefixed by "Dear customer, ".
        This way, the calling code can define what to do with this message
        (e.g., display it in a custom format, send a notification, etc.).
        If no callback was provided, the code defaults to logging the message with
        "Delivery guy, " as the prefix.
         */
        if (callback) {
            callback('Dear customer, ' + msg);
        } else {
            console.log('Delivery guy, ' + msg);
        }
    }, 3000);
}

function notifyMe(msg) {
    console.log(msg);
}
