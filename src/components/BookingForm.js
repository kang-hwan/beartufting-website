import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import "./BookingForm.css";
import { width } from "@mui/system";

export default function BookingForm() {
  // ! POST request
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const response = await fetch(`http://localhost:3000/request`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        submitTime: new Date(),
        name: "test",
        mobile: "test",
        email: "",
        tufting: tfCount,
        punchNeedle: pnCount,
        fluidArt: faCount,
        illustration: ilCount,
        kidsVoucher: kvCount,
        totalAttend: totalAttend,
        totalDeposit: totalDeposit,
        message: "",
      }),
    });

    const data = await response.json();
    console.log("data: ", data);
  };

  // ! Counters
  // Tufting Class
  const [tfCount, setTfCount] = useState(0);
  function decrementTf() {
    if (tfCount > 0) {
      setTfCount(tfCount - 1);
    }
  }

  function incrementTf() {
    setTfCount(tfCount + 1);
  }

  // Punch Needle Class
  const [pnCount, setPnCount] = useState(0);
  function decrementPn() {
    if (pnCount > 0) {
      setPnCount(pnCount - 1);
    }
  }

  function incrementPn() {
    setPnCount(pnCount + 1);
  }

  // Fluid Art
  const [faCount, setFaCount] = useState(0);
  function decrementFa() {
    if (faCount > 0) {
      setFaCount(faCount - 1);
    }
  }

  function incrementFa() {
    setFaCount(faCount + 1);
  }

  // Image Illustration
  const [ilCount, setIlCount] = useState(0);
  function decrementIl() {
    if (ilCount > 0) {
      setIlCount(ilCount - 1);
    }
  }

  function incrementIl() {
    setIlCount(ilCount + 1);
  }

  // Creative Kids Voucher
  const [kvCount, setKvCount] = useState(0);
  function decrementKv() {
    if (kvCount > 0) {
      setKvCount(kvCount - 1);
    }
  }

  function incrementKv() {
    setKvCount(kvCount + 1);
  }

  // Total Attend
  const totalAttend = tfCount + pnCount + faCount;

  // Deposits Total
  const totalDeposit =
    (tfCount + pnCount + faCount + ilCount) * 50 + kvCount * -100;

  // ! Form Return
  return (
    <form className="form-container" onSubmit={(e) => submitHandler(e)}>
      <h3 style={{ fontWeight: "bold", paddingBottom: "15px" }}>
        BOOKING REQUEST FORM
      </h3>
      <Stack spacing={2} direction="column">
        <Box>
          <h4>Your Details</h4>
          <Stack spacing={2} className="booking-step1" direction="row">
            <TextField
              id="filled-basic"
              label="Full Name"
              variant="filled"
              size="normal"
              style={{ flex: "2" }}
              required
            />
            <TextField
              id="filled-basic"
              label="Mobile"
              variant="filled"
              size="normal"
              style={{ flex: "2" }}
              required
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              size="normal"
              style={{ flex: "3" }}
              required
            />
          </Stack>
        </Box>
        <Box>
          <h4 style={{ margin: "0px" }}>Class Selection</h4>
          <p
            style={{
              marginTop: "0px",
              color: "gray",
              fontSize: "14px",
            }}
          >
            * Max. capacity per session: 10pp <br />* Deposit: $50pp
          </p>
          <Stack direction="row" spacing={3} className="class-stack">
            <h5 className="class-title">Tufting</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement" onClick={decrementTf}>
                -
              </button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                {tfCount}
              </h5>
              <button className="btn-increment" onClick={incrementTf}>
                +
              </button>
            </div>
            <h5 style={{ width: "50px" }}>${tfCount * 50}</h5>
          </Stack>
          <Stack direction="row" spacing={3} className="class-stack">
            <h5 className="class-title">Punch Needle</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement" onClick={decrementPn}>
                -
              </button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                {pnCount}
              </h5>
              <button className="btn-increment" onClick={incrementPn}>
                +
              </button>
            </div>
            <h5 style={{ width: "50px" }}>${pnCount * 50}</h5>
          </Stack>
          <Stack direction="row" spacing={3} className="class-stack">
            <h5 className="class-title">Fluid Art</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement" onClick={decrementFa}>
                -
              </button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                {faCount}
              </h5>
              <button className="btn-increment" onClick={incrementFa}>
                +
              </button>
            </div>
            <h5 style={{ width: "50px" }}>${faCount * 50}</h5>
          </Stack>
          <p
            style={{
              marginTop: "13px",
              marginBottom: "0",
              color: "gray",
              fontSize: "14px",
            }}
          >
            * Add-on
          </p>
          <Stack direction="row" spacing={3} className="addOn-stack">
            <h5 className="class-title">Image Illustration</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement" onClick={decrementIl}>
                -
              </button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                {ilCount}
              </h5>
              <button className="btn-increment" onClick={incrementIl}>
                +
              </button>
            </div>
            <h5 style={{ width: "50px" }}>${ilCount * 50}</h5>
          </Stack>
          <Stack direction="row" spacing={3} className="addOn-stack">
            <h5 className="class-title">Creative Kids Voucher</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement" onClick={decrementKv}>
                -
              </button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                {kvCount}
              </h5>
              <button className="btn-increment" onClick={incrementKv}>
                +
              </button>
            </div>
            <h5 style={{ width: "50px" }}>${kvCount * -100}</h5>
          </Stack>
          <Stack>Deposits Total: ${totalDeposit}</Stack>
        </Box>
        <Box>
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={10}
            defaultValue=""
            variant="filled"
            fullWidth
          />
        </Box>
        <Stack>
          <Button variant="contained" type="submit">
            Send Request
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
