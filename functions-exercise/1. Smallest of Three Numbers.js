function smallestNumber(num1, num2, num3) {
    let nums = [num1, num2, num3];
    let smallestNum = 0;
    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i];
        let isSmallest = true;
        for (let j = i + 1; j < nums.length; j++) {
            let nextNum = nums[j];
            if (curNum > nextNum) {
                isSmallest = false;
                break;
            }
        }
        if (isSmallest) {
            smallestNum = curNum;
            break;
        }
    }
    console.log(smallestNum);
}
smallestNumber(5, 3, 9);