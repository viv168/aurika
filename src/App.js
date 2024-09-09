import React from 'react';
import Invoice from './components/Invoice';  // Import the Invoice component

// Sample invoice data
const sampleInvoiceData = {
    sellerDetails: {
        name: "Seller Name",
        address: "123 Seller Street",
        city: "Seller City",
        state: "Seller State",
        pincode: "123456",
        panNo: "ABCDE1234F",
        gstNo: "1234567890",
        logoUrl: "path/to/logo.png"
    },
    placeOfSupply: "Seller City",
    billingDetails: {
        name: "Buyer Name",
        address: "456 Buyer Street",
        city: "Buyer City",
        state: "Buyer State",
        pincode: "654321",
        stateCode: "12"
    },
    shippingDetails: {
        name: "Shipping Name",
        address: "789 Shipping Street",
        city: "Shipping City",
        state: "Shipping State",
        pincode: "789012",
        stateCode: "34"
    },
    placeOfDelivery: "Shipping City",
    orderDetails: {
        orderNo: "ORD12345",
        orderDate: "2024-09-01"
    },
    invoiceDetails: {
        invoiceNo: "INV12345",
        invoiceDate: "2024-09-02",
        invoiceDetails: "Details of the Invoice"
    },
    reverseCharge: "No",
    items: [
        {
            description: "Item 1",
            unitPrice: 100,
            quantity: 2,
            discount: 10,
            taxRate: 0.18
        },
        {
            description: "Item 2",
            unitPrice: 200,
            quantity: 1,
            discount: 0,
            taxRate: 0.18
        }
    ],
    signatureImage: "path/to/signature.png"
};

function App() {
    return (
        <div className="App">
            <Invoice invoiceData={sampleInvoiceData} />
        </div>
    );
}

export default App;
