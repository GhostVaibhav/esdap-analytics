# Student Analytics API

The Student Analytics API is a tool for analyzing student data securely using homomorphic encryption. It allows you to perform various analytical operations on encrypted student data without exposing the raw data. This API is built with Node.js and utilizes the node-seal library for homomorphic encryption.

## Flow

### Admin Side:

-   The admin encrypts the data using a public key, not a private key.
-   Sends the encrypted data to the API.

### API Side:

-   Receives the encrypted data from the admin.
-   Performs analysis operations directly on the encrypted data using homomorphic encryption.
-   Generates the final score and grade.
-   Returns the encrypted result to the admin.

### Admin Side:

-   Receives the encrypted result from the API.
-   Decrypts the result using a private key.

## Features

-   **Homomorphic Encryption**: Utilizes homomorphic encryption to perform analysis operations on encrypted student data without decryption.
-   **Secure Communication**: Supports encrypted communication between clients and the server using HTTPS.
-   **Customizable Analysis**: Provides flexibility to perform various analysis operations on student data.
-   **Scalable**: Built with Node.js and Express, making it easy to scale and maintain.
