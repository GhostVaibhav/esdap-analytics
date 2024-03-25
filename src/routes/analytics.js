const express = require("express");

const router = express.Router();
const generateStudentPerformanceScore = require("../controllers/analyticLogic");

// /api/analytics/test
router.get("/test", (req, res) => {
	res.json({ message: "Hello, World!" });
});

// /api/analytics/student=performance
router.get("/student-performance", async (req, res) => {
	try {
		// Extract data from request body
		const {
			context,
			Galois_key_Keypair_A_,
			Cipher_academicScores,
			Cipher_attendancePercentage,
			Cipher_extracurricularActivities,
			Cipher_basicFitnessScores,
			Cipher_teamworkSkillScores,
			Cipher_recommendationLetters,
			Cipher_researchExperience,
		} = req.body;

		// Calculate student's performance score
		const { cipherScore1, cipherScore2 } = generateStudentPerformanceScore(
			context,
			Galois_key_Keypair_A_,
			Cipher_academicScores,
			Cipher_attendancePercentage,
			Cipher_extracurricularActivities,
			Cipher_basicFitnessScores,
			Cipher_teamworkSkillScores,
			Cipher_recommendationLetters,
			Cipher_researchExperience
		);

		// Send response
		res.json({ cipherScore1, cipherScore2 });
	} catch (error) {
		console.error("Error processing request:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
