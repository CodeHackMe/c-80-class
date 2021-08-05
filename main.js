var student_array=[]
function submit() {
    var display_student_array=[];
   
    for(i=1; i<=4; i++) {
       var name=document.getElementById("name_of_the_student_"+i) .value;
       student_array.push(name);
    }
    console.log(student_array);
    length=student_array.length;
    console.log(legth);
    for(j=0; j<=length-1; j++) {
        display_student_array.push("<h4> name-"+student_array[j]+"</h4>")
    }
    console.log("display_student_array")
    document.getElementById("display_name_with_commas") .innerHTML=display_student_array;
}
