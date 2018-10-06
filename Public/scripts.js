
//API DOCUMENTATION: https://developer.edamam.com/edamam-docs-recipe-api
const apiId = "b6a6033e";
const apiKey = "56483a8dee22b885dc4d9e5b19faad1a";

const sampleParam = {
	meal: "breakfast",
	maxIngredients: 8,
	dietLabels: ["balanced", "high-protein"],
	healthLabels: ["peanut-free", "fish-free"],
	calorieRange: "300-600",
	maxTime: "50",
	exclude: ["vinegar", "pretzel"]
}

const createArrayQueryString = (parameter, array) => {
	let subQueryString = "";
	array.forEach((item) => {
		subQueryString += `&${parameter}=${item}`;
	})
	return subQueryString;
}

const createQueryString = (params) => {
	const indexStart = Math.floor(Math.random() * 60);
	const queryString = "https://api.edamam.com/search"
		+`?q=${params.meal}`
		+`&app_id=${apiId}`
		+`&app_key=${apiKey}`
		+`&from=${indexStart}`
		+`&to=${indexStart + 10}`
		+`&ingr=${params.maxIngredients}`
		+`&calories=${params.calorieRange}`
		+`&time=${params.maxTime}`
		+`${createArrayQueryString("diet", params.dietLabels)}`
		+`${createArrayQueryString("health", params.healthLabels)}`
		+`${createArrayQueryString("excluded", params.exclude)}`;
	return queryString;
}



async function recipeSearch(queryString) {
	const resp = await fetch(queryString);
	const json = await resp.json();
	console.log(json);
}