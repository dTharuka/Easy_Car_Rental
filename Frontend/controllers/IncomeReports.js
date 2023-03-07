let baseURL = "http://localhost:8080/Backend_war/";


getAllByDailyRevenues();
gettingRevenueByYear();
getAllByMonthlyRevenues()


function getAllByDailyRevenues() {
    $.ajax({
        url: baseURL + "income/by_daily", dataType: "json", success: function (res) {
            console.log(res.data);
            for (let c of res.data) {
                console.log(c);

                let row = "<tr>" + "<td>" +c[0]+ "</td>" + "<td>" + c[1] + "</td>"+"</tr>";
                $("#incomeReportsDailyTable").append(row);
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

let month;

function getAllByMonthlyRevenues() {
    $.ajax({
        url: baseURL + "income/by_month", dataType: "json", success: function (res) {
            for (let c of res.data) {
                if (c[0] === 1) {
                    month = "January";
                } else if (c[0] === 2) {
                    month = "February";
                } else if (c[0] === 3) {
                    month = "March";
                } else if (c[0] === 4) {
                    month = "April";
                } else if (c[0] === 5) {
                    month = "May";
                } else if (c[0] === 6) {
                    month = "June";
                } else if (c[0] === 7) {
                    month = "July";
                } else if (c[0] === 8) {
                    month = "August";
                } else if (c[0] === 9) {
                    month = "September";
                } else if (c[0] === 10) {
                    month = "October";
                } else if (c[0] === 11) {
                    month = "November";
                } else if (c[0] === 12) {
                    month = "December";
                }

                let row = "<tr>" + "<td>" + month + "</td>" + "<td>" + "Rs "+ (c[1])+".00"  + "</td>" + "</tr>";
                $("#incomeReportsMonthlyTable").append(row);


            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}


function gettingRevenueByYear() {



    $("#todayDate").val(new Date().getFullYear()+" / "+new Date().getMonth()+" / "+new Date().getDate()+"   "
        +new Date().getHours()+" : "+new Date().getMinutes()+" : "+new Date().getSeconds());

    $.ajax({
        url: baseURL + "income/by_year", dataType: "json", success: function (res) {
            console.log(res.data);
            for (let c of res.data) {
                let id = c;
                $("#revenueByYear").val("Rs "+id+".00");
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}