import React from 'react';
import PropTypes from 'prop-types';
import InvoiceHeader from './InvoiceHeader';
import InvoiceTable from './InvoiceTable';
import InvoiceFooter from './InvoiceFooter';
import InvoiceSignature from './InvoiceSignature';
import { invoiceItems } from '../common';


// Default values for props
const defaultSellerDetails = {
    name: 'Seller Name',
    address: 'Seller Address',
    city: 'City',
    state: 'State',
    pincode: 'Pincode',
    panNo: 'PAN No',
    gstNo: 'GST No',
};

const defaultBillingDetails = {
    name: 'Billing Name',
    address: 'Billing Address',
    city: 'City',
    state: 'State',
    pincode: 'Pincode',
    stateCode: 'State Code',
};

const defaultShippingDetails = {
    name: 'Shipping Name',
    address: 'Shipping Address',
    city: 'City',
    state: 'State',
    pincode: 'Pincode',
    stateCode: 'State Code',
};

const defaultOrderDetails = {
    orderNo: 'Order No',
    orderDate: 'Order Date',
};

const defaultInvoiceDetails = {
    invoiceNo: 'Invoice No',
    invoiceDate: 'Invoice Date',
};

const defaultSignatureImage = 'default-signature.png';

const Invoice = ({
    sellerDetails = defaultSellerDetails,
    billingDetails = defaultBillingDetails,
    shippingDetails = defaultShippingDetails,
    placeOfSupply = '',
    placeOfDelivery = '',
    orderDetails = defaultOrderDetails,
    invoiceDetails = defaultInvoiceDetails,
    reverseCharge = '',
    items = invoiceItems,
    signatureImage = defaultSignatureImage
}) => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
            {/* Logo and Header */}
            <div className="flex justify-between items-center mb-8">
                
                <InvoiceHeader 
                    sellerDetails={sellerDetails}
                    billingDetails={billingDetails}
                    shippingDetails={shippingDetails}
                    placeOfSupply={placeOfSupply}
                    orderDetails={orderDetails}
                    invoiceDetails={invoiceDetails}
                    reverseCharge={reverseCharge}
                />
            </div>

            {/* Items Table */}
            <InvoiceTable 
                items={items} 
                placeOfSupply={placeOfSupply} 
                placeOfDelivery={placeOfDelivery} 
            />

            {/* Footer */}
            <InvoiceFooter 
                items={items} 
                placeOfSupply={placeOfSupply} 
                placeOfDelivery={placeOfDelivery} 
            />

            {/* Signature */}
            <InvoiceSignature 
                sellerName={sellerDetails.name} 
                signatureImage={signatureImage} 
            />
        </div>
    );
};

Invoice.propTypes = {
    sellerDetails: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        pincode: PropTypes.string,
        panNo: PropTypes.string,
        gstNo: PropTypes.string,
    }),
    billingDetails: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        pincode: PropTypes.string,
        stateCode: PropTypes.string,
    }),
    shippingDetails: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        pincode: PropTypes.string,
        stateCode: PropTypes.string,
    }),
    placeOfSupply: PropTypes.string,
    placeOfDelivery: PropTypes.string,
    orderDetails: PropTypes.shape({
        orderNo: PropTypes.string,
        orderDate: PropTypes.string,
    }),
    invoiceDetails: PropTypes.shape({
        invoiceNo: PropTypes.string,
        invoiceDate: PropTypes.string,
    }),
    reverseCharge: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        unitPrice: PropTypes.number,
        quantity: PropTypes.number,
        discount: PropTypes.number,
        taxRate: PropTypes.number,
    })),
    signatureImage: PropTypes.string,
};

export default Invoice;
