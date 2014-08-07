// Ingredients

eshoprShop.factory("Ingredient", function($resource) {
    return $resource("/api/ingredients/:id");
});

eshoprShop.controller("IngredientsList", function($scope, Ingredient) {
    console.log(Ingredient);
    $scope.ingredients = 'test';
    Ingredient.query(function(data) {
        $scope.ingredients = data;
    });
})
.controller("IngredientShow", function($scope, Ingredient) {
    Ingredient.get({ id: 1 }, function(data) {
        $scope.ingredient = data;
    });
// })
// .controller("IngredientSave", function($scope, Ingredient) {
//     Ingredient.save(data);
// })
// .controller("IngredientDelete", function($scope, Ingredient) {
//     Ingredient.delete({id: id});
});
