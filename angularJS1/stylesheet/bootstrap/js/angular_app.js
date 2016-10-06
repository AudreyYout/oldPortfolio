var myApp = angular
			.module("bananaProject",[])
			.controller("myController", function($scope){

				var recipes = [

				{	date:"22/10/2014",
					name:"Banana Cake",
					img: "img/img_banana_recipes/banana_cake.jpg",
					preparationTime:"45 min",
					level:"easy",
					Type:"Dessert",
					ingredients:[
						{ name:"butter", quantity: "125g"},
						{ name:"caster sugar", quantity: "150g"},
						{ name:"vanilla extract", quantity: "1 teaspoon"},
						{ name:"egg, beaten", quantity: "1"},
						{ name:"very ripe bananas, mashed", quantity: "2"},
						{ name:"self raising flour", quantity: "190g"},
						{ name:"milk", quantity: "60ml"}
					],
					methode:[
					{ step1:"1-Grease and line a 2lb loaf tin. Melt butter, sugar and vanilla in a saucepan over a medium heat."},
					{ step2:"2-Remove from heat and add the mashed bananas, mix well."},
					{ step3:"3-Add the egg, mix well." },
					{ step4:"4-Stir in the flour and the milk." },
					{ step5:"5-Pour into the prepared tin, sprinkle with a tablespoon of demerara sugar to give a crunch topping if liked."},
					{ step6:"6-Bake at 170 C / Fan 150 C / Gas 3 for 35 minutes, or until a skewer comes out clean. Leave to cool and enjoy!" }
					]
			
				},

					{
					date:"22/09/2014",
					name:"Banofee Pie",
					img: "img/img_banana_recipes/banofee_pie.jpg",
					preparationTime:"3 hours 30 min",
					level:"easy",
					Type:"Dessert",
					ingredients:[
						{ name:"tin full cream condensed milk", quantity: "397g"},
						{ name:"butter", quantity: "125g"},
						{ name:"crushed good quality shortbread fingers", quantity: "250g (9 oz)"},
						{ name:"bananas", quantity: "2"},
						{ name:"pot double cream, whipped", quantity: "1 (284ml)"},
						{ name:"Flake bar, crumbled (to decorate)", quantity: "1"}
					],
					methode:[
					{ step1:"1-To make the caramel: Bring a saucepan 3/4 filled with water to a boil and put the can of milk in it. Simmer in the boiling water for 3 hours, paying attention to add water for when it evaporates. When opened, it will transform in caramel."},
					{ step2:"2-To make the base: Melt the butter in a large saucepan and stir in the crushed shortbread of your choice."},
					{ step3:"3-Press into the base and sides of 23 cm cake or flan tin. Chill for about 40 minutes." },
					{ step4:"4-Pour the caramel over biscuit base, let it cool. Meanwhile, slice the bananas and arrange on top of the layer of caramel.", },
					{ step5:"5-Chill for about an hour until firm."},
					{ step6:"6-Decorate with whipped cream and a crumbled flake. Add more freshly sliced banana, if you like!"}
					]
			
				},

					{
					date:"04/05/2013",
					name:"Banana Milkshake",
					img: "img/img_banana_recipes/banana_milkshake.jpg",
					preparationTime:"10 min",
					level:"easy",
					Type:"Drink",
					ingredients:[
						{ name:"medium frozen bananas", quantity: "2"},
						{ name:"vanilla ice cream", quantity: "2 scoops"},
						{ name:"sprinkling ground cinnamon", quantity: "generous"},
						{ name:"honey", quantity: "1 teaspoon"},
						{ name:"milk", quantity: "3/4 glass"},
						{ name:"chocolate milk power (optional)", quantity: "few scoops"}
						
					],
					methode:[
					{ step1:"1-Throw bananas, ice cream, cinnamon, honey, milk and chocolate powder (if using) into a blender and blitz until smooth (hand blenders work great too). Serve immediately.."}
					]
			
				},

					{
					date :"09/08/2014",
					name:"Banana Lassi",
					img: "img/img_banana_recipes/banana_lassi.jpg",
					preparationTime:"10 min",
					level:"easy",
					Type:"Drink",
					ingredients:[
						{ name:"ripe bananas, broken into pieces", quantity: "2"},
						{ name:"plain yoghurt", quantity: "225g"},
						{ name:"milk, or more as needed", quantity: "80ml"},
						{ name:"ice cubes", quantity: "2"},
						{ name:"caster sugar, or to taste", quantity: "2 tablespoons"}
						
					],
					methode:[
					{ step1:"1-Blend bananas, yoghurt, milk, ice cubes and sugar together in a blender until smooth."}
					]
			
				},

					{
					date:"23/01/2015",
					name:"Banana Chicken",
					img: "img/img_banana_recipes/chicken-sambal.jpg",
					preparationTime:"1 hour",
					level:"Difficult",
					Type:"Main Course",
					ingredients:[
						{ name:"large onions quartered", quantity: "2"},
						{ name:"garlic clove", quantity: "4"},
						{ name:"ginger, peeled and roughly chopped", quantity: "thumb-sized piece"},
						{ name:"reduced-salt chicken stock", quantity: "600ml"},
						{ name:"ground coriander", quantity: "1 teaspoon"},
						{ name:"ground cumin", quantity: "1 teaspoons"},
						{ name:"ground turmeric", quantity: "½ teapoons"},
						{ name:"green cardamom pod", quantity: "4"},
						{ name:"large red chilli, deseeded and finely chopped", quantity: "1"},
						{ name:"ground almond", quantity: "2 tablespoons"},
						{ name:"tomato purée", quantity: "2 tablespoons"},
						{ name:"skinless chicken breast, cubed", quantity: "500g"},
						{ name:"coriander, chopped", quantity: "small pack"},
						{ name:" small red onion, finely chopped", quantity: "2"},
						{ name:"cucumber, peeled, deseeded and diced", quantity: "½"},
						{ name:"small bananas, diced", quantity: "2"},
						{ name:"lime (zest and juice)", quantity: "1"},
						{ name:"ready-cooked brown basmati rice", quantity: "500g"}

					],
					methode:[
					{ step1:"1-Put the onions in a food processor with the garlic and ginger. Blitz until it is as smooth as possible, then pour in half the stock and blitz again."},
					{ step2:"2-Heat a large non-stick pan, sprinkle in the spices and toast for 1 min. Pour in the onion mixture, the remaining stock and all but ½ tsp of the chopped chilli. Add the almonds and tomato purée, and stir well. Simmer for 35 mins until completely soft, stirring every now and then and adding a little water if the mixture starts to catch on the bottom of the pan."},
					{ step3:"3-Add the chicken and half the fresh coriander. Heat very gently for 10 mins to cook the chicken through. Mix all the sambal ingredients with the remaining coriander and chilli, and heat the rice following pack instructions. Serve the chicken and sambal with the brown rice." }
					]
			
				},
	
				];
			

				$scope.recipes = recipes;
				$scope.sortRecipes = "name";

				$scope.dishTypes = {	
    				"values": [ "Drink", "Main Course", "Dessert"] 
  					};

  					$scope.difficulty = {	
    				"values": [ "Difficult", "Easy", "Average"] 
  					};

  			  
           		



			  


				

								

			



				



				



				
			/*fin du controller	*/
			});








	