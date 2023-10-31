function contacts(inputArray) {
    let phoneContacts = {};
    for (let contacts of inputArray) {
        let token = contacts.split(" ");
        let name = token[0];
        let phoneNumber = token[1];
        phoneContacts[name] = phoneNumber;
    }
    for (let key in phoneContacts) {
        console.log(`${key} -> ${phoneContacts[key]}`);
    }
}
contacts(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])