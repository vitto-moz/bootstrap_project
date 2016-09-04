function postContactToGoogle() {
        var email = $('#email').val();
        var name = $('#name').val();
        var tel = $('#tel').val();
        var quantity = $('#quantity').val();

        $.ajax({
            url: "https://docs.google.com/a/localhost:3000/forms/d/1FAIpQLSf8jYDz-JpztjfkQo2aAmuH-x9ef_llsEzkcUW9KtMnNx77MQ/formResponse",
            data: { "entry.100876647": email,
                    "entry.1012862518": name, 
                    "entry.44011731": tel, 
                    "entry.1752406878": quantity },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    window.location.replace("../thankYou.html");
                },
                    200: function () {
                        window.location.replace("../thankYou.html");
                    }
                }
            });
    }
