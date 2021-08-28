/*
    Detta skript ansluter till smhis api, och läser in den första posten som talar om vilket väder det för närvarande är i Göteborg, eller mer exakt den uppmätta temperaturen i väderstationen närmast punkten Longitud 11.9745, Latitud 57.7088. Finns möjlighet att plocka datapunkter för prognos 10 dagar framåt, men jag nöjer mig här med den som ligger först
*/

let url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.9745/lat/57.7088/data.json" // long & lat for Gothenburg


fetch(url)
.then(res => res.json())
.then((out) => {
    // data innehåller alla möjlig information om vädret, t.ex. hur molnigt, regnigt, snöigt, ev. UV-värden etc.
    // parameter 't' håller information om temepratur
    
    let data = out.timeSeries[0].parameters
    for(var i = 0; i < data.length; i++){
        if (data[i].name == 't'){
            
            var text =document.createTextNode("För närvarande är det " + data[i].values[0]+ " grader Celsius i Göteborg")
            var tag = document.createElement("p")
            tag.appendChild(text)
            document.body.appendChild(tag)
            break;
        }
    }
})