const data = [
    {
        id: "#mudd1",
        name: "To Kill a Judithbird",
        image: "/static/images/to-kill-a-judithbird.png",
        description: "Judy mudd must face the bullying and accusations from her neighborhood.",
        link: "/static/stories/to-kill-a-judithbird.pdf"
    },
    {
        id: "#mudd-holiday1",
        name: "A Miracle on Judy Mudd Street",
        image: "/static/images/a-miracle-on-judy-mudd-street.png",
        description: "This holiday musical adventure brings in all your favorite characters from To Kill a Judithbird!",
        link: "/static/stories/a-miracle-on-judy-mudd-street.pdf"
    },
    {
        id: "#mudd2",
        name: "The Wizard of Mudd",
        image: "/static/images/the-wizard-of-mudd.png",
        description: "Judy and Hemery must escape the Mudd dimension.",
        link: "/static/stories/the-wizard-of-mudd.pdf"
    },
    {
        id: "#mudd3",
        name: "Life of Judy",
        image: "/static/images/life-of-judy.png",
        description: "Judy must make it back to Tallahassee before it falls under the new mayor.",
        link: "/static/stories/life-of-judy.pdf"
    }
];

let title = document.querySelector('#title-display');
let img = document.querySelector('#img-display');
let p = document.querySelector('#p-display');
let a = document.querySelector('#a-display');

let right = document.querySelector('.right-column');
let left = document.querySelector('.left-column');

for (let i = 0; i < data.length; i++) {
    const story = data[i];
    document.querySelector(story.id).addEventListener('click', function() {
        left.style.minWidth = '50%';
        left.style.maxWidth = '65%';
        right.style.visibility = 'initial';

        title.innerHTML = story.name;
        img.src = story.image;
        p.innerHTML = story.description;
        a.href = story.link;
    });
}