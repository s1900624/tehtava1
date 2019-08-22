(() => {
    let count = 0;
    let counterId = 0;
    const counter = () => {
        counterId = setTimeout( () => {
            console.log('setTimeout(), Current count is %s.', count);
            count = count < 100 ? count += 1 : 0;
            counter();
        }, 120);
    }
    counter();
})();


(() => {
    let count = 0;
    setInterval( () => {
        console.log('setInterval(), Current count is %s.', count);
        count = count < 100 ? count += 1 : 0;
    }, 120);
})();