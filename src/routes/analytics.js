const express = require("express");

const router = express.Router();
const generateStudentPerformanceScore = require("../controllers/studentController");

router.post("/student-performance", (req, res) => {
	// Extract data from request body
	const {
		academicScores,
		attendancePercentage,
		extracurricularActivities,
		basicFitnessScores,
		teamworkSkills,
		recommendationLetters,
		researchExperience,
	} = req.body;

	// Calculate student's performance score
	const { finalScore, grade } = generateStudentPerformanceScore(
		academicScores,
		attendancePercentage,
		extracurricularActivities,
		basicFitnessScores,
		teamworkSkills,
		recommendationLetters,
		researchExperience
	);

	// Send response
	res.json({ finalScore, grade });
});

router.get("/test", (req, res) => {
	res.json({ message: "Hello, World!" });
});

module.exports = router;
