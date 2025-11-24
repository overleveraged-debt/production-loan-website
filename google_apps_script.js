// This script is designed to be used as a web app with Google Apps Script.
// It receives data from a web form via a POST request, appends it to a Google Sheet,
// and sends an email notification.

// --- CONFIGURATION ---
const SHEET_ID = "1n1fLAqe9hDYy-6z1ael9NHFfLjaM-1FcRIpGEg0KeQE";
const SHEET_NAME = "Loan Applications";
const RECIPIENT_EMAIL = "ayushkpal7@gmail.com";

/**
 * This is the main function that handles the POST request from the web form.
 * @param {Object} e - The event parameter containing the request data.
 */
function doPost(e) {
  try {
    // Data is sent as a string in a FormData object, under the 'data' key.
    const data = JSON.parse(e.parameter.data);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    const columnOrder = [
      "name", "workProfile", "loanType", "phone", "loanAmount", 
      "monthlyIncome", "email", "dob", "company", "cibilScore", "salaryType"
    ];

    const newRow = columnOrder.map(colName => data[colName] || "");
    sheet.appendRow(newRow);

    const emailSubject = `New Loan Application Received from ${data.name}`;
    let emailBody = "A new loan application has been submitted.\n\n--- Applicant Details ---\n\n";
    columnOrder.forEach(key => {
        if (data[key]) {
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim();
            emailBody += `${formattedKey}: ${data[key]}\n`;
        }
    });
    emailBody += "\nThis data has also been added to the Google Sheet.";
    MailApp.sendEmail(RECIPIENT_EMAIL, emailSubject, emailBody);

    // --- Return a Success Response ---
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Data received and processed." }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // --- Error Handling ---
    console.error("Error in doPost:", error);
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}