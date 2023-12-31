import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  const data = [
    {
      name: "Faruk",
      age: 23,
    },
    {
      name: "Raju",
      age: 26,
    },
    {
      name: "Rijon",
      age: 35,
    },
    {
      name: "Sami",
      age: 16,
    },
    {
      name: "Sajib",
      age: 20,
    },
    {
      name: "Imon",
      age: 28,
    },
    {
      name: "Sabbir",
      age: 19,
    },
    {
      name: "Sakib",
      age: 19,
    },
    {
      name: "Ahsan",
      age: 19,
    },
    {
      name: "Nadim",
      age: 19,
    },
    {
      name: "Shamsul",
      age: 19,
    },
    {
      name: "Ridoy",
      age: 19,
    },
    {
      name: "Ansar",
      age: 19,
    },
    {
      name: "Jadid",
      age: 19,
    },
    {
      name: "Nabin",
      age: 19,
    },
    {
      name: "Rafid",
      age: 19,
    },
  ];
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
