// script to complete the survey published in etlab

let option = 2;
$("form#survey-form :input[type=radio]").each(function(){ 
 let input = $(this); 
    if(input.val()%5==option){
        input.attr('checked', 'true');
    }
});
