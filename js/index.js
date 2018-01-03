function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1969);
}
document.getElementById("age").innerHTML = calculate_age(new Date(2000, 12, 22));
document.getElementById("credit").innerHTML = "ClarkHacks " + new Date().getUTCFullYear() + " &copy;";