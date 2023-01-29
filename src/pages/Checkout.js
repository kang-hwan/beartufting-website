import { useState } from "react"

export default function Checkout() {
  const [step, setStep] = useState(0);

  if(step === 0){
    return(
      <div>
        <p>name</p>
        <p>mobile</p>
        <p>description</p>
        <button onClick={() => setStep(1)}>next</button>
      </div>
    )
  }
  
  if(step === 1) {
    return(
      <div>
        <p>address</p>
        <button onClick={() => setStep(2)}>next</button>
      </div>
    )  
  }


  return(
    <div>
      <p>congrats</p>
      <button>Finish</button>
    </div>
  )
}