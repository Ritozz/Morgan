$("#btn").click(function(){
    $("#wrapper_slide").hide();
    $("#wrapper_medals").show();
})

$("#medals_btn_back").click(function(){
    $("#wrapper_medals").hide();
    $("#wrapper_slide").show();
})

$("#medals_btn_next").click(function(){
    $("#wrapper_medals").hide();
    $("#wrapper_form").show();
})

$("#form_btn_back").click(function(){
    $("#wrapper_form").hide();
    $("#wrapper_medals").show();
})

$("#form_btn_next").click(function(){
    $("#wrapper_form").hide();
    $("#wrapper_account").show();
})

$("#account_btn_back").click(function(){
    $("#wrapper_account").hide();
    $("#wrapper_form").show();
})

$("#account_btn_next").click(function(){
    $("#wrapper_account").hide();
    $("#wrapper_success").show();
})

$(".btn_cancel").click(function(){
    $(".wrapper_last").hide();
    $("#wrapper_slide").show();
})

$(".btn_unsuccess").click(function(){
    $("#wrapper_unsuccess").hide();
    $("#wrapper_account").show();
})

$(".btn_skip").click(function(){
    $("#wrapper_slide").hide();
    $("#wrapper_medals").show();
})
