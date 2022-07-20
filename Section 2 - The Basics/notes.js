//Directive are Instructions in the dom.

//------------------------------------------------

//components are directives, but with a template.

//------------------------------------------------

// directives are typically added as attributes selector,
// but can also be configured from the decorator as the selector of a components.

//------------------------------------------------

//a structural directive is a directive that adds/removes elements to/from the dom 
//based on the the proberty bind to it whether it's true or false

//ngIf is a structural directive

//------------------------------------------------

//to use else in the directive, we add else and a 'marker' word that attach 
//this else to a <ng-template> with the else condition content we want to show insted

//Example
//<p *ngIf="serverCreated; else noServer">server was created</p>
//<ng-template #noServer>no server was created</ng-template>

//------------------------------------------------

//other type of directives are attribute directives
//attribute directive doesn't add or remove elements from dom structure
//it only change the element it was placed on in a way

//------------------------------------------------

//ngStyle allows us to set bind to an object of custom styles as key-value pairs that can be set manually or dynamically by returning specific values

//------------------------------------------------

//ngClass allows us to add/remove css classes "toggle" based on bind proberty whether true or false, also inside an object as key-value pairs

//------------------------------------------------

