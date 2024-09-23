
// Beschreibung wie ein object aussehen soll (vorlage / schablone)
let contacts = [ 
    new Contact('Kamila','Kleinfeld', '01735451636'),
    new Friend('Erika', 'Mustermann')
]; // so werden im console Log, direkt angezeigt welche object class sich im array befindet

// let contacts = [  // JSON = Javascript Object Notation
//     {      
//         'firstName' : 'Kamila',
//         'lastName' : 'Kipa',
//         'adress' : 'Musterstr'
//     }
// ];

// new Contact() --> erstellt das vorgegebene object --> siehe class , sind aber undefined und müssen noch zugewiesen werden.
function addContact(firstName,lastName,phone) {
    // const myContact = new Contact();
    // myContact['firstName'] = firstName;
    // myContact.lastName = lastName;   // Erste variante

    //Schönere variante mit nutzen des constructor
    const myContact = new Contact(firstName,lastName,phone);
    contacts.push (myContact);
}

addContact('Toni', 'Kleinfeld', '01735451636');
addContact('Anton', 'Berger', '01735451636');
addContact('Micha', 'Demon', '01735451636');



let toni = new Contact('Toni','Gebhardt', '01735451636');
toni.printFullName();
//oder
contacts[0].printFullName()

// Aufrufbare functionen z.b 
// toni.printFullName()
// toni.call()  
// führt die entsprechende function der class auf