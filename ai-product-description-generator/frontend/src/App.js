import React, { useState } from 'react';
import { Container, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button, Box, Card, CardContent, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    productName: '',
    productType: '',
    keyFeatures: '',
    targetAudience: '',
    tone: 'professional',
    length: 'medium'
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5002/api/generate-description', formData);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while generating the description');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(result.description);
    // You could add a toast notification here
  };

  const tones = [
    'professional',
    'casual',
    'enthusiastic',
    'luxurious',
    'minimalist',
    'friendly'
  ];

  const lengths = [
    'short (1-2 sentences)',
    'medium (3-4 sentences)',
    'long (5-6 sentences)'
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
        AI Product Description Generator
      </Typography>
      
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
            
            <TextField
              fullWidth
              margin="normal"
              label="Product Type"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              required
            />
            
            <TextField
              fullWidth
              margin="normal"
              label="Key Features (one per line)"
              name="keyFeatures"
              value={formData.keyFeatures}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
            
            <TextField
              fullWidth
              margin="normal"
              label="Target Audience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              required
            />
            
            <FormControl fullWidth margin="normal">
              <InputLabel id="tone-label">Tone</InputLabel>
              <Select
                labelId="tone-label"
                name="tone"
                value={formData.tone}
                onChange={handleChange}
                required
              >
                {tones.map((tone) => (
                  <MenuItem key={tone} value={tone}>{tone}</MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <FormControl fullWidth margin="normal">
              <InputLabel id="length-label">Length</InputLabel>
              <Select
                labelId="length-label"
                name="length"
                value={formData.length}
                onChange={handleChange}
                required
              >
                {lengths.map((length) => (
                  <MenuItem key={length} value={length}>{length}</MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <Button 
                type="submit" 
                variant="contained" 
                size="large"
                disabled={loading}
                sx={{ px: 4, py: 2 }}
              >
                {loading ? <CircularProgress size={24} /> : 'Generate Description'}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      {result && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Generated Description for: {result.productName}
            </Typography>
            <Typography variant="body1" paragraph>
              {result.description}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" color="textSecondary">
                Generated on: {new Date(result.timestamp).toLocaleString()}
              </Typography>
              <Button 
                variant="outlined" 
                onClick={handleCopyToClipboard}
              >
                Copy to Clipboard
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default App;