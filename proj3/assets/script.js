const TOPICS = ["LOL", "OMG", "LMAO", "G2G", "BRB", "XOXO", "FYI", "MFW", "ILY", "IDC"];

TOPICS.forEach(el => {
    const newButton = $("<button>").attr("class", "btn btn-dark mx-3").text(el);
    $("#button-row").append(newButton);
});

// AJAX to Giphy API with search term
const searchGiphy = term => {
    const KEY = "5Tn2dfjMLEvFaViuDXWY8SJhoVNi7WOv";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${term}&limit=12&rating=pg-13`;
    $("#image-container").empty();
    $.ajax({
      url: URL,
      method: "GET"
    })
    .then(response => {
        response.data.forEach(gif => {
            const gifDiv = $("<div>");
            const para = $("<p>").text("Rating: " + gif.rating);
            para.addClass("my-1");
            const topicImage = $("<img>");
            topicImage.attr("src", gif.images.fixed_width_still.url);
            topicImage.attr("data-state", "still");
            topicImage.attr("data-animate", gif.images.fixed_width.url)
            topicImage.attr("data-still", gif.images.fixed_width_still.url);
            topicImage.attr("class", "giphy-image mx-auto img-fluid");
            gifDiv.append(para);
            gifDiv.append(topicImage);
            gifDiv.addClass("d-inline-block mx-3");
            gifDiv.mouseover(function() {
                topicImage.animate(
                {
                    width: "50vw"
                }, 500);
            });
            gifDiv.mouseleave(function() {
                topicImage.animate(
                {
                    width: "20vw"
                }, 500);
            });
            $("#image-container").prepend(gifDiv);
        });
    });
}

//click handler for start/stop gif playback
$("#image-container").on("click", ".giphy-image", function () {
    const state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})

$("#search-button").on("click", function(e) {
    e.preventDefault();
    const searchTerm = $("#search-field").val();
    searchGiphy(searchTerm);
    const newButton = $("<button>").attr("class", "btn btn-dark mx-3").text(searchTerm);
    $("#button-row").append(newButton);
});

$("#button-row").on("click", ".btn", function() {
    searchGiphy($(this).text());
})