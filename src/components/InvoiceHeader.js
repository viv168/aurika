import React from 'react';

const InvoiceHeader = ({ 
    sellerDetails, 
    billingDetails, 
    shippingDetails, 
    placeOfSupply, 
    orderDetails, 
    invoiceDetails, 
    reverseCharge 
}) => {
    return (
        <div className="w-full text-sm text-gray-800">
            {/* Header - Amazon and Title */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-3xl font-semibold">amazon<span className="text-orange-600">.in</span></h1>
                </div>
                <div className="text-right">
                    <h2 className="text-lg font-bold">Tax Invoice/Bill of Supply/Cash Memo</h2>
                    <p className="text-sm">(Original for Recipient)</p>
                </div>
            </div>

            {/* Seller, Billing, and Shipping Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-b pb-4 mb-6">
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Sold By:</h3>
                    <p>Varasiddhi Silk Exports</p>
                    <p>No. 25, 3rd Main Road</p>
                    <p>Bangalore, Karnataka - 560001</p>
                    
                    {/* PAN and GST Details */}
                    <p className="mt-4">
                        <span className="font-bold text-gray-900">PAN No: </span>
                        AABCV1234D
                    </p>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">GST Registration No: </span>
                        29ABCDE1234F1Z5
                    </p>

                    {/* Added dummy descriptive content */}
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">MSME/Udyam Registration No: </span>
                        UDYAM-KR-12-3456789
                    </p>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Customer Care Address: </span>
                        5th Floor, Silk Tower, MG Road, Bangalore
                    </p>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Email: </span>
                        customercare@varasiddhi.com
                    </p>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Phone: </span>
                        +91 98765 43210
                    </p>
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Billing Address:</h3>
                        <p>{billingDetails.name}</p>
                        <p>{billingDetails.address}</p>
                        <p>{`${billingDetails.city}, ${billingDetails.state} - ${billingDetails.pincode}`}</p>
                        <p className="mt-2">
                            <span className="font-bold text-gray-900">State/UT Code: </span>
                            {billingDetails.stateCode}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Shipping Address:</h3>
                        <p>{shippingDetails.name}</p>
                        <p>{shippingDetails.address}</p>
                        <p>{`${shippingDetails.city}, ${shippingDetails.state} - ${shippingDetails.pincode}`}</p>
                        <p className="mt-2">
                            <span className="font-bold text-gray-900">State/UT Code: </span>
                            {shippingDetails.stateCode}
                        </p>
                    </div>
                </div>
            </div>

            {/* Order and Invoice Details */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Order Details:</h3>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Order Number: </span>
                        {orderDetails.orderNo}
                    </p>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Order Date: </span>
                        {orderDetails.orderDate}
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Invoice Details:</h3>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Invoice Number: </span>
                        {invoiceDetails.invoiceNo}
                    </p>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Invoice Date: </span>
                        {invoiceDetails.invoiceDate}
                    </p>
                    <p className="mt-2">
                        <span className="font-bold text-gray-900">Reverse Charge: </span>
                        {reverseCharge ? 'Yes' : 'No'}
                    </p>
                </div>
            </div>

            {/* Place of Supply and Delivery */}
            <div className="grid grid-cols-2 gap-6 border-b pb-4 mb-6">
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Place of Supply: </h3>
                    <p className="mt-2">{placeOfSupply}</p>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Place of Delivery: </h3>
                    <p className="mt-2">{placeOfSupply}</p> {/* Assuming placeOfSupply is the same */}
                </div>
            </div>

            {/* Footer Details */}
            <div className="text-right">
                <p className="font-bold text-gray-900">Whether tax is payable under reverse charge - {reverseCharge ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

export default InvoiceHeader;
