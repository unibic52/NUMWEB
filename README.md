# NUMWEB

A simple Javascript project demonstrating text encryption and decryption using custom encoding.It was inspired by keypad phone which contains alphanumerical keys, hence a given alphabet or a character can be mapped to a specific number sequence.

## How It Works

### Encryption Process
1. Accepts input text.
2. Encodes text using custom mappings.
4. Encodes the result and displays it.

### Decryption Process
1. Accepts the encrypted string.
4. Decodes the custom mappings to retrieve the original text.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NUMWEB.git
   cd NUMWEB
   npm install
   ```


## Usage
Run the main.html file using any browser.Follow the prompts to input text and receive the encrypted output. Provide the encrypted string and any required parameters to retrieve the original text.

## Example

### Encryption:
```
Input: HelloWorld!
Output: 44>33>5555556669<666777~5553<:11
```

### Decryption:
```
Input: 44>33>5555556669<666777~5553<:11
Output: HelloWorld!
```

## Limitations

- Not suitable for secure cryptographic purposes.
- Requires knowledge of the original encryption parameters 
