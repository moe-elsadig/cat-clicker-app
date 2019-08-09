/* ============ Model ============ */

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name: 'melvin',
            imgSrc: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            imgAttribution: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
            clickCount : 0,
            name: 'chester',
            imgSrc: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            imgAttribution: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
            clickCount : 0,
            name: 'furracious',
            imgSrc: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
            imgAttribution: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        },
        {
            clickCount : 0,
            name: 'Mr Cat',
            imgSrc: 'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            imgAttribution: 'Pexels.com',
        },
    ]
};

/* ============ Octopus ============ */

var octopus = {
    init : function() {
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();    
    },
    getCurrentCat : function() {
        return model.currentCat;
    },
    getCats : function() {
        return model.cats;
    },
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
    incrementCounter : function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};

/* ============ View ============ */

var catView = {
    init : function() {
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click', function(e) {
            octopus.incrementCounter();
        });

        this.render();
    },

    render : function() {
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {
    init: function() {
        this.catListElem = document.getElementById('cat-list');
        this.render();
    },

    render : function() {
        var cats = octopus.getCats();

        this.catListElem.innerHTML = '';

        for (var i = 0; i < cats.length; i++) {
            var cat = cats[i];

            var elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function(cat) {
                return function() {
                    octopus.setCurrentCat(cat);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        };
    }
};

octopus.init();