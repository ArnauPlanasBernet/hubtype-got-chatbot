# Game of Thrones Chatbot

Welcome to the Game of Thrones chatbot project! This chatbot allows users to interact with various elements from the Game of Thrones universe. The bot can provide information about different houses, display custom-generated images using DALL-E 3, and generate responses using the GPT-4 model from OpenAI.

## Project Phases

1. **Project and Bot Creation**
    - Initial setup and configuration of the Botonic project.
2. **Creation of a Dummy Carousel**
    - Implemented a basic carousel to showcase the functionality.
3. **API Carousel**
    - Integrated the An API of Ice and Fire to dynamically fetch house information.
4. **DALL-E 3 Integration**
    - Utilized DALL-E 3 to generate images based on house descriptions.
5. **Refactorization**
    - Improved the code structure and organization for better maintainability.
6. **GPT-4 Chat Integration**
    - Integrated OpenAI's GPT-4 model to generate dynamic chat responses.
7. **Webchat Style Integration**
    - Customized the webchat UI to match the Game of Thrones theme.
8. **Upgrade AI Prompts**
    - Enhanced AI prompts for better interaction and response quality.

## Configuration

To run the chatbot correctly, you need to modify the following files to include your OpenAI API token:

1. `src/actions/chat.jsx`
2. `src/utils.js`

Replace the placeholder with your actual OpenAI API token.

## Issues Faced During the Project

- **Development Environment**:
  - Initially developed on a Windows PC despite recommendations for Linux/macOS.
  - Solution: Installed Ubuntu on a laptop for better compatibility.

- **Repository Creation**:
  - Faced issues creating public repositories on GitHub.
  - Solution: Recently created a public repository using a different GitHub account.
  - Problem: "lost" the sequential commits and the history of the project.

- **Carousel Styling**:
  - Found it challenging to edit carousel styles due to lack of specific documentation.
  - Solution: Used trial and error with CSS and Botonic's style properties.

- **DALL-E 3 Prompt Optimization**:
  - Optimizing prompts for DALL-E 3 was confusing and required multiple iterations.

## Documentation and Resources

- **Botonic Documentation**:
  - [Botonic.io/docs](https://botonic.io/docs) for implementing AI and APIs.
  - [Botonic.io/examples](https://botonic.io/examples) for carousel examples.
- **ChatGPT**:
  - Used for style editing and Game of Thrones information.

## Example Configuration for OpenAI API Key

In `src/actions/chat.jsx`:

```javascript
const OPENAI_API_KEY = 'your-openai-api-key';
