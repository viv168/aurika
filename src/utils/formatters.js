// // Converts a number into words
// export const convertAmountToWords = (amount) => {
//     console.log("amount::" + amount)
//     const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//     const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     const thousands = ["", "Thousand", "Million", "Billion"];

//     if (amount === 0) return "Zero";

//     let words = "";
//     let numStr = amount.toString();

//     if (numStr.length > 9) return "Overflow";

//     const numArray = ("000000000" + numStr).substr(-9).match(/.{1,3}/g);

//     for (let i = 0; i < 3; i++) {
//         let num = parseInt(numArray[i]);
//         if (num) {
//             let unitIndex = thousands[3 - i];
//             words +=
//                 (num > 99
//                     ? units[Math.floor(num / 100)] + " Hundred "
//                     : "") +
//                 (num % 100 > 10 && num % 100 < 20
//                     ? teens[num % 100 - 10] + " "
//                     : tens[Math.floor((num % 100) / 10)] + " " + units[num % 10]) +
//                 " " +
//                 unitIndex +
//                 " ";
//         }
//     }

//     return words.trim() + " Only";
// };

const { ToWords } = require('to-words');

export const convertAmountToWords = (amount) => new ToWords().convert(amount);

// Calculate taxes based on the place of supply and place of delivery
export const calculateTax = (netAmount, taxRate, placeOfSupply, placeOfDelivery) => {
    let tax = {
        CGST: 0,
        SGST: 0,
        IGST: 0,
    };

    if (placeOfSupply === placeOfDelivery) {
        tax.CGST = (netAmount * taxRate) / 2;
        tax.SGST = (netAmount * taxRate) / 2;
    } else {
        tax.IGST = netAmount * taxRate;
    }

    return tax;
};

// Validate input parameters
export const validateInvoiceInputs = (invoiceData) => {
    const requiredFields = ["sellerDetails", "placeOfSupply", "billingDetails", "shippingDetails", "orderDetails", "invoiceDetails", "items"];

    for (const field of requiredFields) {
        if (!invoiceData[field]) {
            throw new Error(`Missing required field: ${field}`);
        }
    }

    // Additional validations can be added here

    return true;
};
