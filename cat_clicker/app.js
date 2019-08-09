$(function() {

    var dummyData = {
        // list of cat names available
        catNames : ["melvin", "marlow", "chester", "squisy", "furracious", "kitking", "mr. cat"],

        // list of cat pictures available
        catPics : ["https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496", "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"],

        // variable to hold the click count for each cat
        cat_counters : []
    };


    
    var model = {
        init: function() {
            // check to see if there are any cats already in storage
            // if not, initialise an empty array and convert to json
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([]);
            }
        },
        // The add function of the model
        add: function(obj) {
            // inialize a variable and load the cats saved in storage
            // by parsing the json data
            var data = JSON.parse(localStorage.cats);
            // push (append) the new data object to the data array variable
            data.push(obj);
            // convert the updated array back to json for storage
            localStorage.cats = JSON.stringify(data);
        },
        // Get all cats stored in the app by parsing the stored json file
        getAllCats: function() {
            return JSON.parse(localStorage.cats);
        },
        // a function to initialise the list with some cats
        loadDummyData : function () {
            for(var i=dummyData.catNames.length-1 ; i>=0 ; i--) {
                var catObj = {
                    name: dummyData.catNames[i],
                    pic: dummyData.catPics[i],
                    counter: 0
                };
                this.add(catObj);
                console.log("pushed the data for: " + catObj.val());
            }
        }
    };

    var octopus = {
        // add_cat
        addNewCat: function(catNameStr, catPicStr) {
            model.add({
                name: catNameStr,
                pic: catPicStr,
                counter: 0
            });

            view.render()
        },
        // remove_cat
        // get_cats
        getAvailableCats: function() {
            return model.getAllCats();
        },
        // init
        init: function() {
            model.init();
            view.init();
            model.loadDummyData();
        }
    };

    var view = {
        // init
        init: function() {
            this.catList = $('#cats');
            var newCatForm = $('#new-car-form');
            var newCatName = $('#new-cat-name');
            var newCatPic = $('#new-cat-img');

            newCatForm.submit(function(e) {
                octopus.addNewCat(newCatName.val(), newCatPic.val());
                
                newCatName.val('');
                newCatPic.val('');

                e.prevenDefault();
            });
            
            view.render();
        },

        // render
        render: function() {
            var htmlStr = '';

            octopus.getAvailableCats().forEach(function(cat) {
                htmlStr += '<h1>' + cat.name + '</h1>';
            });

            this.catList.html( htmlStr );
        }
    };

    octopus.init();
});