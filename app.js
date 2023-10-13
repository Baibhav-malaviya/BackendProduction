const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.get("/data", (req, res) => {
  const data = [
    {
      id: 1,
      name: "John",
      age: 16,
      email: "john@example.com",
      address: "123 Main Street, Mumbai, India",
    },
    {
      id: 2,
      name: "Alice",
      age: 18,
      email: "alice@example.com",
      address: "456 Elm Street, Delhi, India",
    },
    {
      id: 3,
      name: "Bob",
      age: 17,
      email: "bob@example.com",
      address: "789 Oak Street, Bangalore, India",
    },
    {
      id: 4,
      name: "Emma",
      age: 19,
      email: "emma@example.com",
      address: "101 Pine Street, Hyderabad, India",
    },
    {
      id: 5,
      name: "David",
      age: 20,
      email: "david@example.com",
      address: "222 Cedar Street, Kolkata, India",
    },
    {
      id: 6,
      name: "Sophia",
      age: 21,
      email: "sophia@example.com",
      address: "333 Rose Street, Chennai, India",
    },
    {
      id: 7,
      name: "James",
      age: 22,
      email: "james@example.com",
      address: "444 Lily Street, Pune, India",
    },
    {
      id: 8,
      name: "Olivia",
      age: 20,
      email: "olivia@example.com",
      address: "555 Sunflower Street, Jaipur, India",
    },
    {
      id: 9,
      name: "William",
      age: 21,
      email: "william@example.com",
      address: "666 Orchid Street, Ahmedabad, India",
    },
    {
      id: 10,
      name: "Ava",
      age: 19,
      email: "ava@example.com",
      address: "777 Tulip Street, Lucknow, India",
    },
    {
      id: 11,
      name: "Michael",
      age: 20,
      email: "michael@example.com",
      address: "888 Jasmine Street, Indore, India",
    },
    {
      id: 12,
      name: "Mia",
      age: 18,
      email: "mia@example.com",
      address: "999 Carnation Street, Chandigarh, India",
    },
    {
      id: 13,
      name: "Ethan",
      age: 22,
      email: "ethan@example.com",
      address: "111 Marigold Street, Gurgaon, India",
    },
    {
      id: 14,
      name: "Charlotte",
      age: 21,
      email: "charlotte@example.com",
      address: "222 Daisy Street, Noida, India",
    },
    {
      id: 15,
      name: "Alexander",
      age: 23,
      email: "alexander@example.com",
      address: "333 Poppy Street, Kanpur, India",
    },
  ];

  setTimeout(() => {
    res.send(data);
  }, 1500);
});

app.listen(port, () => {
  console.log(`Local server is running on port ${port}`);
});
