import React, { useState } from 'react'

export default function ProductForm(){
  const [title, setTitle] = useState('');
  const [features, setFeatures] = useState('');
  const [audience, setAudience] = useState('');
  const [tone, setTone] = useState('friendly');
  const [length, setLength] = useState('short');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [useBullets, setUseBullets] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setResult('');

    try{
      const res = await fetch('http://localhost:4000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, features, audience, tone, length, useBullets })
      });
      const data = await res.json();
      if(data.success) setResult(data.description);
      else setResult('Error: ' + (data.error || 'Unknown'));
    }catch(err){
      setResult('Network error: ' + err.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>Product title
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="E.g. Wireless Bluetooth Earbuds" />
      </label>

      <label>Key features (comma separated)
        <textarea value={features} onChange={e=>setFeatures(e.target.value)} placeholder="Noise-cancelling, 30h battery, waterproof" />
      </label>

      <label>Target audience
        <input value={audience} onChange={e=>setAudience(e.target.value)} placeholder="E.g. commuters, fitness lovers" />
      </label>

      <label>Tone
        <select value={tone} onChange={e=>setTone(e.target.value)}>
          <option value="friendly">Friendly</option>
          <option value="luxury">Luxury</option>
          <option value="professional">Professional</option>
          <option value="fun">Fun</option>
        </select>
      </label>

      <label>Length
        <select value={length} onChange={e=>setLength(e.target.value)}>
          <option value="short">Short (1-2 sentences)</option>
          <option value="medium">Medium (1 short paragraph)</option>
          <option value="long">Long (detailed, includes use cases)</option>
        </select>
      </label>

      <label>
        <input type="checkbox" checked={useBullets} onChange={e=>setUseBullets(e.target.checked)} /> Use bullet points
      </label>

      <button type="submit" disabled={loading}>{loading ? 'Generating...' : 'Generate'}</button>

      <section className="output">
        <h3>Generated description</h3>
        <div className="result">{result ? result : <em>No output yet</em>}</div>
      </section>
    </form>
  )
}