// function showMessage(){
//     //innerhtml - over writing the existing text.
//     document.getElementById("text").innerHTML="Text has been changed.";
//     //or
//     //document.getElementById("text").textContent="Text has been changed";
// }
function multino(){
    var num1 = parseFloat(document.getElementById("num1").value);   
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum=num1+num2;
    // window.alert("The sum is " +difference)
    document.getElementById("result").innerHTML="The sum is " +sum;
   
}