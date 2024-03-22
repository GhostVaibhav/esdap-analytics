// Add CipherText B to CipherText A and store the sum in a destination CipherText C
const _addCC = (Cipher_A, Cipher_B, Cipher_C) => {
	evaluator.add(Cipher_A, Cipher_B, Cipher_C);
};
// Add a PlainText A to a CipherText A and store the sum in a destination CipherText B
const _addCP = (Cipher_A, Plain_A, Cipher_B) => {
	evaluator.addPlain(Cipher_A, Plain_A, Cipher_B);
};

// Subtract CipherText B from CipherText A and store the difference in a destination CipherText
const _subtractCC = (Cipher_A, Cipher_B, Cipher_C) => {
	evaluator.sub(Cipher_A, Cipher_B, Cipher_C);
};

// Subtract a PlainText A from a CipherText A and store the difference in a destination CipherText B
const _subtractCP = (Cipher_A, Plain_A, Cipher_B) => {
	evaluator.subPlain(Cipher_A, Plain_A, Cipher_B);
};

// Multiply CipherText A by CipherText B and store the product in a destination CipherText
const _multiplyCC = (Cipher_A, Cipher_B, Cipher_C) => {
	evaluator.multiply(Cipher_A, Cipher_B, Cipher_C);
};
// Multiply CipherText A by PlainText B and store the product in a destination CipherText
const _multiplyCP = (Cipher_A, Plain_A, Cipher_B) => {
	evaluator.multiplyPlain(Cipher_A, Plain_A, Cipher_B);
};

// Sum all elements of a CipherText and store the result in a destination CipherText
const _sumAll = (Cipher_A, Galois_key_Keypair_A_, schemeType, Cipher_B) => {
	evaluator.sumElements(
		Cipher_A,
		Galois_key_Keypair_A_,
		schemeType,
		Cipher_B
	);
};

// Export the functions
module.exports = {
	_addCC,
	_addCP,
	_subtractCC,
	_subtractCP,
	_multiplyCC,
	_multiplyCP,
	_sumAll,
};
