'use strict';

var recipesController = angular.module('recipesController',[]);


recipesController.controller('recipesController', function($scope) {
    $scope.errormsg = "Your really not paying attention are you {username}? There's no room left on the recipes.";
    $scope.homeeconomics = "Did you know if you order your own cookies you still get the money from the recipe.";

    $scope.current_size = 1300 ; //true || $scope.sizes[0].value;
    $scope.current_volume = {};

    $scope.sizes = [
        { "name" : "enough", "value" : 200, "class" : 'size.enough'},
        { "name" : "lots", "value" : 600, "class" : 'size.lots'},
        { "name" : "heaps", "value" : 1300, "class" : 'size.heaps'},
    ]
    $scope.cookies = [
      {
      "name" : 'choc choc chip',
      "class" : 'choc-choc-chip',
      "ingredients" : [
        {"name" : "Floare", "value" : 250, "class" : "flour", "price" : "00.02"},
        {"name" : "Zahar" , "value" : 200, "class" : "sugar", "price" : "00.04"},
        {"name" : "Unt", "value" : 200, "class" : "butter", "price" : "00.25"},
        {"name" : "Apa", "value" : 50, "class" : "water", "price" : "00.01"},
        {"name" : "Choc Chip", "value" : 100, "class" : "choc-chip", "price" :"00.15"},
        {"name" : "Musli", "value" : 50, "class" : "musli", "price" : "00.20"},
        {"name" : "Stafide", "value" : 50, "class" : "raisens", "price" : "00.15"},
        {"name" : "Nutmeg", "value" : 1, "class" : "nutmeg", "price" :"00.05"},
        {"name" : "Ghimbir", "value" : 1, "class" : "ginger", "price" : "00.05"},
        {"name" : "Sara", "value" : 1, "class" : "salt", "price" : "00.05"},
        {"name" : "Praf de copt", "value" : 0, "class" : "baking-powder", "price" : "00.05"},
        {"name" : "Bicarbonat de Sodiu", "value" : 1, "class" : "baking-powder", "price" : "00.05"},
        ],
      },
      // {
     //  "name" : 'Ginger and Musli',
     //  "class" : 'ginger-musli',
     //  "ingredients" : [
     //     {"name" : "Flour", "value" : 250, "class" : "flour"},
     //     {"name" : "Sugar" , "value" : 220, "class" : "sugar"},
     //     {"name" : "Butter", "value" : 220, "class" : "butter"},
     //     {"name" : "Water", "value" : 10, "class" : "water"},
     //     {"name" : "Choc Chip", "value" : 0, "class" : "choc-chip"},
     //     {"name" : "Musli", "value" : 150, "class" : "musli"},
     //     {"name" : "Raisens", "value" : 50, "class" : "raisens"},
     //     {"name" : "Nutmeg", "value" : 0, "class" : "nutmeg"},
     //     {"name" : "Ginger", "value" : 2, "class" : "ginger"},
     //     {"name" : "Salt", "value" : 1, "class" : "salt"},
     //     {"name" : "Baking powder", "value" : 1, "class" : "baking-powder"},
     //     {"name" : "Bicarbonate of soda", "value" : 0, "class" : "baking-powder"},
     //     ],
      // }
    ];
  $scope.goCookie = 'one';
  $scope.goHome = false;
  
  $scope.cartAdd = function(){
        $('.cook').each(function(index){
            console.log( index + ": " + $( this ).text() );
            $( this ).find('.item_add').trigger('click');
        });
        $scope.goCookie = 'three';
  }
})


// recipe:{
//     id: <object 03>
//     name: super recipe
//     creator <object 05>
//     uses: [
//         {
//             ingredientRef: <object 01>
//             amount: 23
//         }
//     ]
// }

// user:{ 
//     id: <object 05>
//     paypalemail: user@gmail.com
//     recipes: [
//         <object 03>
//     ]
// }

// create Recipe
//     name = formData
//     creator = $scope.currentUser