const router = require('express').Router();
const { Experience, Intro, About, Projects, Contact } = require('../models/portfolioModel')

const User = require('../models/userModel')
// get all portfolio-data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const experience = await Experience.find();
        const about = await About.find();
        const projects = await Projects.find();
        const contact = await Contact.find();

        res.status(200).send({
            intro: intros[0],
            about: about[0],
            project: projects,
            experiences: experience,
            contact: contact[0]
        })
    } catch (err) {
        res.status(500).send(err);
    }
})

// update intro
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;

//update about
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// add experience
router.post('/add-experience', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update experience
router.post('/update-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete-experience
router.post('/delete-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})
// add projects
router.post('/add-project', async (req, res) => {
    try {
        const project = new Projects(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update project 
router.post('/update-project', async (req, res) => {
    try {
        const project = await Projects.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project updated"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete-project
router.post('/delete-project', async (req, res) => {
    try {
        const project = await Projects.findOneAndDelete(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//update contact

router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            {
                _id: req.body._id
            },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/admin-login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password, });

        user.password = "";
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login Successfully",
            });
        } else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid User or Password",
            })
        }

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;