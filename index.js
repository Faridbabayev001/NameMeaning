var form = document.getElementById('searchForm');
var resultField = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var searchText = this.elements[0].value;
    if (searchText.trim() != "") {
        var url = "https://opendata.e-gov.az/api/v1/json/home/MeaningOfName/" + searchText + "?pretty";
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (result) {
            resultField.innerHTML = "";
            if (result.Response != null) {
                resultField.innerHTML = result.Response.Meaning
            } else {
                resultField.innerHTML = "Yazdığınız ada uyğun nəticə tapılmadı.Zəhmət olmasa yazdığınız adı azərbaycan hərfləri ilə yazın."
            }
        }).catch(function (error) {
            resultField.innerHTML = "Zəhmət olmasa axtarmaq istədiyiniz adı yazın"
        });
    }else {
        resultField.innerHTML = "Zəhmət olmasa axtarmaq istədiyiniz adı yazın"
    }
});