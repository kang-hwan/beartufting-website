import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqAccordion() {
  return (
    <div style={{ width: "800px", margin: "0 auto" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Q1. Is Tufting suitable for beginners?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! It is very simple and easy. You will have time for practice
            before you actually start making your piece. Our friendly
            instructors will help you throughout the process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>
              Q2. What sizes are there for tufting and how long does it take to
              complete each piece?
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can choose from 3 sizes - 60x60cm / 90x90cm / 100x140cm. <br />
            Depends on the size and details of the image you choose, finishing
            time will vary. <br />
            Generally, for 60x60cm takes about 1-3 hours, 90x90cm takes about
            3-6 hours and 100x140cm about 4-7 hours.
            <br />
            Time calculated for class only counts time spend on tufting gun -
            excludes drawing and finishing touch session.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Q3. Do we need to choose our own image?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. Please send us the image you want to tuft through our email or
            instagram. We will advise you whether the images are suitable for
            you depends on you experience level.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Q4. What happens if we are not able to finish on the day?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can either book another session to come back or request us to
            finish it. For additional session, you only required to pay $30 per
            rug.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Q5. Can two people work on one piece?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. You are welcomed to work on one piece with your friend. You
            will be charged as one attendee. However, only one tufting gun will
            be provided.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Q6. How do I change my appointment?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You are required to give us notice 48 hours in advance to change you
            booking time or get the deposits refunded. If are only allowed to
            change booking time once.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Q7. Do you accept booking for private event?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are happy to have you here for special occasions like birthday
            party. Maximum capacity at the venue is 10 people. Please contact us
            for more information.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
