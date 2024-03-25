const generateStudentPerformanceScore = async (
	context,
	Galois_key_Keypair_A_,
	Cipher_academicScores,
	Cipher_attendancePercentage,
	Cipher_extracurricularActivities,
	Cipher_basicFitnessScores,
	Cipher_teamworkSkillScores,
	Cipher_recommendationLetters,
	Cipher_researchExperience
) => {
	const SEAL = require("node-seal");
	const seal = await SEAL();
	const schemeType = seal.SchemeType.ckks;
	const evaluator = seal.Evaluator(context);

	// Custom Functions

	// Encoder
	const _encoder = (array, Plain_A) => {
		ckksEncoder.encode(Float64Array.from(array), Math.pow(2, 32), Plain_A);
	};

	// 1  - Mean Calculation (academivScores)  - weightage - 0.4

	const arraySum1 = seal.CipherText();
	evaluator.sumElements(
		Cipher_academicScores,
		Galois_key_Keypair_A_,
		schemeType,
		arraySum1
	);

	const mean1 = seal.CipherText();
	const divideValue1 = seal.PlainText();
	_encoder([0.1667], divideValue1);
	//  1/6 = 0.1667 (6 denotes 6 elements of academicScores)

	evaluator.multiplyPlain(arraySum1, divideValue1, mean1);
	const weightedScore1 = seal.CipherText();
	const weightageValue1 = seal.PlainText();
	_encoder([0.4], weightageValue1);

	evaluator.multiplyPlain(mean1, weightageValue1, weightedScore1);

	// 2  - Attendence Calculator

	const weightedScore2 = seal.CipherText();
	const weightageValue2 = seal.PlainText();
	_encoder([0.1], weightageValue2);
	evaluator.multiplyPlain(
		Cipher_attendancePercentage,
		weightageValue2,
		weightedScore2
	);

	// 3  - Mean Calculation (extracurricularActivities) - weightage - 0.1

	const arraySum2 = seal.CipherText();
	evaluator.sumElements(
		Cipher_extracurricularActivities,
		Galois_key_Keypair_A_,
		schemeType,
		arraySum2
	);

	const mean2 = seal.CipherText();
	const divideValue2 = seal.PlainText();
	_encoder([0.3333], divideValue2);

	evaluator.multiplyPlain(arraySum2, divideValue2, mean2);

	const weightedScore3 = seal.CipherText();
	const weightageValue3 = seal.PlainText();
	_encoder([0.1], weightageValue3);
	evaluator.multiplyPlain(mean2, weightageValue3, weightedScore3);

	// 4  - Mean Calculation (basicFitnessScores) - weightage - 0.1

	const arraySum3 = seal.CipherText();
	evaluator.sumElements(
		Cipher_basicFitnessScores,
		Galois_key_Keypair_A_,
		schemeType,
		arraySum3
	);

	const mean3 = seal.CipherText();
	const divideValue3 = seal.PlainText();
	_encoder([0.25], divideValue3);
	evaluator.multiplyPlain(arraySum3, divideValue3, mean3);
	const weightedScore4 = seal.CipherText();
	const weightageValue4 = seal.PlainText();
	_encoder([0.1], weightageValue4);
	evaluator.multiplyPlain(mean3, weightageValue4, weightedScore4);

	// 5  - teamworkSkills Calculator - weightage - 0.1

	const weightedScore5 = seal.CipherText();
	const weightageValue5 = seal.PlainText();
	_encoder([2], weightageValue5);
	evaluator.multiplyPlain(
		Cipher_teamworkSkillScores,
		weightageValue5,
		weightedScore5
	);

	// 6  - recommendationLetters Calculator - weightage - 0.1

	const weightedScore6 = seal.CipherText();
	const weightageValue6 = seal.PlainText();
	_encoder([2], weightageValue6);
	evaluator.multiplyPlain(
		Cipher_recommendationLetters,
		weightageValue6,
		weightedScore6
	);

	// 7  - researchExperience Calculator - weightage - 0.1

	const weightedScore7 = seal.CipherText();
	const weightageValue7 = seal.PlainText();
	_encoder([2], weightageValue7);
	evaluator.multiplyPlain(
		Cipher_researchExperience,
		weightageValue7,
		weightedScore7
	);

	// Adding weightageScores

	// Adding similar scale sum first

	// Adding Array inputs like : [100.100,100] , [100,100,100,100,100,100]
	const weightedScore13 = seal.CipherText();
	evaluator.add(weightedScore1, weightedScore3, weightedScore13);

	const weightedScore134 = seal.CipherText();
	evaluator.add(weightedScore13, weightedScore4, weightedScore134);

	// Adding single Input array like : [100], [5]
	const weightedScore56 = seal.CipherText();
	evaluator.add(weightedScore5, weightedScore6, weightedScore56);

	const weightedScore567 = seal.CipherText();
	evaluator.add(weightedScore56, weightedScore7, weightedScore567);

	const weightedScore5672 = seal.CipherText();
	evaluator.add(weightedScore567, weightedScore2, weightedScore5672);

	let cipherScore1 = seal.CipherText();
	cipherScore1 = weightedScore134;

	let cipherScore2 = seal.CipherText();
	cipherScore2 = weightedScore5672;

	return { cipherScore1, cipherScore2 };
};

module.exports = { generateStudentPerformanceScore };
