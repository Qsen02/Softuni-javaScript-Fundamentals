function comments(inputArray) {
    let articles = {};
    let users = new Set();
    for (let command of inputArray) {
        if (command.includes("user")) {
            let token = command.split("user ");
            let user = token[1];
            users.add(user);
        } else if (command.includes("article")) {
            let token = command.split("article ");
            let article = token[1];
            articles[article] = {};
        } else {
            let token = command.split(": ");
            let userArticle = token[0];
            let comment = token[1];
            let [user, article] = userArticle.split(" posts on ");
            let [commentTitle, commentContent] = comment.split(", ");
            if (article in articles) {
                if (users.has(user)) {
                    if (!(user in articles[article])) {
                        articles[article][user] = {
                            [commentTitle]: commentContent
                        };
                    } else {
                        if (commentTitle in articles[article][user]) {
                            articles[article][user][commentTitle] = commentContent;
                        } else {
                            articles[article][user] = {
                                [commentTitle]: commentContent
                            };
                        }
                    }
                }
            }
        }
    }
    let sortedArray = Object.entries(articles).sort(sortingByComments);
    let sortedArticals = Object.fromEntries(sortedArray);

    function sortingByComments(a, b) {
        let keyA = a[1];
        let keyB = b[1];
        let newA = Object.keys(keyA).length;
        let newB = Object.keys(keyB).length;
        return newB - newA;
    }
    for (let article in sortedArticals) {
        console.log(`Comments on ${article}`);
        let sortedArray = Object.entries(sortedArticals[article]).sort((a, b) => a[0].localeCompare(b[0]));
        let sortedUsers = Object.fromEntries(sortedArray);
        for (let user in sortedUsers) {
            let line = `--- From user ${user}: `;
            for (let comment in sortedUsers[user]) {
                line += `${comment} - ${sortedUsers[user][comment]}`;
            }
            console.log(line);
        }
    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping',
    'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I doreally like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much',
    'someUser posts on Movies: Like, I also dont like movies very much'
]);