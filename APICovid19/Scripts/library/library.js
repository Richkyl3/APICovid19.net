$(document).ready(function () {
    getData();
});
function getData() {
    var settings = {
        "url": "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces",
        "method": "GET",
        "timeout": 0
    };
    $.ajax(settings).done(function (response) {
        var rows = '';
        rows += "<table>"
        rows += "<tr>"
        rows += "<th>" + "จำนวนผู้ป่วยรายใหม่" + "</th>"
        rows += "<th>" + "จำนวนผู้ป่วยรายใหม่(ไม่นับมาจากต่างประเทศ)" + "</th>"
        rows += "<th>" + "จำนวนผู้เสียชีวิตรายใหม่" + "</th>"
        rows += "<th>" + "จังหวัด" + "</th>"
        rows += "<th>" + "จำนวนผู้ป่วยสะสม" + "</th>"
        rows += "<th>" + "จำนวนผู้ป่วยสะสม(ไม่นับมาจากต่างประเทศ)" + "</th>"
        rows += "<th>" + "จำนวนผู้เสียชีวิตสะสม" + "</th>"
      
        rows += "<th>" + "วันที่ปรับปรุงล่าสุด" + "</th>"
        rows += "</tr>"
        $.each(response, function (x, item) {
            rows += "<tr>"
            rows += "<td>" + item.new_case + "</td>"
            rows += "<td>" + item.new_case_excludeabroad + "</td>"
            rows += "<td>" + item.new_death + "</td>"
            rows += "<td>" + item.province + "</td>"
            rows += "<td>" + item.total_case + "</td>"
            rows += "<td>" + item.total_case_excludeabroad + "</td>"
            rows += "<td>" + item.total_death + "</td>"
        
            rows += "<td>" + item.update_date + "</td>"
            rows += "</tr>"
        });
        rows += "</table>";
        $("#listCovid19").html(rows);
    });
}