# AI Product Description Generator

A full-stack web application that uses AI to generate compelling product descriptions for e-commerce and marketing purposes.

## Features

- **Free AI-Powered Descriptions**: Uses rule-based template generation (no API key required)
- **Customizable Input**: Specify product name, type, features, target audience, tone, and length
- **Modern UI**: Clean, responsive React interface with Material-UI components
- **Easy to Use**: Simple form-based input with real-time generation
- **Production Ready**: Can be deployed for free using serve

## Tech Stack

### Backend
- **Node.js** with **Express** framework
- **Rule-based AI** for template-driven text generation
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

### Free Version (No API Key Required)
This version uses a rule-based AI model with template generation, so no external API key is required.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5002`

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

### Production Deployment

To deploy the app for free:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Serve the build folder:
   ```bash
   npx serve -s build
   ```

3. The app will be available at `http://localhost:51953` (port may vary)

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
- `PORT`: Server port (optional, defaults to 5002)

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

1. **CORS Errors**: Make sure the frontend is running on `localhost:3000` and backend on `localhost:5002`
2. **Port Conflicts**: If port 5002 is in use, change the PORT environment variable in backend/.env
3. **Network Errors**: Ensure both servers are running and accessible

### Getting Help

If you encounter issues:
1. Check the browser console for frontend errors
2. Check the terminal for backend errors
3. Ensure both servers are running on the correct ports (backend: 5002, frontend: 3000)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This application uses OpenAI's API and is subject to their [terms of service](https://openai.com/policies/terms-of-use). Generated content should be reviewed and edited as needed for your specific use case.