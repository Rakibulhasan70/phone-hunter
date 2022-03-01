const searchButton = () => {
    const searchInput = document.getElementById('inputFeild')
    const searchInputText = searchInput.value
    const singlePhoneDetails = document.getElementById('singlePhoneDetails')
    singlePhoneDetails.textContent = ''
    // console.log(searchInputText)}
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.data.length === 0) {
                // console.log('something')
                const errorMessage = document.getElementById('error-message')
                errorMessage.classList.remove('d-none')

                const singlePhoneDetails = document.getElementById('singlePhoneDetails')
                singlePhoneDetails.textContent = ''

                const searchTotal = document.getElementById('searchTotal')
                searchTotal.textContent = ''
            }
            else {
                displayPhones(data.data)
                const errorMessage = document.getElementById('error-message')
                errorMessage.classList.add('d-none')
            }
        })

    searchInput.value = ''
}


const displayPhones = phones => {
    console.log(phones)
    const searchTotal = document.getElementById('searchTotal')
    searchTotal.textContent = ''
    phones.slice(0, 20).forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div id="card" class="card mx-auto pt-4 shadow p-3 mb-5 bg-body rounded">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body text-center">
            <h5 class="card-title">Brand Name : ${phone.brand}</h5>
            <p class="card-text">Phone-Name : ${phone.phone_name}</p>
            <button onclick ="buttonDetails('${phone.slug}')" class="px-2 rounded bg-secondary text-white border-1">Details</button>
        </div>
    </div>
        `
        searchTotal.appendChild(div)
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
            <img src="${phones.image}" class="card-img-top w-25 mx-auto pt-4" alt="...">
        <div class="card-body text-center">
            <h4 class="card-text">Device-Name : ${phones.name}</h4>
            <p> Realse Date:${phones.releaseDate ? phones.releaseDate : 'No realse Date Found'}</p>
            <div>
            <h4 > MainFeatures  </h4>
            <p> storage: '${phones.mainFeatures.storage}'</p>
            <p> memory: '${phones.mainFeatures.memory}'</p>
            <p> displaySize: '${phones.mainFeatures.displaySize}'</p>
            <p> chipSet: '${phones.mainFeatures.chipSet}'</p>
        </div>
        <div>
            <h4 > Others  </h4>
            <p> WLAN: '${phones.others ? phones.others.WLAN : 'No result found'}'</p>
            <p> Bluetooth: '${phones.others ? phones.others.Bluetooth : 'No result found'}'</p>
            <p> GPS: '${phones.others ? phones.others.GPS : 'No result found'}'</p>
            <p> NFC: '${phones.others ? phones.others.NFC : 'No result found'}'</p>
            <p> Radio: '${phones.others ? phones.others.Radio : 'undeNo result foundfined'}'</p>
            <p> USB: '${phones.others ? phones.others.USB : 'No result found'}'</p>
        </div>
        <div>
            <h4 > Sensors  </h4>
            <p> sensors: '${phones.mainFeatures.sensors}'</p>
        </div>  
    </div>
    `
    singlePhoneDetails.appendChild(div)
}