const userSchemaTutor = require("../models/userSchemaTutor");
const express= require('express');
const router = express.Router();
router.get("/tutorreg", async (req, res) => {
    const qPrimelocation = req.query.primelocation;
    try {
        let tutors;
        if (qPrimelocation) {
        tutors = await userSchemaTutor.find({
          primelocation: {
            $in: [qPrimelocation],
          },
        });
        res.send({tutors});
      }
    }
      catch (err) {
        res.status(500).json(err);
      }
    })
    module.exports = router;  