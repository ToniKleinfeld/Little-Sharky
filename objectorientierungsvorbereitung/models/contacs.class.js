class Contact extends Person {
    phone;

    // in 'class' wird das wort function wegegelassen
    constructor(firstName,lastName,phone){ 
        super(firstName,lastName); // muss angegeben werden um die Daten in der anderen "super"class aufzurufen
         this.phone = phone;        
    }

    call() {
        window.location.href = 'tel:' + this.phone;
    }
}