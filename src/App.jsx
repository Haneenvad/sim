import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'

import './App.css'

function App() {
  const [principle, setPrinciple] = useState(0)
  const [isInvalidPrinciple, setisInvalidPrinciple] = useState(false)

  const [interest, setInterest] = useState(0)
  const [isInvalidInterest, setisInvalidInterest] = useState(false)

  const [year, setYear] = useState(0)
  const [isInvalidYear, setisInvalidYear] = useState(false)

  // State for simple interest
  const [simpleInterest, setSimpleInterest] = useState(0)

  const validUserInput = (tag) => {
    const { name, value } = tag
    console.log(name, value)
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === 'principle') {
        setPrinciple(value)
        setisInvalidPrinciple(false)
      } else if (name === 'interest') {
        setInterest(value)
        setisInvalidInterest(false)
      } else if (name === 'year') {
        setYear(value)
        setisInvalidYear(false)
      }
    } else {
      if (name === 'principle') {
        setisInvalidPrinciple(true)
      } else if (name === 'interest') {
        setisInvalidInterest(true)
      } else if (name === 'year') {
        setisInvalidYear(true)
      } else {
        alert('Enter field completely')
      }
    }
  }

  const handleReset = () => {
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0) // Resetting simple interest
    setisInvalidPrinciple(false)
    setisInvalidInterest(false)
    setisInvalidYear(false)
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log('button clicked')
    if (principle && interest && year) {
      const calculatedInterest = (principle * interest * year) / 100
      setSimpleInterest(calculatedInterest) // Setting the calculated interest
    }
  }

  return (
    <div className="align-item-center justify-content-center p-3">
      <h2 style={{ marginLeft: '50px', marginTop: '20px' }}>
        Simple Interest Calculator
      </h2>
      <h4 style={{ marginLeft: '50px', marginTop: '5px' }}>
        Calculate your simple interest easily
      </h4>

      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{
          width: '600px',
          height: '200px',
          color: 'white',
          backgroundColor: 'orange',
          borderRadius: '20px',
          marginLeft: '50px',
          marginTop: '50px',
        }}
      >
        <h3>₹ {simpleInterest}</h3> {/* Display the calculated interest */}
        <h5>Total Simple Interest</h5>
      </div>

      <form className="mt-5">
        <div className="mb-3">
          <TextField
            name="principle"
            onChange={(e) => validUserInput(e.target)}
            value={principle || ''}
            className="w-100"
            id="outlined-basic"
            label="₹ Principle Amount"
            variant="outlined"
          />
        </div>
        {isInvalidPrinciple && (
          <p className="text-danger">Invalid principle amount</p>
        )}

        <div className="mb-3">
          <TextField
            name="interest"
            onChange={(e) => validUserInput(e.target)}
            value={interest || ''}
            className="w-100"
            id="outlined-basic"
            label="Rate of interest (p.a) %"
            variant="outlined"
          />
        </div>
        {isInvalidInterest && (
          <p className="text-danger">Invalid Interest</p>
        )}

        <div className="mb-3">
          <TextField
            name="year"
            onChange={(e) => validUserInput(e.target)}
            value={year || ''}
            className="w-100"
            id="outlined-basic"
            label="Time period (Yr)"
            variant="outlined"
          />
        </div>
        {isInvalidYear && <p className="text-danger">Invalid Year</p>}
      </form>

      <Stack direction="row" spacing={2}>
        <Button
          type="submit"
          onClick={handleCalculate}
          variant="contained"
          style={{ backgroundColor: 'black', width: '50%' }}
        >
          Calculate
        </Button>
        <Button
          onClick={handleReset}
          variant="outlined"
          style={{ width: '50%' }}
        >
          Reset
        </Button>
      </Stack>
    </div>
  )
}

export default App
