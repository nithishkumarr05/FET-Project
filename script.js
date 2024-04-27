var LaptopOrder = /** @class */ (function () {
    function LaptopOrder() {
        this.init();
    }
    LaptopOrder.prototype.init = function () {
        var submitBtn = document.getElementById("submitBtn");
        if (submitBtn) {
            submitBtn.addEventListener("click", this.orderLaptop);
        }
    };
    LaptopOrder.prototype.orderLaptop = function () {
        var name = document.getElementById("t1").value;
        var num = document.getElementById("t2").value;
        var add = document.getElementById("t3").value;
        var pin = document.getElementById("t4").value;
        var email = document.getElementById("t5").value;
        var sto = document.getElementById("t6").value;
        var mod = document.getElementById("t7").value;
        var col = document.getElementById("t8").value;
        if (name === '') {
            return;
        }
        $.ajax({
            type: "POST",
            url: "process_order.php",
            data: {
                name: name,
                phone: num,
                address: add,
                pincode: pin,
                email: email,
                storage: sto,
                model: mod,
                color: col
            },
            success: function (response) {
                window.location.href = "display_order.html" + response;
            },
            error: function () {
                console.error("Error submitting the form");
            }
        });
    };
    return LaptopOrder;
}());
new LaptopOrder();
