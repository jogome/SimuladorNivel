
 /* 
function displayimage(){
var imag = document.getElementById("img");
imag.src = '../images/pump_station.jpg'';
} 
*/
 function about() {
      document.getElementById("img").innerHTML = "";
      document.getElementById("novo2").innerHTML = "";
      document.getElementById("novo3").innerHTML = "";
      document.getElementById("displayText").innerHTML = "";
      document.getElementById("displayText2").innerHTML = "";
      document.getElementById("displayText3").innerHTML = "";
      document.getElementById("displayText4").innerHTML = "";
      document.getElementById("displayText5").innerHTML = "";

      var text = "<p style='font-weight: 900; font-size: 1.2em'>This is a Simulator</p> In a place where water scarcity is a reality, we have to take some cares in order to avoid wastes. Our main fresh-water source, till now is from sea water that we process with Reverse Osmoses  because ground-water source till now is not enough, due to rain scarcity. This tool (Simulator of Water Transfer and Level Evolution) was made with this sensibility: preventing overfill of fresh-water storage tank that comes from discharging line of desalinators inside the transformation Plant. The water in this tank is transfered by electrical pumps to outside tanks, from where the fresh-water distribution is made by gravity to the citizen's homes.";
      var text2 = text.fontcolor("#999999");
      document.getElementById("novo").innerHTML = text2;
  }


function howto() {
    document.getElementById("img").innerHTML = "";
    document.getElementById("novo").innerHTML = "";
    document.getElementById("novo3").innerHTML = "";
    document.getElementById("displayText").innerHTML = "";
    document.getElementById("displayText2").innerHTML = "";
    document.getElementById("displayText3").innerHTML = "";
    document.getElementById("displayText4").innerHTML = "";
    document.getElementById("displayText5").innerHTML = "";
    var text3 = "1 - Insert actual tank storage level in field: Act. Level.<p>2 - Select the Min and Max desirable level.<p>3 - Put in the production flow value in field RO<p>4 - Select checkbox of pretended pump/pumps<p>5 - Click Simulate button."
    var text4 = text3.fontcolor("#999999");
    document.getElementById("novo2").innerHTML = text4;
}


function informations() {
    document.getElementById("img").innerHTML = "";
    document.getElementById("novo").innerHTML = "";
    document.getElementById("novo2").innerHTML = "";
    document.getElementById("displayText").innerHTML = "";
    document.getElementById("displayText2").innerHTML = "";
    document.getElementById("displayText3").innerHTML = "";
    document.getElementById("displayText4").innerHTML = "";
    document.getElementById("displayText5").innerHTML = "";
    var text5 = "<p style='font-weight: 900; font-size: 1.2em'>Process Auxiliaries,  Lubricants<p style='font-weight: 900'> MED Plant:<p>Air compressor Atlas Copco: Lubarec P100<br> Process Pumps: Shell Turbo 46<br> Electric Motors Bearing: Grease 2<p style='font-weight: 900'><br>ROs Plant:<p>High Pressure Pumps: Tellus 32<br> Air Compressor: Corena P100<br>High Pressure Pump Motor Bearings: Grease 2";
    var text6 = text5.fontcolor("#999999");
    document.getElementById("novo3").innerHTML = text6;
}
