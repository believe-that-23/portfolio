const mongoose = require('mongoose');
const { Intro, About, Experience, Projects, Contact } = require('./models/portfolioModel');


mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
    .then(() => {
        console.log('connection open');
    })
    .catch(err => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("database connected");
})

const intros = [
    {
        welcomeText: "Hi, I'm",
        firstName: "Arnav Kumar",
        lastName: "Pandey",
        caption: "I build things on the web",
        description: "I am a Fullstack Web Developer. I also know basics of blockchain development which includes smart contracts with solidity and ethereum. I am also good at data structures and algorithms."

    }
]

const about = [
    {
        lottieURL: "https://assets2.lottiefiles.com/private_files/lf30_WdTEui.json",
        description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur ex labore similique doloribus nostrum quia obcaecati voluptas itaque culpa sint perferendis praesentium repudiandae recusandae architecto, fuga vitae explicabo suscipit?",
        description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur ex labore similique doloribus nostrum quia obcaecati voluptas itaque culpa sint perferendis praesentium repudiandae recusandae architecto, fuga vitae explicabo suscipit?",
        skills: [
            "JavaScript",
            "React",
            "Node",
            "Express",
            "MongoDB",
            "C++",
            "Ethereum",
            "Solidity",
            "Smart-Contracts",
            "Web3.js"
        ]
    },
];

const experiences = [
    {
        company: "Codechef MMMUT Chapter",
        title: "CP Mentor",
        period: "2020-2022",
        description: "asdf",
    },
    {
        company: "Codechasdfasdfapter",
        title: "CP asdfasdf",
        period: "2020-asdfa",
        description: "asdfasdfasdf",
    }
];

const projects = [
    {
        technologies: ['asdf'],
        title: "CP asdf",
        image: "asdf",
        description: "asdfasdf",
        link: "asdfasdf"
    }
]

const user = [{
    name: "Arnav Kumar Pandey",
    email: "pandey.arnav2399@gmail.com",
    gender: "Male",
    mobile: "7906535739",
    address: "Aligarh, Uttar Pradesh, India",
    age: "22"
}];

const seed = async () => {
    await Intro.deleteMany({});
    await Projects.deleteMany({});
    await Contact.deleteMany({});
    await Experience.deleteMany({});
    await About.deleteMany({});
    const intro = new Intro(intros[0]);
    const abou = new About(about[0]);
    for (let i = 0; i < experiences.length; i++) {
        const experience = new Experience(experiences[i]);
        await experience.save();
    }
    for (let i = 0; i < projects.length; i++) {
        const project = new Projects(projects[i]);
        await project.save();
    }
    const contact = new Contact(user[0]);
    await intro.save();
    await abou.save();
    await contact.save();
}

seed().then(() => {
    mongoose.connection.close();
})


