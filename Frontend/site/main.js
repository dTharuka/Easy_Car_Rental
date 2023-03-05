let baseURL = "http://localhost:8080/Backend_war/";

let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}
let header = document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


loadingAllVehiclesForFrontendPage();

function loadingAllVehiclesForFrontendPage() {
    $("#addingVehicles").empty();
    $.ajax({
        url: baseURL + "vehicle/get_all", success: function (res) {
            for (let c of res.data) {
                let brand = c.vehicleBrand;
                let vehicleType = c.vehicleType;
                let daily_amount = c.vehiclePriceRate.dailyRate;
                let monthly_amount = c.vehiclePriceRate.monthlyRate;
                let extraKmPrice = c.extraKmPer;
                let vehicleId = c.vehicleId;

                const url = localStorage.getItem(vehicleId + "frontPhoto");
                const img = new Image();
                img.src = url;
                $("#addingVehicles").append(img);

                let vehicle_addons = `<div class="box">
                                            <img alt="" class="sample"  src="">
                                            <h3>` + brand + `</h3>
                                            <hr>
                                            <p>Daily - ` + daily_amount + `LKR</p>
                                            <p>Monthly - `+monthly_amount+`LKR</p>
                                            <p>Price per extra Km -`+extraKmPrice+`LKR</p>
                                            <p>Count - 1</p>
                                            <hr>
                                            <a class="blog-btn" href="#">Type - `+vehicleType+`<i class='bx bx-right-arrow-alt'></i></a>
                                       </div>`;

                $("#addingVehicles").append(vehicle_addons);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}