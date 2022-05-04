const lunar_month =  42524;
const phase1 = 0.0270 ;
const phase2 = 0.2234 ;
const phase3 = 0.2770 ;
const phase4 = 0.4734 ;
const phase5 = 0.5411 ;
const phase6 = 0.7234 ;
const phase7 = 0.7770 ;
const phase8 = 0.9734 ;
var t1 = new Date("2022-04-01 07:24");
var t2 = new Date();
var dif = (( t2.getTime() - t1.getTime() )/60000).toFixed(0);
moonphase();

function moonphase() {
    var phase = dif/lunar_month;
    document.getElementById("phasepercent").innerHTML = phase;
    if(phase < phase1 || phase > phase8) {document.getElementById("moonphase-a").innerHTML = "New Moon"}
    else if(phase < phase2 ) {document.getElementById("moonphase-a").innerHTML = "Waxing crescent"}
    else if(phase < phase3 ) {document.getElementById("moonphase-a").innerHTML = "First quarter"} 
    else if(phase < phase4 ) {document.getElementById("moonphase-a").innerHTML = "Waxing gibbous"}
    else if(phase < phase5 ) {document.getElementById("moonphase-a").innerHTML = "Full Moon"}
    else if(phase < phase6 ) {document.getElementById("moonphase-a").innerHTML = "Waning gibbous"}
    else if(phase < phase7 ) {document.getElementById("moonphase-a").innerHTML = "Third quarter"}
    else if(phase < phase8 ) {document.getElementById("moonphase-a").innerHTML = "Waning crescent"}
}