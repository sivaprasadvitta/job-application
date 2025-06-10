import express from "express";
import Job from '../models/Job.js'


const router = express.Router();


router.post('/', async (req, res) => {
    // console.log(req.body)
  try {
    const job = new Job(req.body);
    const saved = await job.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async(req,res)=>{
  console.log("from get")
    try{
        const jobs = await Job.find();
        res.status(200).json(jobs);

    }catch(error){
        res.status(400).json({error : error.message});
    }
})

export default router;