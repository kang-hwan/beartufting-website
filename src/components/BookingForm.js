import React from "react";
import { Stack, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import "./BookingForm.css";

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
        name: "",
        mobile: "",
        email: "",
        tufting: "",
        punchNeedle: "",
        fluidArt: "",
        illustration: "",
        kidsVoucher: "",
        totalAttend: "",
        totalDeposit: "",
        message: "",
      }),
    });

    const data = await response.json();
    console.log("data: ", data);
  };

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
              <button className="btn-decrement">-</button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                0
              </h5>
              <button className="btn-increment">+</button>
            </div>
            <h5>$50</h5>
          </Stack>
          <Stack direction="row" spacing={3} className="class-stack">
            <h5 className="class-title">Punch Needle</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement">-</button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                0
              </h5>
              <button className="btn-increment">+</button>
            </div>
            <h5>$50</h5>
          </Stack>
          <Stack direction="row" spacing={3} className="class-stack">
            <h5 className="class-title">Fluid Art</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement">-</button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                0
              </h5>
              <button className="btn-increment">+</button>
            </div>
            <h5>$50</h5>
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
              <button className="btn-decrement">-</button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                0
              </h5>
              <button className="btn-increment">+</button>
            </div>
            <h5>$50</h5>
          </Stack>
          <Stack direction="row" spacing={3} className="addOn-stack">
            <h5 className="class-title">Creative Kids Voucher</h5>
            <div style={{ display: "flex" }}>
              <button className="btn-decrement">-</button>
              <h5
                style={{ backgroundColor: "whitesmoke", padding: "0 10px 0" }}
              >
                0
              </h5>
              <button className="btn-increment">+</button>
            </div>
            <h5>$50</h5>
          </Stack>
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
