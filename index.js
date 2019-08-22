(() => {
    let count = 0;
    const counter = () => {
        setTimeout( () => {
            console.log('Current count is %s.', count);
            count = count < 100 ? count += 1 : 0;
            counter();
        }, 120);
    }
    counter();
})();