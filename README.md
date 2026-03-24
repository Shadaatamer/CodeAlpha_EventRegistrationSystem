# Event Registration System

## 🚀 Features

- Create and manage events
- View all events and event details
- Register users for events
- View all registrations
- Cancel registrations
- Link registrations to specific events

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📦 Installation

1. Clone the repository:
   git clone [https://github.com/your-username/CodeAlpha_EventRegistrationSystem.git](https://github.com/your-username/CodeAlpha_EventRegistrationSystem.git)

2. Install dependencies:
   npm install

3. Create a `config.env` file:
   DATABASE=your_mongodb_connection_string
   PORT=3000

4. Run the server:
   npm start

---

## 📌 API Endpoints

### Events

**Create Event**
POST /event
Body:
{
"title": "Tech Conference",
"description": "Backend workshop",
"date": "2026-04-01T10:00:00.000Z",
"location": "Alexandria",
"capacity": 100
}

**Get All Events**
GET /event

**Get Single Event**
GET /event/:id

---

### Registrations

**Register for Event**
POST /reg
Body:
{
"userName": "Shada",
"userEmail": "[shada@example.com](mailto:shada@example.com)",
"event": "event_id_here"
}

**Get All Registrations**
GET /reg

**Cancel Registration**
DELETE /reg/:id
