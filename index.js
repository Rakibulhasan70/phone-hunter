const searchButton = () => {
    const searchInput = document.getElementById('inputFeild')
    const searchInputText = searchInput.value
    // console.log(searchInputText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))

    searchInput.value = ''
}

const displayPhones = phones => {
    console.log(phones)
    const searchTotal = document.getElementById('searchTotal')
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card mx-auto">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="card-title">Brand Name : ${phone.brand}</h5>
            <p class="card-text">Phone-Name : ${phone.phone_name}</p>
        </div>
    </div>
        `
        searchTotal.appendChild(div);
    });

}