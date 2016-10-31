/*Custom function*/
function calculateTip () {
    /*Get data into variables*/
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var nbrPeople = document.getElementById("totalPeople").value;

    /*Run validation of having enough data*/
    if (billAmount==="" || serviceQuality==0) {
        window.alert("Please enter data to get this calculator up and running. Thanks!");
        return;
    }

    /*Fix the number of people to be calculated with*/
    if (nbrPeople==="" || nbrPeople<=1) {
        nbrPeople=1;
        document.getElementById("each").style.display="none";
    } else {
        document.getElementById("each").style.display="block";
    }

    /*Calculate the tip*/
    var total=(billAmount * serviceQuality)/nbrPeople;
    total=total.toFixed(2);

    /*Display tip amount*/
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;
}

/*Initialize page by hiding things*/
document.getElementById("totalTip").style.display="none";

/*Trigger calculation*/
document.getElementById("calculate").onclick=function() {calculateTip()};
