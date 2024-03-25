// This file is for reference only

// Add CipherText B to CipherText A and store the sum in a destination CipherText C
evaluator.add(Cipher_A, Cipher_B, Cipher_C);

// Add a PlainText A to a CipherText A and store the sum in a destination CipherText B
evaluator.addPlain(Cipher_A, Plain_A, Cipher_B);

// Subtract CipherText B from CipherText A and store the difference in a destination CipherText
evaluator.sub(Cipher_A, Cipher_B, Cipher_C);

// Subtract a PlainText A from a CipherText A and store the difference in a destination CipherText B
evaluator.subPlain(Cipher_A, Plain_A, Cipher_B);

// Multiply CipherText A by CipherText B and store the product in a destination CipherText
evaluator.multiply(Cipher_A, Cipher_B, Cipher_C);

// Multiply CipherText A by PlainText A and store the product in a destination CipherText B
evaluator.multiplyPlain(Cipher_A, Plain_A, Cipher_B);

// Sum all elements of a CipherText and store the result in a destination CipherText B
evaluator.sumElements(Cipher_A, Galois_key_Keypair_A_, schemeType, Cipher_B);

// Square CipherText A and store the result in a destination CipherText
evaluator.square(Cipher_A, Cipher_B);
