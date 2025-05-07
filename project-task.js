/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",//comma is missing.It is needed to separate another key-value pairs.
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",//name is enclosed with double quotes because it is a key value.
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,//instead of undefined it should be null or any numeric value
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]//Removed comma after "Parking". Trailing commas are not allowed after the last element in the array.
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I have used intellj editor to identify errors.
2️⃣ How did you confirm that your corrected JSON file was valid?
I have used code Beautify tool to validate the JSON file.
3️⃣ Which errors were the most difficult to spot? Why?
I can easily spot the errors using intellj and code beautify because the given json is simple.
4️⃣ What strategies can help you avoid these kinds of errors in the future?
   To avoid these kinds of Errors in the future,I can use code editors like intellj,vscode that detect errors in real-time with error highlighting.
   using online validator tools like jsonlint,code-beautify can help catch mistakes early.

   (e.g., syntax highlighting, linters, writing JSON by example)
*/
