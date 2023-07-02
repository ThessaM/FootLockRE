
var openDisplay = document.getElementById("shoes-selection-open")
var closeDisplay = document.getElementById("shoes-selection-close")


function openSelection(){
    // var openDisplay = document.getElementById("shoes-selection-open")
    // var closeDisplay = document.getElementById("shoes-selection-close")

    openDisplay.style.display = "none"
    closeDisplay.style.display = "block"
}


function closeSelection(){
    // var openDisplay = document.getElementById("shoes-selection-open")
    // var closeDisplay = document.getElementById("shoes-selection-close")

    openDisplay.style.display = "block"
    closeDisplay.style.display = "none"
}


var sortDropDown = document.getElementById("shoe-sort-dropdown")
var atoZContainer = document.getElementById("shoe-sort-detail-name")
var hightoLowContainer = document.getElementById("shoe-sort-detail-price")
var sortSwitchButton = document.getElementById("sort-switch-button")


function sortDropDownOnChanged(){
    // var sortDropDown = document.getElementById("shoe-sort-dropdown")
    // var atoZContainer = document.getElementById("shoe-sort-detail-name")
    // var hightoLowContainer = document.getElementById("shoe-sort-detail-price")
    // var sortSwitchButton = document.getElementById("sort-switch-button")
    if(sortDropDown.selectedIndex == 0){
        // default
        atoZContainer.style.display = "none"
        hightoLowContainer.style.display = "none"
        sortSwitchButton.style.display = "none"
        
    }else if(sortDropDown.selectedIndex == 1){
        //name
        atoZContainer.style.display = "block"
        hightoLowContainer.style.display = "none"
        sortSwitchButton.style.display = "block"
    }else{
        //price
        atoZContainer.style.display = "none"
        hightoLowContainer.style.display = "block"
        sortSwitchButton.style.display = "block"
    }
}


function sortButtonOnClick(){
    // var sortDropDown = document.getElementById("shoe-sort-dropdown")
    // var atoZContainer = document.getElementById("shoe-sort-detail-name")
    // var hightoLowContainer = document.getElementById("shoe-sort-detail-price")

    if(sortDropDown.selectedIndex == 1){
        //name
        if(atoZContainer.innerHTML == "A to Z"){
            atoZContainer.innerHTML = "Z to A"
        }else{
            atoZContainer.innerHTML = "A to Z"
        }
    }else{
        //price
        if(hightoLowContainer.innerHTML == "High to Low"){
            hightoLowContainer.innerHTML = "Low to High"
        }else{
            hightoLowContainer.innerHTML = "High to Low"
        }
    }

}


// var addButton = document.getElementById("addButton")
// var addedButton = document.getElementById("addedButton")

var addButton = document.getElementsByClassName("shoe-content-card-button-add")
var addedButton = document.getElementsByClassName("shoe-content-card-button-added")


function addButtonOnCLick(ind){  
    addButton[ind].style.display = "none"
    addedButton[ind].style.display = "flex"
}

function addedButtonOnCLick(ind){
    addButton[ind].style.display = "flex"
    addedButton[ind].style.display = "none"
}

// var favoriteOutlineButton = document.getElementById("favoriteOutline")
// var favoriteFillButton = document.getElementById("favoriteFill")

var favoriteOutlineButton = document.getElementsByClassName("shoe-content-card-favorite-outline")
var favoriteFillButton = document.getElementsByClassName("shoe-content-card-favorite-fill")

function favoriteOutlineOnClick(ind){
    favoriteOutlineButton[ind].style.display = "none"
    favoriteFillButton[ind].style.display = "block"
}

function favoriteFillOnClick(ind){
    favoriteOutlineButton[ind].style.display = "block"
    favoriteFillButton[ind].style.display = "none"
}

