function searchFood() {
    const searchInput = document.getElementById('searchInput')
    const searchInputText = searchInput.value;
    // console.log(searchInputText)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchFood(data.meals))

    searchInput.value = ''
}

const displaySearchFood = meals => {
    console.log(meals)
    const searchTotal = document.getElementById('searchTotal')
    searchTotal.textContent = ''
    for (const meal of meals) {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
         <div onclick = "loadMealDetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
     `
        searchTotal.appendChild(div)
    }
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    const searchDetails = document.getElementById('searchDetails')
    searchDetails.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go to Youtube</a>
        </div>
    `
    searchDetails.appendChild(div)
}