function books(inputArray) {
    let shelvesId = {};
    let shelves = {};
    for (let command of inputArray) {
        if (command.includes("->")) {
            let [id, genre] = command.split(" -> ");
            if (!(id in shelvesId)) {
                shelvesId[id] = genre;
                shelves[genre] = [];
            } else {
                continue;
            }
        } else {
            let token = command.split(": ");
            let title = token.shift();
            let [author, genre] = token[0].split(", ");
            let book = { title, author, genre };
            if (genre in shelves) {
                shelves[genre].push(book);
            } else {
                continue;
            }
        }
    }
    let sortedArray = Object.entries(shelves).sort((a, b) => b[1].length - a[1].length);
    let sortedObject = Object.fromEntries(sortedArray);
    for (let shelf in sortedObject) {
        for (let id in shelvesId) {
            if (shelvesId[id] == shelf) {
                console.log(`${id} ${shelf}: ${sortedObject[shelf].length}`);
                let sortedBooks = sortedObject[shelf].sort((a, b) => a.title.localeCompare(b.title));
                for (let book of sortedBooks) {
                    console.log(`--> ${book.title}: ${book.author}`);
                }
            }
        }
    }
}
books(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);