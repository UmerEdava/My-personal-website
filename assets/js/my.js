$(document).ready(function(){
    $("#Kerala").css({"color":"#f9735b"})

    $("#contact").validate({
        rules:{
            name:{
                required:true,
                minlength:3,
                maxlength:10
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true
            },
            message:{
                required:true
            }
        }
    })
    
    $("#Kerala").click(function(){
        $("#todayCase").text("6477")
        $("#todayRecovery").text("3481")
        $("#todayDeath").text("22")

        $("#weekCase").text("23421")
        $("#weekRecovery").text("14899")
        $("#weekDeath").text("95")

        $("#totalCase").text("154456")
        $("#totalRecovery").text("107850")
        $("#totalDeath").text("613")

        $(this).css({"color":"#f9735b"})
        $("#India,#World").css({"color":"white"})
    })

    $("#India").click(function(){
        $("#todayCase").text("85720")
        $("#todayRecovery").text("93325")
        $("#todayDeath").text("1093")

        $("#weekCase").text("0000")
        $("#weekRecovery").text("0000")
        $("#weekDeath").text("0000")

        $("#totalCase").text("5908748")
        $("#totalRecovery").text("0000")
        $("#totalDeath").text("94503")

        $(this).css({"color":"#f9735b"})
        $("#Kerala,#World").css({"color":"white"})
    })

    $("#World").click(function(){
        $("#todayCase").text("1111")
        $("#todayRecovery").text("1111")
        $("#todayDeath").text("1111")

        $("#weekCase").text("1111")
        $("#weekRecovery").text("1111")
        $("#weekDeath").text("1111")

        $("#totalCase").text("1111")
        $("#totalRecovery").text("1111")
        $("#totalDeath").text("1111")

        $(this).css({"color":"#f9735b"})
        $("#Kerala,#India").css({"color":"white"})
        
    })
})