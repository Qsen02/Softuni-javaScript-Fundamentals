function extractEmail(input) {
    let pattern = /(?<=\s)([a-z0-9]+[\._-]?\w+@([a-z]+(-?[a-z]+(\.[a-z]+)+)+))(\b|(?=\s))/gi;
    let match = input.match(pattern);
    console.log(match.join("\n"));
}
extractEmail("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk. for more information.");