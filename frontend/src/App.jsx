import React, { useState } from 'react'
import ProductForm from './ProductForm'

export default function App(){
  return (
    <div className="app">
      <header>
        <h1>AI Product Description Generator</h1>
        <p>Enter product details and get a ready-to-use e-commerce description.</p>
      </header>
      <main>
        <ProductForm />
      </main>
    </div>
  )
}