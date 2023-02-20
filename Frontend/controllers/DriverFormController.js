let baseURL = "http://localhost:8080/Backend_war/driver/";

getAllDrivers();

$("#saveDriver").on('click', function () {
    saveDriver();
});

function saveDriver() {
    let formData = $("#driverFormController").serialize();
    $.ajax({
        url: baseURL + "save_driver", method: "post", data: formData, dataType: "json", success: function (res) {
            getAllDrivers();
            clearDriverTxt();
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

function getAllDrivers() {
    $("#driverTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstname = c.name.firstName;
                let lastname = c.name.lastName;
                let address = c.address;
                let drivingLicenseNo = c.drivingLicenseNo;
                let email = c.email;
                let contactNo = c.contactNo;
                let password = c.user.password;
                let driverAvailability = c.driverAvailability;
                let userName = c.user.userName;
                let user_id = c.user.userId;


                let row = "<tr>" + "<td>" + id + "</td>" + "<td>" + firstname + "</td>" + "<td>" + lastname + "</td>" + "<td>" + address + "</td>" + "<td>" + drivingLicenseNo + "</td>" + "<td>" + email + "</td>" + "<td>" + contactNo + "</td>" + "<td>" + password + "</td>" + "<td>" + driverAvailability + "</td>" + "<td>" + userName + "</td>" + "<td>" + user_id + "</td>" + "</tr>";

                $("#driverTableBody").append(row);
            }

            bindRowClickEventsForDriver();            // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$("#deleteDriver").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#id").val(), method: "delete", dataType: "json", success: function (resp) {
            getAllDrivers();
            clearDriverTxt()
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

$("#updateDriver").on('click', function () {

    var driver={
        id: $("#id").val(),//TODO check what can i do for this error
        name:{firstName: $("#firstName").val(),lastName:$('#lastName').val()},
        address:$('#address').val(),
        drivingLicenseNo:$('#drivingLicenseNo').val(),
        email:$('#email').val(),
        contactNo:$('#contactNo').val(),
        user:{userName: $("#userName").val(),userId: $('#userId').val()},
        driverAvailability:$("#driverAvailability").val()
    }

    $.ajax({
        url: baseURL +"update",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(driver),
        dataType: "json",
        success: function (res) {
            getAllDrivers();
            clearDriverTxt();
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

function bindRowClickEventsForDriver() {
    $("#driverTableBody>tr").on('click', function () {
        let id = $(this).children(":eq(0)").text();
        let firstName = $(this).children(":eq(1)").text();
        let lastName = $(this).children(":eq(2)").text();
        let address = $(this).children(":eq(3)").text();
        let email = $(this).children(":eq(5)").text();
        let contactNo = $(this).children(":eq(6)").text();
        let userId = $(this).children(":eq(10)").text();
        let password = $(this).children(":eq(7)").text();
        let driverAvailability = $(this).children(":eq(8)").text();
        let drivingLicenseNo = $(this).children(":eq(4)").text();
        let role = $(this).children(":eq(10)").text();
        let userNamme= $(this).children(":eq(9)").text();

        $('#id').val(id);
        $('#firstName').val(firstName);
        $('#lastName').val(lastName);
        $('#address').val(address);
        $('#email').val(email);
        $('#contactNo').val(contactNo);
        $('#userId').val(userId);
        $('#password').val(password);
        $('#drivingLicenseNo').val(drivingLicenseNo);
        $('#role').val(role);
        $('#userName').val(userNamme);
        $('#driverAvailability').val(driverAvailability);

    });
}

function clearDriverTxt(){
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#address').val("");
    $('#email').val("");
    $('#contactNo').val("");
    $('#userId').val("");
    $('#password').val("");
    $('#drivingLicenseNo').val("");
    $('#role').val("");
    $('#userName').val("");
    $('#driverAvailability').val("");
}

function driValidator(txtField, regXPattern, nextTxtField) {


    $(txtField).on('keyup', function (e) {

            if (regXPattern.test($(txtField).val())) {
                $(txtField).css('border', '3px solid green');


                if (e.key === "Enter" && txtField !== "#userId") {
                    $(nextTxtField).focus();

                } else if (e.key === "Enter" && txtField === "#userId") {
                    saveCustomer();
                    $(nextTxtField).focus();

                } else {
                    return false;
                }

            } else {
                $(txtField).css('border', '3px solid red');
            }
        }
    )
}

driValidator(
    '#id',
    /^(D00)[0-9]{1,4}$/,
    '#address'
)

driValidator(
    '#address',
    /^[A-z]{3,30}$/,
    '#contactNo'
)

driValidator(
    '#contactNo',
    /^(07([1245678])|091)(-)[0-9]{7}$/,
    '#driverAvailability'
)

driValidator(
    '#driverAvailability',
    /^[A-Z]{3,30}$/,
    '#drivingLicenseNo'
)

driValidator(
    '#drivingLicenseNo',
    /^[0-9]{3,10}/,
    '#email'
)

driValidator(
    '#email',
    /^[a-z]{3,30}@gmail.com$/,
    '#firstName'
)

driValidator(
    '#firstName',
    /^[A-z]{3,30}$/,
    '#lastName'
)

driValidator(
    '#lastName',
    /^[A-z]{3,30}$/,
    '#userName'
)

driValidator(
    '#userName',
    /^[A-z]{3,30}$/,
    '#userId'
)

driValidator(
    '#userId',
    /^[0-9]{3,30}$/,
    '#id'
)