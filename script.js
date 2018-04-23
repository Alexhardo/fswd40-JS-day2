function crystalGazer(ar1, ar2, ar3, ar4) {

    var ar1 = document.getElementById("nmbr").value;
    var ar2 = document.getElementById("ptr").value;
    var ar3 = document.getElementById("geo").value;
    var ar4 = document.getElementById("job").value;

    if (ar1 > 20) {
        alert("we are humans not rabbits, pls stop making love ~~~~ ");
    } else if (ar1 < 0) {
        alert("nobody has a minus kid");
    }
    var msg = "You will be a  " + ar4 + " in " + ar3 + " and married to " + ar2 + " with " + ar1 + " child " + "<br>";
    document.getElementById("outputtxt").innerHTML = msg;
}


function AgeCalculator(by1) {

    var d = new Date();
    var current = d.getFullYear();
    var by = document.getElementById("by1").value;
    var birthyear = Number(by);
    var age = current - birthyear;
    var age1 = age -1;
    var msg1 = "You are either  " + age + "  years old or "+age1+"";
    document.getElementById("outputtxt1").innerHTML = msg1;

}