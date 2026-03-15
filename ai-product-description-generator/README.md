# AI Product Description Generator

A full-stack web application that uses AI to generate compelling product descriptions for e-commerce and marketing purposes.

## Features

- **AI-Powered Descriptions**: Uses OpenAI's GPT-3.5 Turbo model to generate product descriptions
- **Customizable Input**: Specify product name, type, features, target audience, tone, and length
- **Modern UI**: Clean, responsive React interface with Material-UI components
- **Easy to Use**: Simple form-based input with real-time generation

## Tech Stack

### Backend
- **Node.js** with **Express** framework
- **OpenAI API** for AI-powered text generation
- **CORS** for cross-origin requests
- **dotenv** for environment variables

### Frontend
- **React** with functional components and hooks
- **Material-UI** for beautiful, responsive UI components
- **Axios** for API communication

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- OpenAI API key

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Add your OpenAI API key to the `.env` file:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

## Usage

1. **Fill in the form** with your product details:
   - **Product Name**: The name of your product
   - **Product Type**: Category or type of product
   - **Key Features**: Important features (one per line)
   - **Target Audience**: Who the product is for
   - **Tone**: Desired tone (professional, casual, enthusiastic, etc.)
   - **Length**: Short, medium, or long description

2. **Click "Generate Description"** to create your AI-powered product description

3. **Copy the result** or use it directly in your marketing materials

## API Endpoints

### POST /api/generate-description

Generates a product description based on the provided parameters.

**Request Body:**
```json
{
  "productName": "Wireless Earbuds",
  "productType": "Electronics",
  "keyFeatures": "Noise cancellation\nLong battery life\nWater resistant",
  "targetAudience": "Tech-savvy professionals",
  "tone": "professional",
  "length": "medium"
}
```

**Response:**
```json
{
  "success": true,
  "description": "Generated product description text...",
  "productName": "Wireless Earbuds",
  "timestamp": "2023-12-07T10:30:00.000Z"
}
```

## Environment Variables

### Backend
- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `PORT`: Server port (optional, defaults to 5000)

## Project Structure

```
ai-product-description-generator/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   └── README.md
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── index.css
└── README.md
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure the frontend is running on `localhost:3000` and backend on `localhost:5000`
2. **API Key Errors**: Verify your OpenAI API key is correctly set in the `.env` file
3. **Network Errors**: Ensure both servers are running and accessible

### Getting Help

If you encounter issues:
1. Check the browser console for frontend errors
2. Check the terminal for backend errors
3. Verify your OpenAI API key is valid and has sufficient credits

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This application uses OpenAI's API and is subject to their [terms of service](https://openai.com/policies/terms-of-use). Generated content should be reviewed and edited as needed for your specific use case.