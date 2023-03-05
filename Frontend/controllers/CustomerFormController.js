let baseURL = "http://localhost:8080/Backend_war";

getAllCustomers();
// genarateID();
let cusIdOG ;
let corntNumber;
let getSplitId;
let genaratedValue;
$("#saveCustomer").on('click', function () {
    saveCustomer();
});

function saveCustomer() {
    let formData = $("#CustomerFormController").serialize();
    $.ajax({
        url: baseURL + "/customer/save_customer",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
            getAllCustomers();
            alert(res.message);
        },
        error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

$("#updateCustomer").on('click', function () {

    alert(cusIdOG);

    let id = $('#id').val();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let address = $('#address').val();
    let email = $('#email').val();
    let contactNo = $('#contactNo').val();
    let user_id = $('#userId').val();
    let password = $('#password').val();
    let nic = $('#nic').val();
    let drivingLicenceNo = $('#drivingLicenseNo').val();
    let role = $('#role').val();
    let userName = $('#userName').val();

    var customerObj = {
        id: id,
        name: {firstName: firstName, lastName: lastName},
        address: address,
        email: email,
        contactNo: contactNo,
        user: {userName: userName, userId: user_id, password: password, role: role},
        nic: nic,
        drivingLicenseNo: drivingLicenceNo,
    }

    $.ajax({
        url: baseURL + "/customer/update_customer",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(customerObj),
        dataType: "json",
        success: function (res) {
            clearTextFields();
            getAllCustomers();
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

$("#deleteCustomer").on('click', function () {
    $.ajax({
        url: baseURL + "/customer/?code=" + $("#id").val(),
        method: "delete",
        dataType: "json",
        success: function (resp) {
            clearTextFields();
            getAllCustomers();
            alert(resp.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});



function genarateCusID() {
     getSplitId=cusIdOG.split("-");
    corntNumber=getSplitId[1];
     let count=parseInt(corntNumber);
     $('#id').val("C00-"+(count+1));
    genaratedValue =$('#id').val();
}


function getAllCustomers() {
    $("#customerTableBody").empty();
    $.ajax({
        url: baseURL + "/customer/get_all", success: function (res) {
            for (let c of res.data) {

                cusIdOG=c.id;

                let id = c.id;
                let firstName = c.name.firstName;
                let lastName = c.name.lastName;
                let address = c.address;
                let email = c.email;
                let contactNo = c.contactNo;
                let user_name = c.user.userName;
                let nic = c.nic;
                let drivingLicenceNo = c.drivingLicenseNo;
                let role = c.user.role;
                let user_id = c.user.userId;
                let password = c.user.password;


                let row = "<tr>" + "<td>" + id + "</td>" + "<td>" + firstName + "</td>" + "<td>" + lastName + "</td>" + "<td>" + address + "</td>" + "<td>" + email + "</td>" + "<td>" + contactNo + "</td>" + "<td>" + user_name + "</td>" + "<td>" + password + "</td>" + "<td>" + nic + "</td>" + "<td>" + drivingLicenceNo + "</td>" + "<td>" + role + "</td>" + "<td>" + user_id + "</td>" + "</tr>";
                $("#customerTableBody").append(row);
            }
            bindRowClickEvents();
            clearTextFields();
            genarateCusID();
            // alert(c);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

function bindRowClickEvents() {
    $("#customerTableBody>tr").on('click', function () {
        let id = $(this).children(":eq(0)").text();
        let firstName = $(this).children(":eq(1)").text();
        let lastName = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(3)").text();
        let email = $(this).children(":eq(4)").text();
        let contactNo = $(this).children(":eq(5)").text();
        let userName = $(this).children(":eq(6)").text();
        let password = $(this).children(":eq(7)").text();
        let nic = $(this).children(":eq(8)").text();
        let drivingLicenseNo = $(this).children(":eq(9)").text();
        let role = $(this).children(":eq(10)").text();
        let userId = $(this).children(":eq(11)").text();


        $('#id').val(id);
        $('#firstName').val(firstName);
        $('#lastName').val(lastName);
        $('#address').val(address);
        $('#email').val(email);
        $('#contactNo').val(contactNo);
        $('#userName').val(userName);
        $('#password').val(password);
        $('#nic').val(nic);
        $('#drivingLicenseNo').val(drivingLicenseNo);
        $('#role').val(role);
        $('#userId').val(userId);


        //TODO image repeating problem *******

        $("#imgLoader").empty();
        $("#imgLoader2").empty();
        let key = $(this).children(":eq(0)").text();

        const url = localStorage.getItem(key + "1stPhoto");
        const img = new Image();
        img.src = url;
        $("#imgLoader").append(img);


        const url2 = localStorage.getItem(key + "2stPhoto");
        const img2 = new Image();
        img2.src = url2;
        $("#imgLoader2").append(img2);;
    });
}

function clearTextFields() {
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#address').val("");
    $('#email').val("");
    $('#contactNo').val("");
    $('#userName').val("");
    $('#password').val("");
    $('#nic').val("");
    $('#drivingLicenseNo').val("");
    $('#role').val("");
    $('#userId').val("");
}

loadAllDriversToCombo();
loadAllCustomersToCombo();
loadAllVehiclesToCombo();

function loadAllCustomersToCombo() {
    $('#customer').empty();
    $.ajax({
        url: baseURL + "/bookings/get_all_customers", method: "GET", dataType: "json", success: function (res) {
            for (let customer of res.data) {
                $("#customer").append(`<option>${customer.id}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$('#customer').on('click', function () {
    $.ajax({
        url: baseURL + "/bookings/get_all_customers/", method: "GET", dataType: "json", success: function (res) {
            for (let customer of res.data) {
                if (customer.id === $('#customer').val()) {
                    $("#customerName").val(customer.name.firstName);
                }
            }
        }
    });
});

function loadAllDriversToCombo() {
    $('#driverId').empty();

    $.ajax({
        url: baseURL + "/bookings/get_all_drivers", method: "GET", dataType: "json", success: function (res) {
            for (let driver of res.data) {
                $("#driverId").append(`<option>${driver.id}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$('#driverId').on('click', function () {
    $.ajax({
        url: baseURL + "/bookings/get_all_drivers", method: "GET", dataType: "json", success: function (res) {
            for (let driver of res.data) {
                if (driver.id === $('#driverId').val()) {
                    $("#driverName").val(driver.name.firstName);
                }
            }
        }
    });
});

function loadAllVehiclesToCombo() {
    $('#vehicleId').empty();
    $.ajax({
        url: baseURL + "/bookings/get_all_vehicles", method: "GET", dataType: "json", success: function (res) {
            for (let vehicle of res.data) {
                $("#vehicleId").append(`<option>${vehicle.vehicleId}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}


$("#placeBookingBtn").on('click', function () {
    let formData = $("#placeBooking").serialize();
    console.log(formData)
    $.ajax({
        url: baseURL + "/bookings/place_bookings",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
            alert(res.message);
        },
        error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
});

cusValidator(
    '#id',
    /^(C00-)[0-9]{1,4}$/,
    '#firstName'
)

cusValidator(
    '#firstName',
    /^[A-z]{3,30}$/,
    '#lastName'
)

cusValidator(
    '#lastName',
    /^[A-z]{3,30}$/,
    '#address'
)

cusValidator(
    '#address',
    /^[A-z]{3,30}$/,
    '#email'
)

cusValidator(
    '#email',
    /^[a-z]{3,30}@gmail.com$/,
    '#contactNo'
)

cusValidator(
    '#contactNo',
    /^(07([1245678])|091)(-)[0-9]{7}$/,
    '#userName'
)

cusValidator(
    '#userName',
    /^[A-z]{3,30}$/,
    '#password'
)

cusValidator(
    '#password',
    /^[0-9]{3,30}$/,
    '#nic'
)

cusValidator(
    '#nic',
    /^[0-9]{3,30}$/,
    '#drivingLicenseNo'
)

cusValidator(
    '#drivingLicenseNo',
    /^[0-9]{3,30}$/,
    '#role'
)

cusValidator(
    '#role',
    /^[A-Z]{3,30}$/,
    '#id'
)
 function cusValidator(txtField, regXPattern, nextTxtField) {


    $(txtField).on('keyup', function (e) {

            if (regXPattern.test($(txtField).val())) {
                $(txtField).css('border', '3px solid green');


                if (e.key === "Enter" && txtField !== "#role") {
                    $(nextTxtField).focus();

                } else if (e.key === "Enter" && txtField === "#role") {
                    saveCustomer();
                    clearTextFields();
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


//TODO image storing option local storage

var imgArray = [];
var verify1;

$('#file').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            verify1 = reader.result;
            imgArray.push(reader.result);
            $('#display').css({
                "background": `url(${reader.result})`, "background-size": "cover", "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})

$('#file2').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            imgArray.push(reader.result);
            $('#display2').css({
                "background": `url(${reader.result})`, "background-size": "cover", "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})
let row;

const reader = new FileReader();
const reader2 = new FileReader();


$('#saveCustomer').on("click", function () {

    const nicDlImageFile = document.getElementById('file');
    const imgFile = nicDlImageFile.files[0];
    reader.readAsDataURL(imgFile);

    reader.addEventListener('load', () => {
        const url = reader.result
        localStorage.setItem((genaratedValue + "1stPhoto"), url);
    });

    const nicDlImageFile2 = document.getElementById('file2');
    const imgFile2 = nicDlImageFile2.files[0];
    reader2.readAsDataURL(imgFile2);

    reader2.addEventListener('load', () => {
        const url = reader2.result
        localStorage.setItem(genaratedValue + "2stPhoto", url);
    });
});

let count;

// function loadingImg() {
//     $("#customerTableBody>tr").on('click', function () {
//
//             let key = $(this).children(":eq(0)").text();
//
//             const url = localStorage.getItem(key + "1stPhoto");
//             const img = new Image();
//             img.src = url;
//             $("#imgLoader").append(img);
//
//
//             const url2 = localStorage.getItem(key + "2stPhoto");
//             const img2 = new Image();
//             img2.src = url2;
//             $("#imgLoader2").append(img2);
//     });
// }

