export const loggedInUi = () => {
    document.body.style.background = 'white';
    const ele = document.querySelectorAll('.white');
    Array.prototype.map.call(ele,(el) => {
        el.classList.remove('white');
        el.classList.add('black');
    });
};

export const loggedOutUi = () => {
    document.body.style.background = 'rgb(22, 82, 240)';
    const ele = document.querySelectorAll('.black');
    Array.prototype.map.call(ele, (el) => {
        el.classList.remove('black');
        el.classList.add('white');
    });
};