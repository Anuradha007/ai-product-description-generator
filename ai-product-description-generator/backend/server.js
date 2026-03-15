const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'AI Product Description Generator API' });
});

// Free AI model for generating descriptions
function generateDescription({ productName, productType, keyFeatures, targetAudience, tone, length }) {
  // Simple rule-based generator as a free alternative to OpenAI
  const templates = [
    "Discover the amazing ${productName}, a ${productType} designed for ${targetAudience}. With features like ${keyFeatures}, this product offers ${tone} benefits that will ${length}.",
    "Introducing ${productName}, the perfect ${productType} for ${targetAudience}. Featuring ${keyFeatures}, this innovative solution provides ${tone} value and ${length}.",
    "Experience the difference with ${productName}, a premium ${productType} crafted for ${targetAudience}. Our ${tone} approach combines ${keyFeatures} to deliver ${length}.",
    "Upgrade your ${targetAudience} experience with ${productName}. This ${productType} features ${keyFeatures} and delivers ${tone} results in just ${length}.",
    "The ${productName} redefines what's possible for ${targetAudience}. With ${keyFeatures} and our ${tone} design, you'll enjoy ${length}."
  ];
  
  const template = templates[Math.floor(Math.random() * templates.length)];
  
  // Replace placeholders with actual values
  let description = template
    .replace(/\${productName}/g, productName)
    .replace(/\${productType}/g, productType)
    .replace(/\${targetAudience}/g, targetAudience)
    .replace(/\${keyFeatures}/g, keyFeatures.split('\n')[0] || keyFeatures)
    .replace(/\${tone}/g, tone)
    .replace(/\${length}/g, length);
  
  return description;
}

app.post('/api/generate-description', async (req, res) => {
  try {
    const { productName, productType, keyFeatures, targetAudience, tone, length } = req.body;

    // Validate required fields
    if (!productName || !productType || !keyFeatures || !targetAudience || !tone || !length) {
      return res.status(400).json({ 
        error: 'Missing required fields: productName, productType, keyFeatures, targetAudience, tone, length' 
      });
    }

    // Generate description using free model
    const description = generateDescription({
      productName,
      productType,
      keyFeatures,
      targetAudience,
      tone,
      length
    });

    res.json({
      success: true,
      description: description,
      productName: productName,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error generating description:', error);
    res.status(500).json({ 
      error: 'Failed to generate description. Please try again later.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;