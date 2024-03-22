const generateStudentPerformanceScore = async () => {
	const SEAL = require("node-seal");
	// Wait for the web assembly to fully initialize
	const seal = await SEAL();

	const {
		_addCC,
		_addCP,
		_subtractCC,
		_subtractCP,
		_multiplyCC,
		_multiplyCP,
	} = require("customFunctions.js");

	const normalizeData = (data) => {
		if (!Array.isArray(data)) throw new TypeError("");
	};
};
