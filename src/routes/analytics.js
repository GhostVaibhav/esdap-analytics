const express = require("express");

const router = express.Router();
const generateStudentPerformanceScore = require("../controllers/analyticLogic");

// /api/analytics/student
router.post("/student", async (req, res) => {
	// Extract data from request body
	const {
		context,
		academicScores,
		attendancePercentage,
		extracurricularActivities,
		basicFitnessScores,
		teamworkSkillsScores,
		recommendationLetters,
		researchExperience,
	} = req.body;

	// Calculate student's performance score
	const { finalScore } = generateStudentPerformanceScore(
		context,
		academicScores,
		attendancePercentage,
		extracurricularActivities,
		basicFitnessScores,
		teamworkSkillsScores,
		recommendationLetters,
		researchExperience
	);

	// Send response
	res.json({ finalScore });
});
