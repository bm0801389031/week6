//make an array of objects with index name and a value string
//with welcome in the proper language as the string
//the variable holding the array lets call it database
var database = {

english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'

}
//function statement named greet with parameter language
function greet(language){ 
//return database at the language index OR operator 'Welcome';
return database[language] || "Welcome";
}

