var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
var countriesCapital = $('#capital');
var countriesCode = $('#alpha2Code');
var countriesPopulation = $('#population');
var countriesArea = $('#area');
var countriesTimezone =$('#timezone');
/*var countriesCurrencies = $('#currencies');
var currenciesCode = $('#code');
var currenciesName = $('#name');
var currenciesSymbol = $('#symbol');
var countriesLanguages = $('#languages');*/

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	countriesList.empty();
	countriesCapital.empty();
	countriesCode.empty();
	countriesPopulation.empty();
	countriesArea.empty();
	countriesTimezone.empty();

	resp.forEach(function(item) {
		$('<th>').text(item.name).appendTo(countriesList);
		$('<td>').text(item.capital).appendTo(countriesCapital);
		$('<td>').text(item.alpha2Code).appendTo(countriesCode);
		$('<td>').text(item.population).appendTo(countriesPopulation);
		$('<td>').text(item.area).appendTo(countriesArea);
			//Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
	});
}