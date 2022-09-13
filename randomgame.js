function randomGame() {
    let counter = 0;
    let timer = setInterval(function () {
        let number = Math.random();

        counter++;
        if (number > 0.45) {
            clearInterval(timer);
            if (counter > 1) {
                console.log(`It took ${counter} tries`);
            } else {
                console.log(`It took ${counter} try`);
            };
        }
    }, 1000);
}
randomGame();