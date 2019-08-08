
    // list of cat names available
    var cat_names = ["melvin", "marlow", "chester", "squisy", "furracious", "kitking", "mr. cat"];

    // list of cat pictures available
    var cat_pics = ["https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496", "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"];

    // variable to hold the click count for each cat
    var cat_counters = [];
    
    // a function to initialise the counters for each available cat when the page is loaded
    function init_counters() {
        for(var i=cat_names.length-1 ; i>=0 ; i--) {
            cat_counters.push(0);
            console.log(cat_counters)
        }
    }
    // initialise the click counters of the cats available
    init_counters();

    // iterate through the list of available cats
    for (var cat_id = 0; cat_id < cat_names.length ; cat_id++) {

        // create a list item element for the current cat
        var name_elem = document.createElement('li');

        // assign an id for the this element based on the id of the cat
        name_elem.id = 'list_item_' + cat_id;

        // insert the list item element into the full list element
        document.getElementById('cat_list').appendChild(name_elem);

        // add the name to the list item
        document.getElementById('list_item_'+cat_id).innerHTML = cat_names[cat_id];

        // this will house the functionality of when a list item is clicked
        name_elem.addEventListener('click', (function(cat_id_copy){
            return function() {
                // increment the counter value for the selected cat
                cat_counters[cat_id_copy] = cat_counters[cat_id_copy] + 1;

                // update the cat viewer to display the selected cat
                document.getElementById('clicked_cat_name').innerHTML = cat_names[cat_id_copy];
                document.getElementById('clicked_cat_counter').innerHTML = cat_counters[cat_id_copy];
                document.getElementById('clicked_cat_img').src = cat_pics[cat_id_copy%cat_pics.length];
            };
        })(cat_id));
    }