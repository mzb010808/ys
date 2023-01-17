new TypeIt("#ysmzb", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("ys && mzb")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("两周年快乐")
    .pause(3000)
    .go();

new TypeIt('#talkToYS', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();