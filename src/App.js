import './App.css';
import React, { useState } from "react";

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function App() {
  const [iYear, setiYear] = useState();
  const [fYear, setfYear] = useState();
  const [amount, setAmount] = useState();
  const [finalAmount, setFinalAmount] = useState();
  const [isError, setIsError] = useState();

  const calculate = () => {
    const rates = [1.0079, 0.8425, 1.0561, 1.0442, 0.9915, 1.0427, 0.9508, 1.0862, 0.9762, 1.0, 1.065, 1.0153, 1.203, 1.10, 0.875, 0.9156, 0.9433, 0.9549, 1.0, 0.9213, 0.9658, 1.0354, 0.8974, 0.9238, 1.0206, 1.0, 1.0101, 0.95, 0.9789, 0.9892, 0.9457, 0.9885, 0.9767, 1.0238, 1.0233, 1.0568, 1.0323, 0.9688, 1.0, 0.9355, 1.0, 0.9425, 0.9024, 1.0135, 1.0133, 1.0132, 1.0649, 0.9634, 0.9747, 1.013, 0.9872, 1.0, 1.0, 1.0909, 1.0357, 0.977, 1.0235, 0.9425, 1.0122, 1, 1.0602, 1.1477, 1.2475, 1.246, 1.0382, 0.9755, 0.9308, 0.9595, 0.9577, 0.9632, 0.9313, 1, 0.9836, 0.95, 0.9649, 0.9727, 0.9813, 0.9524, 1, 1.02, 1, 1, 0.9902, 0.9703, 0.9898, 0.9691, 1.0106, 1, 0.9684, 0.9891, 1, 1, 0.989, 0.9556, 0.9767, 1, 0.9881, 1, 1, 1.012, 1.0119, 1.0118, 1.0233, 1.0114, 0.9888, 1.0227, 1.0444, 0.9787, 0.9891, 1.044, 1, 1.0211, 1.0206, 1.0101, 1.01, 1.0792, 1.1743, 1.1797, 1.1457, 1.1561, 0.895, 0.9385, 1.0179, 1, 1.0234, 1.0114, 0.9831, 0.9828, 1, 0.9766, 0.9102, 0.9013, 0.9489, 1.0308, 1.0224, 1.0146, 1.036, 0.9792, 0.9858, 1.0072, 1.05, 1.1088, 1.0613, 1.0173, 1.0227, 1.0833, 1.1436, 1.0807, 0.9876, 1.0126, 1.0788, 1.0192, 1.0075, 1.0075, 0.9963, 1.0149, 1.0331, 1.0285, 1.0069, 1.0172, 1.0101, 1.01, 1.0132, 1.0131, 1.0161, 1.0286, 1.0309, 1.0419, 1.0546, 1.0572, 1.0438, 1.0321, 1.0622, 1.1104, 1.0913, 1.0576, 1.065, 1.0759, 1.1135, 1.135, 1.1032, 1.0616, 1.0321, 1.0432, 1.0356, 1.0186, 1.0365, 1.0414, 1.0482, 1.054, 1.0421, 1.0301, 1.0299, 1.0256, 1.0283, 1.0295, 1.0229, 1.0156, 1.0221, 1.0336, 1.0285, 1.0158, 1.0228, 1.0266, 1.0339, 1.0323, 1.0285, 1.0384, 0.9964, 1.0164, 1.0316, 1.0207, 1.0146, 1.0162, 1.0012, 1.0126, 1.0213, 1.0249, 1.0176, 1.0179];

    //Initial Conditions
    if (iYear > 2020 || iYear < 1800 || fYear > 2020 || fYear < 1800 || fYear <= iYear) {
      setIsError("Invalid Inputs")
      setFinalAmount("");
    }
    else {
      let iMoney = amount * 1.0;
      let fMoney = amount;
      for (let i = iYear; i < fYear; i++) {
        let yearRate = rates[i - 1800];
        fMoney = fMoney * yearRate;
      }
      setIsError("")
      setFinalAmount(currencyFormat(iMoney) + " in " + iYear + " is worth " + currencyFormat(fMoney) + " in " + fYear + ".");
    }
  };

  return (
    <div className="App">
      <>
        <header className="title">
          <h1>Historic Inflation Calculator</h1>
        </header>
        <header className="init">
          <p>
            Enter Initial Year (between 1800 - 2020):
          </p>
          <input className="init-input"
            type="text"
            onChange={(e) => setiYear(e.target.value)}
            placeholder="Year"
          />
        </header>
        <header className="amount">
          <p>
            Enter amount of money in the initial year in USD:
          </p>
          <input className="amount-input"
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="$$$"
          />
        </header>
        <header className="final">
          <p>
            Enter Final Year (between 1800 - 2020):
          </p>
          <input className="final-input"
            type="text"
            onChange={(e) => setfYear(e.target.value)}
            placeholder="Year"
          />
        </header>
        <button className="calcButton" onClick={calculate}>Calculate</button>
        <h1 className="answer">{finalAmount}{isError}</h1>
      </>
    </div>
  );
}

export default App;
