import express from "express";
import { deleteJob, getAllJobs, getmyJobs, postJob, updateJob, getSigleJob } from "../controllers/jobControllers.js"
import { isAuthorized } from "../middlewares/auth.js"

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getmyJobs", isAuthorized, getmyJobs);
router.put("/update/:id", isAuthorized, updateJob);
router.delete("/delete/:id", isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSigleJob);

export default router;