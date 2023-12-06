import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Link from "next/link";
import { createUser } from "@/app/actions";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: "100%",
        },
      }}
    >
      <Paper elevation={3}>
        <form action={createUser}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              gap: "5px",
            }}
          >
            <h1>Create New User</h1>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
            />
            <TextField
              id="outlined-basic"
              label="Post"
              variant="outlined"
              name="firstpost"
            />
            <TextField
              id="outlined-basic"
              label="Bio"
              variant="outlined"
              name="firstbio"
            />
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "20px",
                justifyContent: "space-between",
              }}
            >
              <Link href={"/"}>
                <button>Back</button>
              </Link>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </Paper>
    </Box>
  );
}
