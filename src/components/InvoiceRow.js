import React from 'react';

const InvoiceRow = ({ 
    description, 
    unitPrice, 
    quantity, 
    discount, 
    netAmount, 
    tax, 
    totalAmount 
}) => {
    return (
        <tr>
            <td className="border px-4 py-2">{description}</td>
            <td className="border px-4 py-2 text-right">{unitPrice.toFixed(2)}</td>
            <td className="border px-4 py-2 text-right">{quantity}</td>
            <td className="border px-4 py-2 text-right">{discount ? discount.toFixed(2) : '-'}</td>
            <td className="border px-4 py-2 text-right">{netAmount.toFixed(2)}</td>
            <td className="border px-4 py-2 text-right">{tax.CGST ? tax.CGST.toFixed(2) : '-'}</td>
            <td className="border px-4 py-2 text-right">{tax.SGST ? tax.SGST.toFixed(2) : '-'}</td>
            <td className="border px-4 py-2 text-right">{tax.IGST ? tax.IGST.toFixed(2) : '-'}</td>
            <td className="border px-4 py-2 text-right">{totalAmount.toFixed(2)}</td>
        </tr>
    );
};

export default InvoiceRow;
