const clock = document.querySelector('.clock');

const updateTime = () => {
    const present = new Date();
    const h = present.getHours();
    const m = present.getMinutes();
    const s = present.getSeconds();

    const html = `
        <span>${h}h</span> :
        <span>${m}m</span> :
        <span>${s}s</span>
    `;

    clock.innerHTML = html;
};

setInterval(updateTime, 1000);
