let baseURL = "http://localhost:8080/Backend_war/admin/";

getAllAdmins();

$("#saveAdmin").on('click', function () {
    saveAdmin();
});

function saveAdmin() {
    let formData = $("#adminFormController").serialize();
    $.ajax({
        url: baseURL + "save_admin", method: "post", data: formData, dataType: "json", success: function (res) {
            getAllAdmins();
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

$("#deleteAdmin").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#adminId").val(), method: "delete", dataType: "json", success: function (resp) {
            getAllAdmins();
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

 $("#updateAdmin").on('click', function () {
        var adminObj = {
            adminId:$('#adminId').val(),//TODO check what can i do for this error
            adminNic:$('#adminNic').val(),
            adminName:{firstName: $('#firstName').val(),lastName:$('#lastName').val()},
            adminAddress:$('#adminAddress').val(),
            adminEmail:$('#adminEmail').val(),
            adminContact:$('#adminContact').val(),
            user:{userName: $('#userName').val()}

        }

        $.ajax({
            url: baseURL + "update_admin",
            method: "put",
            contentType: "application/json",
            data: JSON.stringify(adminObj),
            dataType: "json",
            success: function (resp) {
                getAllAdmins();
                alert(resp.message);
                clearTextFields();
            }, error: function (error) {
                alert(JSON.parse(error.responseText).message);
            }
        });
    });




function getAllAdmins() {
    $("#adminTableBody").empty();
    $.ajax({
        url: baseURL + "get_all_admin", success: function (res) {
            for (let c of res.data) {

                let adminId = c.adminId;
                let adminNic = c.adminNic;
                let firstName = c.name.firstName;
                let lastName = c.name.lastName;
                let adminAddress = c.adminAddress;
                let adminEmail = c.adminEmail;
                let adminContact = c.adminContact;
                let userName = c.user.userName;
                let password = c.user.password;


                let row = "<tr>"
                    + "<td>" + firstName + "</td>"
                    + "<td>" + lastName + "</td>"
                    + "<td>" + adminAddress + "</td>"
                    + "<td>" + adminContact + "</td>"
                    + "<td>" + adminEmail + "</td>"
                    + "<td>" + userName + "</td>"
                    + "<td>" + password + "</td>"
                    + "<td>" + null + "</td>"
                    + "<td>" + adminNic + "</td>"
                    + "<td>" + adminId + "</td>"
                    + "</tr>";

                // let row = "<tr>" + "<td>" + firstName + "</td>" + "<td>" + lastName + "</td>" + "<td>" + address + "</td>" + "<td>" + contact + "</td>" + "<td>" + email + "</td>" + "<td>" + username + "</td>" + "<td>" + password + "</td>" + "<td>" + password + "</td>" + "<td>" + nic + "</td>" + "<td>" + id + "</td>" + "</tr>";
                $("#adminTableBody").append(row);
            }
            bindRowClickEventsForAdminTable();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

function bindRowClickEventsForAdminTable() {
    $("#adminTableBody>tr").on('click', function () {
        let firstName = $(this).children(":eq(0)").text();
        let lastName = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let admin_contact = $(this).children(":eq(3)").text();
        let email = $(this).children(":eq(4)").text();
        let username = $(this).children(":eq(5)").text();
        let password = $(this).children(":eq(6)").text();
        let nic = $(this).children(":eq(7)").text();
        let id = $(this).children(":eq(8)").text();

        $('#id').val(firstName);
        $('#firstName').val(lastName);
        $('#lastName').val(address);
        $('#address').val(admin_contact);
        $('#email').val(email);
        $('#contactNo').val(username);
        $('#userId').val(password);
        $('#password').val(nic);
        $('#nic').val(id);

    });

}