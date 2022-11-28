// script to complete the survey published in etlab

let option = 2;
let num_options = 5;
$("form#survey-form :input[type=radio]").each(function(){ 
 let input = $(this); 
    if(input.val()%num_options==option){
        input.attr('checked', 'true');
    }
});
