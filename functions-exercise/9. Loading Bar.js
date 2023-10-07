function lodaingBar(loadingProcent) {
    let visalizing = visualizeLoading(loadingProcent);
    if (loadingProcent < 100) {
        console.log(`${loadingProcent}% [${visalizing.join("")}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(`[${visalizing.join("")}]`);
    }
}

function visualizeLoading(num) {
    let visualize = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
    for (let i = 0; i < visualize.length * num / 100; i++) {
        visualize[i] = "%";
    }
    return visualize;
}
lodaingBar(30);