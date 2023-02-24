let baseURL = "http://localhost:8080/Backend_war";

getAllPaymentDetails();


$("#save").on('click', function () {


    let formData = $("#paymentForm").serialize();

    $.ajax({
        url: baseURL + "/payment/save_payment",
        method: "post",
        data: formData,
        // contentType: "application/json",
        // data: JSON.stringify(formData),
        dataType: "json",
        success: function (res) {
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
});


function getAllPaymentDetails() {
    $("#paymentTable").empty();
    $.ajax({
        url: baseURL + "/payment/get_all_payment_details", success: function (res) {
            for (let c of res.data) {

                let payment_id = c.paymentId;
                let invoice_no = c.invoiceNo;
                let date = c.paymentDate;
                let booking_id = c.bookingId;
                let payment_type = c.paymentType;
                let amount = c.amount;

                let row = "<tr>" + "<td>" + payment_id + "</td>" + "<td>" + invoice_no + "</td>" + "<td>" + date + "</td>" + "<td>" + booking_id + "</td>" + "<td>" + payment_type + "</td>" + "<td>" + amount + "</td>" + "</tr>";
                $("#paymentTable").append(row);
            }
            // bindRowClickEvents();
            // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}


// bookingId
// driver_req
// pick_up_date
// pick_up_location
// pickup_time
// return_date
// customer_id
loadAllCustomersToCombo();
function loadAllCustomersToCombo() {
    $.ajax({
        url: baseURL + "/payment/get_all_bookings", method: "GET", dataType: "json", success: function (res) {
            for (let booking of res.data) {
                $("#bookingId").append(`<option>${booking.bookingId}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}
$('#bookingId').on('click', function () {
    $.ajax({
        url: baseURL + "/payment/get_all_bookings", method: "GET", dataType: "json", success: function (res) {
            for (let booking of res.data) {
                if (booking.bookingId === $('#bookingId').val()) {
                    $("#driver_req").val(booking.driverRequestType);
                    $("#pick_up_date").val(booking.pickUpDate);
                    $("#pick_up_location").val(booking.pickUpLocation);
                    $("#pickup_time").val(booking.pickUpTime);
                    $("#return_date").val(booking.returnDate);
                    $("#customer_id").val(booking.customer.id);
                }
            }
        }
    });
});