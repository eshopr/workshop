var _ =           require('underscore')
    , path =      require('path')
    , passport =  require('passport')
    , mongoose =  require('mongoose')
    , AuthCtrl =  require('./controllers/auth')
    , UserCtrl =  require('./controllers/user')
    , User =      require('./models/User.js')
    , userRoles = require('../client/js/routingConfig').userRoles
    , accessLevels = require('../client/js/routingConfig').accessLevels;

// define model =================
var Ingredient = mongoose.model('Ingredient', {
    sku : String,
    productName : String,
    price : String,
    inventory : String,
    image: String,
});

var Recipe = mongoose.model('Recipe', {
    name : String,
    creator: String,
    bom: [{material_id:String, quantity:String, active:String}],
});

var routes = [

    // Views
    {
        path: '/partials/*',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            var requestedView = path.join('./', req.url);
            res.render(requestedView);
        }]
    },

    // API
    {
        path: '/api',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            // var requestedView = path.join('./', req.url);
            res.send('Not Cookied API is running');
            // res.render(requestedView);
        }],
        accessLevel: accessLevels.public
    },
    // Return all ingredients
    {
        path: '/api/ingredients',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            Ingredient.find(function(err, ingredients) {
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err)
                        res.send(err)
                    res.json(ingredients); // return all ingredients in JSON format
            });
        }],
        accessLevel: accessLevels.public
    },
    // Create a new ingredient
    {
        path: '/api/ingredients',
        httpMethod: 'POST',
        middleware: [function (req, res) {
            console.log('worsks')
            console.log(req.body);
            console.log('still not crashed');
            var ingredient = new Ingredient(); 
            ingredient.sku= req.body.sku;  
            ingredient.productName= req.body.productName;
            ingredient.price= req.body.price;
            ingredient.inventory= req.body.inventory;
            ingredient.image= req.body.image;
            //save the ingredient and check for errors
            ingredient.save(function(err) {
                if (err)
                    res.send(err);
            });
                          // get and return all the ingredients after you ADD one
            // ingredient.find(function(err, ingredients) {
            //     if (err)
            //       res.send(err)
            //     res.json(ingredients);
            // });
        }],
        accessLevel: accessLevels.public
    },
     /** CREATE Unit Test - jquery.post should add something to the database
          ******************************
        jQuery.post("/api/ingredients", {
            "sku" : "String",
            "productName" : "String",
            "price": "String",
            "inventory": "String",
            "image": "String",
          }, function (data, textStatus, jqXHR) { 
              console.log("Post response:"); console.dir(data); console.log(textStatus); console.dir(jqXHR); 
          });
          *****************************
          / Works 0.0.1 */
    {
        path: '/api/ingredients/:ingredient_id',
        httpMethod: 'DELETE',
        middleware: [function (req, res) {
            console.log(req.params);
            Ingredient.remove({
                    _id : req.params.ingredient_id
                }, function(err, ingredient) {
                    console.log(ingredient);
                    if (err)
                        res.send(err);
                        // res.json(ingredients});
            });
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/ingredients/:ingredient_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            console.log(req.params);
            Ingredient.find({
                    _id : req.params.ingredient_id
                }, function(err, ingredient) {
                    console.log(ingredient);
                    if (err)
                        res.send(err);
                    res.json(ingredient);
            });
        }],
        accessLevel: accessLevels.public
    },

    {
        path: '/api/ingredients/:ingredient_id',
        httpMethod: 'PUT',
        middleware: [function (req, res) {
            console.log(req.params);
            Ingredient.find({
                    _id : req.params.ingredient_id
                }, function(err, ingredient) {
                    console.log(ingredient);
                    if (err)
                        res.send(err);
                    res.json(ingredient);
            });
        }],
        accessLevel: accessLevels.public
    },


    // Get all recipes
    {
        path: '/api/recipes',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            Recipe.find(function(err, recipes) {
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err)
                        res.send(err)
                    res.json(recipes); // return all ingredients in JSON format
            });
        }],
        accessLevel: accessLevels.public
    },

    // Create a new recipe
    {
        path: '/api/recipes',
        httpMethod: 'POST',
        middleware: [function (req, res) {
            console.log('new recipe req.body:-------');
            console.log(req.body);
            console.log("req.body.name:------");
            console.log(req.body.name);
            console.log("req.body.creator-----");
            console.log(req.body.creator);
            console.log("req.body.bom-------");
            console.log(req.body.bom);
            var recipe = new Recipe(); 
            recipe.name= req.body.name;  
            recipe.creator= req.body.creator;
            recipe.bom= req.body.bom;
            //save the recipe and check for errors
            recipe.save(function(err) {
                if (err)
                    res.send(err);
            });
        }],
        accessLevel: accessLevels.public
    },

    // return a individual recipe
    {
        path: '/api/recipes/:recipe_id',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            console.log(req.params);
            Recipe.find({
                    _id : req.params.recipe_id
                }, function(err, recipe) {
                    console.log(recipe);
                    if (err)
                        res.send(err);
                    res.json(recipe);
            });
        }],
        accessLevel: accessLevels.public
    },

    // OAUTH
    {
        path: '/auth/twitter',
        httpMethod: 'GET',
        middleware: [passport.authenticate('twitter')]
    },
    {
        path: '/auth/twitter/callback',
        httpMethod: 'GET',
        middleware: [passport.authenticate('twitter', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },
    {
        path: '/auth/facebook',
        httpMethod: 'GET',
        middleware: [passport.authenticate('facebook')]
    },
    {
        path: '/auth/facebook/callback',
        httpMethod: 'GET',
        middleware: [passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },
    {
        path: '/auth/google',
        httpMethod: 'GET',
        middleware: [passport.authenticate('google')]
    },
    {
        path: '/auth/google/return',
        httpMethod: 'GET',
        middleware: [passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },
    {
        path: '/auth/linkedin',
        httpMethod: 'GET',
        middleware: [passport.authenticate('linkedin')]
    },
    {
        path: '/auth/linkedin/callback',
        httpMethod: 'GET',
        middleware: [passport.authenticate('linkedin', {
            successRedirect: '/',
            failureRedirect: '/login'
        })]
    },

    // Local Auth
    {
        path: '/register',
        httpMethod: 'POST',
        middleware: [AuthCtrl.register]
    },
    {
        path: '/login',
        httpMethod: 'POST',
        middleware: [AuthCtrl.login]
    },
    {
        path: '/logout',
        httpMethod: 'POST',
        middleware: [AuthCtrl.logout]
    },

    // User resource
    {
        path: '/users',
        httpMethod: 'GET',
        middleware: [UserCtrl.index],
        accessLevel: accessLevels.admin
    },

    // All other get requests should be handled by AngularJS's client-side routing system
    {
        path: '/*',
        httpMethod: 'GET',
        middleware: [function(req, res) {
            var role = userRoles.public, username = '';
            if(req.user) {
                role = req.user.role;
                username = req.user.username;
            }
            res.cookie('user', JSON.stringify({
                'username': username,
                'role': role
            }));
            res.render('index');
        }]
    }
];

module.exports = function(app) {

    _.each(routes, function(route) {
        route.middleware.unshift(ensureAuthorized);
        var args = _.flatten([route.path, route.middleware]);

        switch(route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });
}

function ensureAuthorized(req, res, next) {
    var role;
    if(!req.user) role = userRoles.public;
    else          role = req.user.role;
    var accessLevel = _.findWhere(routes, { path: req.route.path, httpMethod: req.route.stack[0].method.toUpperCase() }).accessLevel || accessLevels.public;

    if(!(accessLevel.bitMask & role.bitMask)) return res.send(403);
    return next();
}
