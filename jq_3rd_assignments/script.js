$(document).ready(function(){
    $("#btn").click(function() { 
        var txt = $("#first");
        var txt2 = $('#second');
        if (txt.val() != ''){
            if (txt2.val() != ''){

            }else{
                alert('please fill all the fields')
            }
            
        }else{
            alert('please fill all the fields')
        }     
})
});