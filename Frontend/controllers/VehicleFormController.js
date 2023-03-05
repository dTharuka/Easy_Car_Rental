let baseURL = "http://localhost:8080/Backend_war/vehicle/";




getAllVehicle();
let vehiclceOID ;
let availableVehiID;
let splitVehiId;
const vehicleFrontImgReader = new FileReader();
let genaratedVehicleValue;

let vehicleSearchArray=[];

$("#saveVehicle").on('click', function () {
    saveVehicle();

    const frontImageFile = document.getElementById('car1');
    const imgFile = frontImageFile.files[0];
    vehicleFrontImgReader.readAsDataURL(imgFile);

    vehicleFrontImgReader.addEventListener('load', () => {
        const url = vehicleFrontImgReader.result
        localStorage.setItem((genaratedVehicleValue + "frontPhoto"), url);
    });


});

function saveVehicle() {
    let formData = $("#vehicleFormController").serialize();
    $.ajax({
        url: baseURL + "save_vehicle", method: "post", data: formData, dataType: "json", success: function (res) {
            alert(res.message);
            getAllVehicle();
            clearVehicleTxt();
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

function genarateVehiID() {
    splitVehiId=vehiclceOID.split("-");
    availableVehiID=splitVehiId[1];
    let count=parseInt(availableVehiID);
    $('#vehicleId').val("V00-"+(count+1));
    genaratedVehicleValue=$('#vehicleId').val();
}

function getAllVehicle() {
    $("#vehicleTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                vehiclceOID=c.vehicleId;
                let vehicleId = c.vehicleId;
                let noOfPassengers = c.numberOfPassenger;
                let extraKmPrice = c.extraKmPer;
                let registrationNo = c.registrationNo;
                let Colour = c.vehicleColour;
                let daily_amount = c.vehiclePriceRate.dailyRate;
                let monthly_amount = c.vehiclePriceRate.monthlyRate;
                let Availability = c.vehicleAvailability;
                let brand = c.vehicleBrand;
                let transmission = c.transmissionType;
                let daily_km = c.freeMileage.dailyMileage;
                let monthly_km = c.freeMileage.monthlyMileage;
                let fuelType = c.fuelType;
                let damageFee = c.refundableDamagedFee;
                let vehicleType = c.vehicleType;
                let service_milage = c.vehicleMileage;
                let last_service = c.lastServiceMileage;



                var temp={
                    seaVehicleId:c.vehicleId,
                    seaNoOfPassengers:c.numberOfPassenger,
                    seaExtraKmPrice:c.extraKmPer,
                    seaRegistrationNo:c.registrationNo,
                    seaColour:c.vehicleColour,
                    seaDaily_amount:c.vehiclePriceRate.dailyRate,
                    seaMonthly_amount:c.vehiclePriceRate.monthlyRate,
                    seaAvailability:c.vehicleAvailability,
                    seaBrand:c.vehicleBrand,
                    seaTransmission:c.transmissionType,
                    seaDaily_km:c.freeMileage.dailyMileage,
                    seaMonthly_km:c.freeMileage.monthlyMileage,
                    seaFuelType:c.fuelType,
                    seaDamageFee:c.refundableDamagedFee,
                    seaVehicleType:c.vehicleType,
                    seaService_milage:c.vehicleMileage,
                    seaLast_service:c.lastServiceMileage
                };


                let row = "<tr>"
                    + "<td>" + vehicleId + "</td>"
                    + "<td>" + noOfPassengers + "</td>"
                    + "<td>" + extraKmPrice + "</td>"
                    + "<td>" + registrationNo + "</td>"
                    + "<td>" + Colour + "</td>"
                    + "<td>" + daily_amount + "</td>"
                    + "<td>" + monthly_amount + "</td>"
                    + "<td>" + Availability + "</td>"
                    + "<td>" + brand + "</td>"
                    + "<td>" + transmission + "</td>"
                    + "<td>" + daily_km + "</td>"
                    + "<td>" + monthly_km + "</td>"
                    + "<td>" + fuelType + "</td>"
                    + "<td>" + damageFee + "</td>"
                    + "<td>" + vehicleType + "</td>"
                    + "<td>" + service_milage + "</td>"
                    + "<td>" + last_service + "</td>"
                    + "</tr>";

                $("#vehicleTableBody").append(row);
                vehicleSearchArray.push(temp);
            }
            bindRowClickEventsVehicle();
            genarateVehiID();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

//TODO vehicle error in delete method

$("#deleteVehicle").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#vehicleId").val(), method: "delete", dataType: "json", success: function (resp) {
          getAllVehicle();
          clearVehicleTxt();
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

});

$("#updateVehicle").on('click', function () {
    // var vehicleObj = {
    //     vehicleId:$('#vehicleId').val(),//TODO check what can i do for this error
    //     registrationNo:$('#registrationNo').val(),
    //     vehicleBrand:$('#vehicleBrand').val(),
    //     vehicleType:$('#vehicleType').val(),
    //     fuelType:$('#fuelType').val(),
    //     numberOfPassenger:$('#numberOfPassenger').val(),
    //     vehicleColour:$('#vehicleColour').val(),
    //     transmissionType:$('#transmissionType').val(),
    //     refundableDamagedFee:$('#refundableDamagedFee').val(),
    //     vehicleMileage: $('#vehicleMileage').val(),
    //     vehiclePriceRate: {dailyRate: $('#dailyRate').val(),monthlyRate: $('#monthlyRate').val()},//TODO check what can i do for this error
    //     freeMileage: {monthlyMileage: $('#monthlyMileage').val(),dailyMileage: $('#dailyMileage').val()},//TODO check what can i do for this error
    //     lastServiceMileage:$('#lastServiceMileage').val(),
    //     extraKmPer:$('#extraKmPer').val(),
    //     vehicleAvailability:$('#vehicleAvailability').val()
    //     // needMaintenance:$('#extraKmPer').val()
    // }
    //
    // $.ajax({
    //     url: baseURL + "update_vehicle",
    //     method: "put",
    //     contentType: "application/json",
    //     data: JSON.stringify(vehicleObj),
    //     dataType: "json",
    //     success: function (res) {
    //         getAllVehicle();
    //         clearVehicleTxt();
    //         alert(res.message);
    //         // clearTextFields();
    //     }, error: function (error) {
    //         alert(JSON.parse(error.responseText).message);
    //     }
    // });

    var vehicleObj = {
        vehicleId:$('#vehicleId').val(),//TODO check what can i do for this error
        registrationNo:$('#registrationNo').val(),
        vehicleBrand:$('#vehicleBrand').val(),
        vehicleType:$('#vehicleType').val(),
        fuelType:$('#fuelType').val(),
        numberOfPassenger:$('#numberOfPassenger').val(),
        vehicleColour:$('#vehicleColour').val(),
        transmissionType:$('#transmissionType').val(),
        refundableDamagedFee:$('#refundableDamagedFee').val(),
        vehicleMileage: $('#vehicleMileage').val(),
        vehiclePriceRate: {dailyRate: $('#dailyRate').val(),monthlyRate: $('#monthlyRate').val()},//TODO check what can i do for this error
        freeMileage: {monthlyMileage: $('#monthlyMileage').val(),dailyMileage: $('#dailyMileage').val()},//TODO check what can i do for this error
        lastServiceMileage:$('#lastServiceMileage').val(),
        extraKmPer:$('#extraKmPer').val(),
        vehicleAvailability:$('#vehicleAvailability').val()
        // needMaintenance:$('#extraKmPer').val()
    }


    $.ajax({
        url: baseURL + "update",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(vehicleObj),
        dataType: "json",
        success: function (res) {
            getAllVehicle();
            clearVehicleTxt();
            alert(res.message);
            // clearTextFields();
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });


});

function bindRowClickEventsVehicle() {
    $("#vehicleTableBody>tr").click(function (){

        let vehicleId=$(this).children(":eq(0)").text();
        let noOfPassengers=$(this).children(":eq(1)").text();
        let extraKmPrice=$(this).children(":eq(2)").text();
        let registrationNo=$(this).children(":eq(3)").text();
        let Colour=$(this).children(":eq(4)").text();
        let daily_amount=$(this).children(":eq(5)").text();
        let monthly_amount=$(this).children(":eq(6)").text();
        let Availability=$(this).children(":eq(7)").text();
        let brand=$(this).children(":eq(8)").text();
        let transmission=$(this).children(":eq(9)").text();
        let daily_km=$(this).children(":eq(10)").text();
        let monthly_km=$(this).children(":eq(11)").text();
        let fuelType=$(this).children(":eq(12)").text();
        let damageFee=$(this).children(":eq(13)").text();
        let vehicleType=$(this).children(":eq(14)").text();
        let service_milage=$(this).children(":eq(15)").text();
        let last_service=$(this).children(":eq(16)").text();


            $('#vehicleId').val(vehicleId);
            $('#registrationNo').val(registrationNo);
            $('#vehicleBrand').val(brand);
            $('#vehicleType').val(vehicleType);
            $('#fuelType').val(fuelType);
            $('#numberOfPassenger').val(noOfPassengers);
            $('#vehicleColour').val(Colour);
            $('#transmissionType').val(transmission);
            $('#refundableDamagedFee').val(damageFee);
            $('#vehicleMileage').val(service_milage);
            $('#dailyRate').val(daily_amount);
            $('#monthlyMileage').val(monthly_km);
            $('#lastServiceMileage').val(last_service);
            $('#extraKmPer').val(extraKmPrice);
            $('#vehicleAvailability').val(Availability);
            $('#dailyMileage').val(daily_km);
            $('#monthlyRate').val(monthly_amount)


    });
}

function clearVehicleTxt(){
    $('#vehicleId').val("");
    $('#registrationNo').val("");
    $('#vehicleBrand').val("");
    $('#vehicleType').val("");
    $('#fuelType').val("");
    $('#numberOfPassenger').val("");
    $('#vehicleColour').val("");
    $('#transmissionType').val("");
    $('#refundableDamagedFee').val("");
    $('#vehicleMileage').val("");
    $('#dailyRate').val("");
    $('#monthlyMileage').val("");
    $('#lastServiceMileage').val("");
    $('#extraKmPer').val("");
    $('#vehicleAvailability').val("");
    $('#dailyMileage').val("");
    $('#monthlyRate').val("");
}

function vehicleValidator(txtField, regXPattern, nextTxtField) {


    $(txtField).on('keyup', function (e) {

            if (regXPattern.test($(txtField).val())) {
                $(txtField).css('border', '3px solid green');


                if (e.key === "Enter" && txtField !== "#lastServiceMileage") {
                    $(nextTxtField).focus();

                } else if (e.key === "Enter" && txtField === "#lastServiceMileage") {
                    saveVehicle();
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

vehicleValidator(
    '#vehicleId',
    /^(V00-)[0-9]{1,4}$/,
    '#numberOfPassenger'
)

vehicleValidator(
    '#numberOfPassenger',
    /^[0-9]{1,30}$/,
    '#extraKmPer'
)

vehicleValidator(
    '#extraKmPer',
    /^[0-9]{2,30}$/,
    '#registrationNo'
)

vehicleValidator(
    '#registrationNo',
    /^[0-9]{3,30}$/,
    '#vehicleColour'
)

vehicleValidator(
    '#vehicleColour',
    /^[A-z]{3,30}$/,
    '#dailyRate'
)

vehicleValidator(
    '#dailyRate',
    /^[0-9]{2,30}$/,
    '#monthlyRate'
)

vehicleValidator(
    '#monthlyRate',
    /^[0-9]{2,30}$/,
    '#vehicleAvailability'
)

vehicleValidator(
    '#vehicleAvailability',
    /^AVAILABLE | NOT_AVAILABLE$/,
    '#vehicleBrand'
)

vehicleValidator(
    '#vehicleBrand',
    /^[A-z]{2,30}$/,
    '#transmissionType'
)

vehicleValidator(
    '#transmissionType',
    /^AUTO | MANUAL$/,
    '#dailyMileage'
)

vehicleValidator(
    '#dailyMileage',
    /^[0-9]{1,30}$/,
    '#monthlyMileage'
)

vehicleValidator(
    '#monthlyMileage',
    /^[0-9]{2,30}$/,
    '#fuelType'
)

vehicleValidator(
    '#fuelType',
    /^PETROL | DIESEL$/,
    '#refundableDamagedFee'
)

vehicleValidator(
    '#refundableDamagedFee',
    /^[0-9]{2,30}$/,
    '#vehicleType'
)

vehicleValidator(
    '#vehicleType',
    /^GENERAL | PREMIUM | LUXURY$/,
    '#vehicleMileage'
)

vehicleValidator(
    '#vehicleMileage',
    /^[0-9]{2,30}$/,
    '#lastServiceMileage'
)

vehicleValidator(
    '#lastServiceMileage',
    /^[0-9]{2,30}$/,
    '#vehicleId'
)

$('#car1').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $('#frontImg').css({
                "background": `url(${reader.result})`,
                "background-size": "cover",
                "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})

$('#car2').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $('#backImg').css({
                "background": `url(${reader.result})`,
                "background-size": "cover",
                "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})

$('#car3').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $('#sideImg').css({
                "background": `url(${reader.result})`,
                "background-size": "cover",
                "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})

$('#car4').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $('#innerImg').css({
                "background": `url(${reader.result})`,
                "background-size": "cover",
                "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})


// $("#search").on('click', function () {
//     let searchType = $("#searchDropBox").val();
//     if ("PASSENGERS" === searchType) {
//         searchByPassengerCount();
//     } else if ("TRANSMISSION" === searchType) {
//         searchByTransMissionType();
//     } else if ("BRAND" === searchType) {
//         searchByBrand();
//     } else if ("TYPE" === searchType) {
//         searchByType();
//     } else if ("PRICE" === searchType) {
//         searchByRate();
//     } else if ("FUEL" === searchType) {
//         searchByFuelType();
//     } else {
//         alert("fuck u idiot !");
//     }
// });

function searchByPassengerCount() {
    $("#vehicleTableBody").empty();

    $.ajax({
        url: baseURL + "searching/?no_of_passengers=" + $("#vehicleSearch").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                vehicleSearchManager(c);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function searchByFuelType() {
    $("#vehicleTableBody").empty();

    $.ajax({
        url: baseURL + "searching/?fuel_type=" + $("#vehicleSearch").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                vehicleSearchManager(c);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function searchByBrand() {
    $("#vehicleTableBody").empty();

    $.ajax({
        url: baseURL + "searching/?brand=" + $("#vehicleSearch").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                vehicleSearchManager(c);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function searchByType() {
    $("#vehicleTableBody").empty();

    $.ajax({
        url: baseURL + "searching/?type=" + $("#vehicleSearch").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                vehicleSearchManager(c);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function searchByTransMissionType() {
    $("#vehicleTableBody").empty();

    $.ajax({
        url: baseURL + "searching/?transmission_type=" + $("#vehicleSearch").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                vehicleSearchManager(c);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function searchByRate() {
    $("#vehicleTableBody").empty();
    $.ajax({
        url: baseURL + "searching/?dailyRate=" + $("#vehicleSearch").val() + "&monthlyRate=" + $("#vehicleSearch").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                vehicleSearchManager(c);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}




function vehicleSearchManager(c) {
    let vehicleId = c.vehicleId;
    let registrationNo = c.registrationNo;
    let brand = c.vehicleBrand;
    let vehicleType = c.vehicleType;
    let fuelType = c.fuelType;
    let noOfPassengers = c.numberOfPassenger;
    let Colour = c.vehicleColour;
    let transmission = c.transmissionType;
    let damageFee = c.refundableDamagedFee;
    let service_milage = c.vehicleMileage;
    let daily_amount = c.vehiclePriceRate.dailyRate;
    let monthly_amount = c.vehiclePriceRate.monthlyRate;
    let daily_km = c.freeMileage.dailyMileage;
    let monthly_km = c.freeMileage.monthlyMileage;
    let last_service = c.lastServiceMileage;
    let extraKmPrice = c.extraKmPer;
    let Availability = c.vehicleAvailability;

    let row = "<tr>"
        + "<td>" + vehicleId + "</td>"
        + "<td>" + noOfPassengers + "</td>"
        + "<td>" + extraKmPrice + "</td>"
        + "<td>" + registrationNo + "</td>"
        + "<td>" + Colour + "</td>"
        + "<td>" + daily_amount + "</td>"
        + "<td>" + monthly_amount + "</td>"
        + "<td>" + Availability + "</td>"
        + "<td>" + brand + "</td>"
        + "<td>" + transmission + "</td>"
        + "<td>" + daily_km + "</td>"
        + "<td>" + monthly_km + "</td>"
        + "<td>" + fuelType + "</td>"
        + "<td>" + damageFee + "</td>"
        + "<td>" + vehicleType + "</td>"
        + "<td>" + service_milage + "</td>"
        + "<td>" + last_service + "</td>"
        + "</tr>";

    $("#vehicleTableBody").append(row);

}

$('#search').click(function (){
    $("#vehicleTableBody").empty();
    let searchKey=$('#searchDropBox').val();
    let searchTxt=$('#vehicleSearch').val();
    for(var s=0;s<vehicleSearchArray.length;s++){
        let takeVal=vehicleSearchArray[s];
        if(takeVal.seaBrand === searchTxt && searchKey === "BRAND"){


            let vehicleId = takeVal.seaVehicleId;
            let noOfPassengers = takeVal.seaNoOfPassengers;
            let extraKmPrice = takeVal.seaExtraKmPrice;
            let registrationNo = takeVal.seaRegistrationNo;
            let Colour = takeVal.seaColour;
            let daily_amount = takeVal.seaDaily_amount;
            let monthly_amount = takeVal.seaMonthly_amount;
            let Availability = takeVal.seaAvailability;
            let brand = takeVal.seaBrand;
            let transmission = takeVal.seaTransmission;
            let daily_km = takeVal.seaDaily_km;
            let monthly_km = takeVal.seaMonthly_km;
            let fuelType = takeVal.seaFuelType;
            let damageFee = takeVal.seaDamageFee;
            let vehicleType = takeVal.seaVehicleType;
            let service_milage = takeVal.seaService_milage;
            let last_service = takeVal.seaLast_service;
            let row = "<tr>"
                + "<td>" + vehicleId + "</td>"
                + "<td>" + noOfPassengers + "</td>"
                + "<td>" + extraKmPrice + "</td>"
                + "<td>" + registrationNo + "</td>"
                + "<td>" + Colour + "</td>"
                + "<td>" + daily_amount + "</td>"
                + "<td>" + monthly_amount + "</td>"
                + "<td>" + Availability + "</td>"
                + "<td>" + brand + "</td>"
                + "<td>" + transmission + "</td>"
                + "<td>" + daily_km + "</td>"
                + "<td>" + monthly_km + "</td>"
                + "<td>" + fuelType + "</td>"
                + "<td>" + damageFee + "</td>"
                + "<td>" + vehicleType + "</td>"
                + "<td>" + service_milage + "</td>"
                + "<td>" + last_service + "</td>"
                + "</tr>";

            $("#vehicleTableBody").append(row);
        }

        if(takeVal.seaNoOfPassengers === parseInt(searchTxt) && searchKey === "PASSENGERS"){


            let vehicleId = takeVal.seaVehicleId;
            let noOfPassengers = takeVal.seaNoOfPassengers;
            let extraKmPrice = takeVal.seaExtraKmPrice;
            let registrationNo = takeVal.seaRegistrationNo;
            let Colour = takeVal.seaColour;
            let daily_amount = takeVal.seaDaily_amount;
            let monthly_amount = takeVal.seaMonthly_amount;
            let Availability = takeVal.seaAvailability;
            let brand = takeVal.seaBrand;
            let transmission = takeVal.seaTransmission;
            let daily_km = takeVal.seaDaily_km;
            let monthly_km = takeVal.seaMonthly_km;
            let fuelType = takeVal.seaFuelType;
            let damageFee = takeVal.seaDamageFee;
            let vehicleType = takeVal.seaVehicleType;
            let service_milage = takeVal.seaService_milage;
            let last_service = takeVal.seaLast_service;
            let row = "<tr>"
                + "<td>" + vehicleId + "</td>"
                + "<td>" + noOfPassengers + "</td>"
                + "<td>" + extraKmPrice + "</td>"
                + "<td>" + registrationNo + "</td>"
                + "<td>" + Colour + "</td>"
                + "<td>" + daily_amount + "</td>"
                + "<td>" + monthly_amount + "</td>"
                + "<td>" + Availability + "</td>"
                + "<td>" + brand + "</td>"
                + "<td>" + transmission + "</td>"
                + "<td>" + daily_km + "</td>"
                + "<td>" + monthly_km + "</td>"
                + "<td>" + fuelType + "</td>"
                + "<td>" + damageFee + "</td>"
                + "<td>" + vehicleType + "</td>"
                + "<td>" + service_milage + "</td>"
                + "<td>" + last_service + "</td>"
                + "</tr>";

            $("#vehicleTableBody").append(row);
        }

        if(takeVal.seaTransmission === searchTxt && searchKey === "TRANSMISSION"){


            let vehicleId = takeVal.seaVehicleId;
            let noOfPassengers = takeVal.seaNoOfPassengers;
            let extraKmPrice = takeVal.seaExtraKmPrice;
            let registrationNo = takeVal.seaRegistrationNo;
            let Colour = takeVal.seaColour;
            let daily_amount = takeVal.seaDaily_amount;
            let monthly_amount = takeVal.seaMonthly_amount;
            let Availability = takeVal.seaAvailability;
            let brand = takeVal.seaBrand;
            let transmission = takeVal.seaTransmission;
            let daily_km = takeVal.seaDaily_km;
            let monthly_km = takeVal.seaMonthly_km;
            let fuelType = takeVal.seaFuelType;
            let damageFee = takeVal.seaDamageFee;
            let vehicleType = takeVal.seaVehicleType;
            let service_milage = takeVal.seaService_milage;
            let last_service = takeVal.seaLast_service;
            let row = "<tr>"
                + "<td>" + vehicleId + "</td>"
                + "<td>" + noOfPassengers + "</td>"
                + "<td>" + extraKmPrice + "</td>"
                + "<td>" + registrationNo + "</td>"
                + "<td>" + Colour + "</td>"
                + "<td>" + daily_amount + "</td>"
                + "<td>" + monthly_amount + "</td>"
                + "<td>" + Availability + "</td>"
                + "<td>" + brand + "</td>"
                + "<td>" + transmission + "</td>"
                + "<td>" + daily_km + "</td>"
                + "<td>" + monthly_km + "</td>"
                + "<td>" + fuelType + "</td>"
                + "<td>" + damageFee + "</td>"
                + "<td>" + vehicleType + "</td>"
                + "<td>" + service_milage + "</td>"
                + "<td>" + last_service + "</td>"
                + "</tr>";

            $("#vehicleTableBody").append(row);
        }

        if(takeVal.seaVehicleType === searchTxt && searchKey === "TYPE"){


            let vehicleId = takeVal.seaVehicleId;
            let noOfPassengers = takeVal.seaNoOfPassengers;
            let extraKmPrice = takeVal.seaExtraKmPrice;
            let registrationNo = takeVal.seaRegistrationNo;
            let Colour = takeVal.seaColour;
            let daily_amount = takeVal.seaDaily_amount;
            let monthly_amount = takeVal.seaMonthly_amount;
            let Availability = takeVal.seaAvailability;
            let brand = takeVal.seaBrand;
            let transmission = takeVal.seaTransmission;
            let daily_km = takeVal.seaDaily_km;
            let monthly_km = takeVal.seaMonthly_km;
            let fuelType = takeVal.seaFuelType;
            let damageFee = takeVal.seaDamageFee;
            let vehicleType = takeVal.seaVehicleType;
            let service_milage = takeVal.seaService_milage;
            let last_service = takeVal.seaLast_service;
            let row = "<tr>"
                + "<td>" + vehicleId + "</td>"
                + "<td>" + noOfPassengers + "</td>"
                + "<td>" + extraKmPrice + "</td>"
                + "<td>" + registrationNo + "</td>"
                + "<td>" + Colour + "</td>"
                + "<td>" + daily_amount + "</td>"
                + "<td>" + monthly_amount + "</td>"
                + "<td>" + Availability + "</td>"
                + "<td>" + brand + "</td>"
                + "<td>" + transmission + "</td>"
                + "<td>" + daily_km + "</td>"
                + "<td>" + monthly_km + "</td>"
                + "<td>" + fuelType + "</td>"
                + "<td>" + damageFee + "</td>"
                + "<td>" + vehicleType + "</td>"
                + "<td>" + service_milage + "</td>"
                + "<td>" + last_service + "</td>"
                + "</tr>";

            $("#vehicleTableBody").append(row);
        }

        if(takeVal.seaDaily_amount === parseInt(searchTxt) && searchKey === "PRICE"){


            let vehicleId = takeVal.seaVehicleId;
            let noOfPassengers = takeVal.seaNoOfPassengers;
            let extraKmPrice = takeVal.seaExtraKmPrice;
            let registrationNo = takeVal.seaRegistrationNo;
            let Colour = takeVal.seaColour;
            let daily_amount = takeVal.seaDaily_amount;
            let monthly_amount = takeVal.seaMonthly_amount;
            let Availability = takeVal.seaAvailability;
            let brand = takeVal.seaBrand;
            let transmission = takeVal.seaTransmission;
            let daily_km = takeVal.seaDaily_km;
            let monthly_km = takeVal.seaMonthly_km;
            let fuelType = takeVal.seaFuelType;
            let damageFee = takeVal.seaDamageFee;
            let vehicleType = takeVal.seaVehicleType;
            let service_milage = takeVal.seaService_milage;
            let last_service = takeVal.seaLast_service;
            let row = "<tr>"
                + "<td>" + vehicleId + "</td>"
                + "<td>" + noOfPassengers + "</td>"
                + "<td>" + extraKmPrice + "</td>"
                + "<td>" + registrationNo + "</td>"
                + "<td>" + Colour + "</td>"
                + "<td>" + daily_amount + "</td>"
                + "<td>" + monthly_amount + "</td>"
                + "<td>" + Availability + "</td>"
                + "<td>" + brand + "</td>"
                + "<td>" + transmission + "</td>"
                + "<td>" + daily_km + "</td>"
                + "<td>" + monthly_km + "</td>"
                + "<td>" + fuelType + "</td>"
                + "<td>" + damageFee + "</td>"
                + "<td>" + vehicleType + "</td>"
                + "<td>" + service_milage + "</td>"
                + "<td>" + last_service + "</td>"
                + "</tr>";

            $("#vehicleTableBody").append(row);
        }

        if(takeVal.seaFuelType === searchTxt && searchKey === "FUEL"){


            let vehicleId = takeVal.seaVehicleId;
            let noOfPassengers = takeVal.seaNoOfPassengers;
            let extraKmPrice = takeVal.seaExtraKmPrice;
            let registrationNo = takeVal.seaRegistrationNo;
            let Colour = takeVal.seaColour;
            let daily_amount = takeVal.seaDaily_amount;
            let monthly_amount = takeVal.seaMonthly_amount;
            let Availability = takeVal.seaAvailability;
            let brand = takeVal.seaBrand;
            let transmission = takeVal.seaTransmission;
            let daily_km = takeVal.seaDaily_km;
            let monthly_km = takeVal.seaMonthly_km;
            let fuelType = takeVal.seaFuelType;
            let damageFee = takeVal.seaDamageFee;
            let vehicleType = takeVal.seaVehicleType;
            let service_milage = takeVal.seaService_milage;
            let last_service = takeVal.seaLast_service;
            let row = "<tr>"
                + "<td>" + vehicleId + "</td>"
                + "<td>" + noOfPassengers + "</td>"
                + "<td>" + extraKmPrice + "</td>"
                + "<td>" + registrationNo + "</td>"
                + "<td>" + Colour + "</td>"
                + "<td>" + daily_amount + "</td>"
                + "<td>" + monthly_amount + "</td>"
                + "<td>" + Availability + "</td>"
                + "<td>" + brand + "</td>"
                + "<td>" + transmission + "</td>"
                + "<td>" + daily_km + "</td>"
                + "<td>" + monthly_km + "</td>"
                + "<td>" + fuelType + "</td>"
                + "<td>" + damageFee + "</td>"
                + "<td>" + vehicleType + "</td>"
                + "<td>" + service_milage + "</td>"
                + "<td>" + last_service + "</td>"
                + "</tr>";

            $("#vehicleTableBody").append(row);
        }



    }
});




