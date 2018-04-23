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
    var age1 = age - 1;
    var msg1 = "You are either  " + age + "  years old or " + age1 + "";
    document.getElementById("outputtxt1").innerHTML = msg1;

}


function converter() {

    var degree1 = document.getElementById("degree").value;
    var newdegree = Number(degree1);
    var pai = Math.PI;
    var rad = newdegree * (pai / 180);
    var numb = rad;
    rad = rad.toFixed(2);
    var msg3 = "the Value of " + newdegree + " degree is " + rad + " Radian";
    document.getElementById("degtorad").innerHTML = msg3;

}


function Volume1() {
    var height1 = document.getElementById("height").value;
    var width1 = document.getElementById("width").value;
    var depth1 = document.getElementById("depth").value;
    var newheight = Number(height1);
    var newwidth = Number(width1);
    var newdepth = Number(depth1);

    var area = newheight * newwidth;
    var volume = area * newdepth;
    var msg5 = "the value of the surface is " + area + " and the value of the volume is " + volume;

    // return msg5;
    document.getElementById("Volume2").innerHTML = msg5;
}

///////////////////////////
function error1() {
    try {
        var person = prompts("Please enter your name", "Harry Potter");
        document.getElementById("message").innerHTML = "Hello " + person + "! How are you today?";

    } catch (err) {
        alert(err.message + ",  please check the code");
    }
}

function cap() {
    var str = document.getElementById("cap").value;
    var res = str.charAt(0).toUpperCase();
    document.getElementById("up").innerHTML = res + str.slice(1);
}

function notes() {


    var mth1 = Number(document.getElementById("mth").value);
    var phys1 = Number(document.getElementById("phys").value);
    var eng1 = Number(document.getElementById("eng").value);

    if ((mth1 >= 0 && mth1 <= 100) && (phys1 >= 0 && phys1 <= 100) && (eng1 >= 0 && eng1 <= 100)) {

        var sum, avg;
        sum = mth1 + phys1 + eng1;
        avg = sum / 3;
        avg = avg.toFixed(2);
        document.getElementById("smavg").innerHTML = ("the sum of all grades is :" + sum +" ,and the average is : "+ avg);


    } else {
        alert("please provide a grade between 0 and 100 ");
    }
}


function resize(){

	var w= window.outerWidth;
	var h = window.outerHeight;
	var result = "width is "+ w +" px"+" and hight is "+h + " px";
	document.getElementById("size").innerHTML=result;
}