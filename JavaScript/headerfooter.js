
var headerNav = document.getElementById("header-navigation-dropdown")

function onHeaderDropdownSelected(){
    switch (headerNav.selectedIndex) {
        case 1:
            window.location.replace("../home.html")
            break;
        case 2:
            window.location.replace("../shoes.html")
            break;
        case 3:
            window.location.replace("../aboutUs.html")
            break;
        case 4:
            window.location.replace("../events.html")
            break;
        case 5:
            window.location.replace("../subscribe.html")
            break;
        default:
            break;
    }
}