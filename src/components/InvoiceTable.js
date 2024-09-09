import React from 'react';
import InvoiceRow from './InvoiceRow';

import { invoiceItems } from '../common';

const InvoiceTable = () => {
    // Calculate totals for each field
    const totalUnitPrice = invoiceItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const totalQuantity = invoiceItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalDiscount = invoiceItems.reduce((sum, item) => sum + item.discount, 0);
    const totalNetAmount = invoiceItems.reduce((sum, item) => sum + item.netAmount, 0);
    const totalCGST = invoiceItems.reduce((sum, item) => sum + item.tax.CGST, 0);
    const totalSGST = invoiceItems.reduce((sum, item) => sum + item.tax.SGST, 0);
    const totalIGST = invoiceItems.reduce((sum, item) => sum + item.tax.IGST, 0);
    const grandTotal = invoiceItems.reduce((sum, item) => sum + item.totalAmount, 0);

    return (
        <div className="w-full">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Description</th>
                        <th className="border px-4 py-2 text-right">Unit Price (₹)</th>
                        <th className="border px-4 py-2 text-right">Quantity</th>
                        <th className="border px-4 py-2 text-right">Discount (₹)</th>
                        <th className="border px-4 py-2 text-right">Net Amount (₹)</th>
                        <th className="border px-4 py-2 text-right">CGST (₹)</th>
                        <th className="border px-4 py-2 text-right">SGST (₹)</th>
                        <th className="border px-4 py-2 text-right">IGST (₹)</th>
                        <th className="border px-4 py-2 text-right">Total (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceItems.map((item, index) => (
                        <InvoiceRow key={index} {...item} />
                    ))}
                </tbody>
                <tfoot>
                    <tr className="bg-gray-200 font-bold">
                        <td className="border px-4 py-2 text-left">Total</td>
                        <td className="border px-4 py-2 text-right">{totalUnitPrice.toFixed(2)}</td>
                        <td className="border px-4 py-2 text-right">{totalQuantity}</td>
                        <td className="border px-4 py-2 text-right">{totalDiscount.toFixed(2)}</td>
                        <td className="border px-4 py-2 text-right">{totalNetAmount.toFixed(2)}</td>
                        <td className="border px-4 py-2 text-right">{totalCGST.toFixed(2)}</td>
                        <td className="border px-4 py-2 text-right">{totalSGST.toFixed(2)}</td>
                        <td className="border px-4 py-2 text-right">{totalIGST.toFixed(2)}</td>
                        <td className="border px-4 py-2 text-right">{grandTotal.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default InvoiceTable;
