const dataPhone = async(searchPhone, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones, isShowAll)// for passing data to displayPhones function
}

const displayPhones = (phones, isShowAll) =>{
    // console.log(phones);
    // step-1 target div id 
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container card before adding new data
    //phoneContainer.innerHtml =" "
    phoneContainer.textContain = ' ';

    //display show all button if there more than 12 button
    const ShowAllContainer = document.getElementById('show-all-container');
    if(phones.length > 10){
        ShowAllContainer.classList.remove('hidden');
    }
    else{
        ShowAllContainer.classList.add('hidden');
    }

    console.log('is show all',isShowAll);

    // display only 10 phone 
    phones = phones.slice(0,10);
    
    //console.log(phones.length);

    phones.forEach(phone => {
       console.log(phone);

    // step-2 create a div 
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
    // step-3 set innerHtml 
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    `
     //step-4 append child
     phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner 
    toggleLoadingSpinner(false);
   
}

// handle search button 
const handleSearch = (isShowAll) => {
    // console.log('search handle');
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    dataPhone(searchText, isShowAll);
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

// handle show all 
const handleShowAll = () => {
    handleSearch(true);
}

// dataPhone();