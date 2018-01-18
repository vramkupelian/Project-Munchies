var APIforEvan = "BgwAiMT";

var allFlavors = [];
var allEffects = [];

function renderFlavorButtons(){
    $(".all-flavor-buttons").empty();
allFlavors.sort();
    for (var i=0; i<allFlavors.length; i++){
        var tempButton = $("<button>");
        tempButton.addClass("flavor-list-item");
        tempButton.addClass("preference");
        tempButton.attr("data-name", allFlavors[i]);
        tempButton.text(allFlavors[i]);
        $(".all-flavor-buttons").append(tempButton);
    }
}

function renderEffectsButtons(){
    $(".all-effect-buttons").empty();
allEffects.sort();
    for (var i=0; i<allEffects.length; i++){
        var tempButton = $("<button>");
        tempButton.addClass("effect-list-item");
        tempButton.addClass("preference");
        tempButton.attr("data-name", allEffects[i]);
        tempButton.text(allEffects[i]);
        $(".all-effect-buttons").append(tempButton);
    }
}

//Hitting All Flavors button
$(".all-flavors").on("click", function(event){
    event.preventDefault();

console.log("all flavors pressed");
   
    var queryURL = "https://strainapi.evanbusse.com/" + APIforEvan + "/searchdata/flavors";
    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);

        for (var i=0; i < response.length; i++){
            allFlavors.push(response[i]);

            
        }

        renderFlavorButtons();
    })
    .fail(function(xhr,status,error){
        console.log(error);
    });

});

//Picking flavor button
$(document).on("click", ".flavor-list-item",function(){
    console.log("you have picked an flavor.");
        var flavor = $(this).attr("data-name");
        console.log(flavor);
    
        var queryURL = "https://strainapi.evanbusse.com/" + APIforEvan +"/strains/search/flavor/" + flavor;
        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET",
        }).done(function(response){
            console.log(response);
        })
    
    });

//Flavor Input Field
$(".flavor-submit").on("click", function(event){
    event.preventDefault();

console.log("flavor pressed");
    var flavor = $(".flavor-input").val().trim();
    var queryURL = "https://strainapi.evanbusse.com/" + APIforEvan +"/strains/search/flavor/" + flavor;
    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);

    })
    .fail(function(xhr,status,error){
        console.log(error);
    });

});

// For strain input field
$(".strain-submit").on("click", function(event){
    event.preventDefault();

console.log("strain pressed");
    var strain = $(".strain-input").val().trim();
    // var pageNumber = 1;
    // var queryURL = "https://api.otreeba.com/v1/strains?page="+ pageNumber + "&count=50&sort=name";

    var queryURL = "https://strainapi.evanbusse.com/" + APIforEvan + "/strains/search/name/" + strain;

//     $.getJSON("https://www.cannabisreports.com/api/v1.0/strains/VUJCJ4TYMG000000000000000", function(data) { 
//     console.log(data);
// });
    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).done(function runData (response){
        
        console.log(response);

    })
    .fail(function(xhr,status,error){
        console.log(error);
    });

});

//All effects button
$(".all-effects").on("click", function(event){
    event.preventDefault();

console.log("all effects pressed");

    var queryURL = "https://strainapi.evanbusse.com/" + APIforEvan + "/searchdata/effects";
    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);

        for (var i=0; i < response.length; i++){
            allEffects.push(response[i].effect);

            
        }

        renderEffectsButtons();
    })
    .fail(function(xhr,status,error){
        console.log(error);
    });

});

//Picking effect button
$(document).on("click", ".effect-list-item",function(){
    console.log("you have picked an effect.");
        var effect = $(this).attr("data-name");
        console.log(effect);
    
        var queryURL = "https://strainapi.evanbusse.com/" + APIforEvan +"/strains/search/effect/" + effect;
        $.ajax({
            dataType: "json",
            url: queryURL,
            method: "GET",
        }).done(function(response){
            console.log(response);
        })
    
    });

//Effect input field
$(".effect-submit").on("click", function(event){
    event.preventDefault();

console.log("effect pressed");

    var effect = $(".effect-input").val().trim();
    var queryURL = "https://strainapi.evanbusse.com/" +APIforEvan + "/strains/search/effect/" + effect;
    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).done(function(response){
console.log(response);

    })
    .fail(function(xhr,status,error){
        console.log(error);
    });

});


