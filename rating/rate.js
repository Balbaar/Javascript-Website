var rating = 0

function clearRating(){
    const rateButtons = document.getElementsByClassName("rate-button-selected");
    for (var i = 0; i < rateButtons.length; i++){
        var button = rateButtons[i]
        if (button.classList.contains("rate-button-selected")){
            button.classList.remove("rate-button-selected")
        }
    }
}

function rateClicked(element, rate){
    clearRating()
    element.classList.add("rate-button-selected")
    rating = element.innerText
    element
}

function submit(){
    console.log(parseInt(rating))
    if (rating == 0){
        confirm("Please take your time and give us a rating.")
    } else{
        ratingDone()
    }
}

function ratingDone(){
    document.getElementsByClassName("rate-container")[0].classList.add("hide")
    document.getElementsByClassName("thankyou-container")[0].classList.remove("hide")
    document.getElementsByClassName("ty-rate")[0].innerText = `You selected ${rating} out of 5`
    
}

