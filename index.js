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
            <h5 class="card-title">Brand Name : ${phone.data}</h5>
            <p class="card-text">Phone-Name : ${phone.phone_name}</p>
            <button onclick ="buttonDetails('${phone.slug}')" class="px-2 rounded bg-secondary text-white border-1">Details</button>
        </div>
    </div>
        `
        searchTotal.appendChild(div);
    });

}


const buttonDetails = (phoneId) => {
    console.log(phoneId)
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayButtonDetails(data.data))
}

const displayButtonDetails = phones => {
    console.log(phones)
    const singlePhoneDetails = document.getElementById('singlePhoneDetails')
    singlePhoneDetails.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${phones.image}" class="card-img-top  w-25 mx-auto" alt="...">
    <div class="card-body">
        <h4 class="card-text">Device-Name : ${phones.name}</h4>
        <p>${phones.releaseDate ? phones.releaseDate : ''}</p>
    </div>
    `
    singlePhoneDetails.appendChild(div)
}
