name_of_the_guest_array=[];
var display_guest_array=[];
var display_guest_array_sorting=[];
function submit(){
for(var j=1;j<=4;j++){
 var name_of_the_guest = document.getElementById("name_of_the_student_"+j).value;
console.log(name_of_the_guest);
name_of_the_guest_array.push(name_of_the_guest);
}
console.log(name_of_the_guest_array);
var length_of_name_of_the_guest_array=name_of_the_guest_array.length;
console.log(length_of_name_of_the_guest_array);
for(var k=0;k<length_of_name_of_the_guest_array;k++) {
    display_student_array.push("<h4>name-"+name_of_the_guest_array[k]+"</h4>");

}
console.log(display_guest_array);
document.getElementById("display_name_with_commas").innerHTML=display_guest_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);
    var length_of_name_of_the_guest_array=name_of_the_student_array.length;
    console.log(length_of_name_of_the_guest_array);
    for(var k=0;k<length_of_name_of_the_guest_array;k++) {
        display_guest_array_sorting.push("<h4>name-"+name_of_the_guest_array[k]+"</h4>");
        console.log(display_guest_array_sorting);

    } 
    document.getElementById("display_name_without_commas").innerHTML=display_guest_array_sorting;  
  }