// Function to calculate a student's performance score based on various factors

function generateStudentPerformanceScore(
	academicScores,
	attendancePercentage,
	extracurricularActivities,
	basicFitnessScores,
	teamworkSkillScores,
	recommendationLetters,
	researchExperience
) {
	// Function to normalize data (scale between 0 and 1) and handle potential errors
	const normalizeData = (data) => {
		if (!Array.isArray(data)) {
			throw new TypeError("Input data must be an array");
		}
		const min = Math.min(...data);
		const max = Math.max(...data);
		if (min === max) {
			return data.map(() => 1);
			// Return an array of ones (all values are the same)
		}
		return data.map((value) => (value - min) / (max - min));
	};

	// Normalize data for each component using the helper function
	const normalizedAcademicScores = normalizeData(academicScores);
	const normalizedAttendance = [attendancePercentage / 100]; // Convert to percentage
	const normalizedExtracurricularActivities = normalizeData(
		Object.values(extracurricularActivities)
	);
	const normalizedBasicFitnessScores = normalizeData(basicFitnessScores);
	const normalizedTeamworkSkillScores = normalizeData(teamworkSkillScores);
	const normalizedRecommendationLetters = [recommendationLetters / 10]; // Normalize to range [0, 1]
	const normalizedResearchExperience = [researchExperience / 10]; // Normalize to range [0, 1]

	// Weights assigned to different components (can be adjusted for different priorities)
	const weights = {
		academicScores: 0.4,
		attendance: 0.1,
		extracurricularActivities: 0.1,
		basicFitnessScores: 0.1,
		teamworkSkillScores: 0.1,
		recommendationLetters: 0.1,
		researchExperience: 0.1,
	};

	function getArrayMean(arr) {
		let sum = arr.reduce((acc, val) => acc + val, 0);
		return sum / arr.length;
	}

	// Function to calculate the weighted average of normalized data points
	const calculateWeightedAverage = (data, weights) => {
		const totalWeight = Object.values(weights).reduce(
			(sum, weight) => sum + weight,
			0
		);
		let weightedSum = 0;
		for (const [key, weight] of Object.entries(weights)) {
			weightedSum += weight * getArrayMean(normalizeData(data[key])); // Ensure data is normalized before averaging
		}
		return weightedSum / totalWeight;
	};

	// Calculate the weighted sum using the helper function
	const weightedSum = calculateWeightedAverage(
		{
			academicScores: normalizedAcademicScores,
			attendance: normalizedAttendance,
			extracurricularActivities: normalizedExtracurricularActivities,
			basicFitnessScores: normalizedBasicFitnessScores,
			teamworkSkillScores: normalizedTeamworkSkillScores,
			recommendationLetters: normalizedRecommendationLetters,
			researchExperience: normalizedResearchExperience,
		},
		weights
	);

	// Function to calculate the final score and corresponding grade letter
	const calculateFinalScoreAndGrade = (weightedSum) => {
		const finalScore = weightedSum * 100; // Scale weighted sum to 0-100 range
		const grade =
			finalScore >= 90
				? "S"
				: finalScore >= 80
				? "A"
				: finalScore >= 70
				? "B"
				: finalScore >= 60
				? "C"
				: "D";
		return { finalScore, grade };
	};

	// Calculate final score and grade using the helper function
	const { finalScore, grade } = calculateFinalScoreAndGrade(weightedSum);

	return { finalScore, grade };
}

// Example usage demonstrating how to call the function
let academicScores = [100, 100, 100, 100, 100];
let attendancePercentage = 100;
let extracurricularActivities = { Sports: 10, "Debate Club": 10, Music: 10 };
let basicFitnessScores = [100, 100, 100, 100, 100];
let teamworkSkillScores = [10, 10, 10, 10, 10];
let recommendationLetters = 10; // Out of 10
let researchExperience = 10; // Out of 10

let { finalScore, grade } = generateStudentPerformanceScore(
	academicScores,
	attendancePercentage,
	extracurricularActivities,
	basicFitnessScores,
	teamworkSkillScores,
	recommendationLetters,
	researchExperience
);
console.log("Final Score (%):", finalScore);
console.log("Grade:", grade);
