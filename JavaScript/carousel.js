var currentArrivalPosition = 1;
var currentTrendingPosition = 1;


CarouselArrival(currentArrivalPosition);
CarouselTrending(currentTrendingPosition)


// forward/Back controls
function moveButtonArrival(move) {
  CarouselArrival(currentArrivalPosition += move);
}

function moveButtonTrending(move){
    CarouselTrending(currentTrendingPosition += move)
}


function CarouselArrival(pos) {
    var items = document.getElementsByClassName("arrival-carousel-items");
    var indc = document.getElementsByClassName("arrival-circle");

    if (pos > items.length) {
        currentArrivalPosition = 1
    }
    else if (pos < 1) {
        currentArrivalPosition = items.length
    }

    var i;
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    for (i = 0; i < indc.length; i++) {
        if(i == currentArrivalPosition-1){
        indc[i].style.backgroundColor = "#7C7C7C";
        }else{
        indc[i].style.backgroundColor = "#D2D2D2";
        }
    }
    items[currentArrivalPosition-1].style.display = "block";
} 


function CarouselTrending(pos) {
    var items = document.getElementsByClassName("trending-carousel-items");
    var indc = document.getElementsByClassName("trending-circle");

    if (pos > items.length) {
        currentTrendingPosition = 1
    }
    else if (pos < 1) {
        currentTrendingPosition = items.length
    }

    var i;
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    for (i = 0; i < indc.length; i++) {
        if(i == currentTrendingPosition-1){
        indc[i].style.backgroundColor = "#7C7C7C";
        }else{
        indc[i].style.backgroundColor = "#D2D2D2";
        }
    }
    items[currentTrendingPosition-1].style.display = "block";
} 