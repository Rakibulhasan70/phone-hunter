const searchButton = () => {
    const searchInput = document.getElementById('inputFeild')
    const searchInputText = searchInput.value
    // console.log(searchInputText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data))

    searchInput.value = ''
}

const displayPhones = phones => {
    // console.log(phones)


}