import React from 'react';
import { convertAmountToWords } from '../utils/formatters';

const InvoiceFooter = ({ items, placeOfSupply, placeOfDelivery }) => {
    // Helper function to calculate totals
    const calculateTotals = () => {
        let totalNetAmount = 0;
        let totalCGST = 0;
        let totalSGST = 0;
        let totalIGST = 0;

        items.forEach(item => {
            const netAmount = item.unitPrice * item.quantity - (item.discount || 0);
            const taxRate = 0.18;
            let tax = {};

            if (placeOfSupply === placeOfDelivery) {
                tax = {
                    CGST: netAmount * (taxRate / 2),
                    SGST: netAmount * (taxRate / 2),
                    IGST: 0
                };
            } else {
                tax = {
                    CGST: 0,
                    SGST: 0,
                    IGST: netAmount * taxRate
                };
            }

            totalNetAmount += netAmount;
            totalCGST += tax.CGST;
            totalSGST += tax.SGST;
            totalIGST += tax.IGST;
        });

        const totalTax = totalCGST + totalSGST + totalIGST;
        const totalAmount = totalNetAmount + totalTax;

        return {
            totalAmount,
        };
    };

    const totals = calculateTotals();
    const amountInWords = convertAmountToWords(totals.totalAmount);

    return (
        <div className="mt-8">
            <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">TOTAL:</span>
                    <span className="text-lg font-semibold">₹{totals.totalAmount.toFixed(2)}</span>
                </div>
                <div className="mt-2">
                    <span className="text-sm font-medium text-gray-600">Amount in Words:</span>
                    <p className="text-md font-semibold">{amountInWords}</p>
                </div>
            </div>

            {/* Additional information */}
            <div className="mt-4 border-t border-gray-300 pt-4">
                <p className="text-sm font-medium text-gray-600">
                    Whether tax is payable under reverse charge: <strong>No</strong>
                </p>
            </div>

            {/* Signature and Company Info */}
            <div className="mt-8 flex justify-between">
                <div className="text-sm font-medium text-gray-600">
                    <p>For Varasiddhi Silk Exports</p>
                    <p className="mt-8">Authorized Signatory</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500">
                        * This is a system-generated invoice and does not require a signature.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceFooter;
