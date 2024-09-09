import React from 'react';

const InvoiceSignature = ({ sellerName, signatureImage }) => {
    return (
        <div className="flex flex-col items-end mt-8">
            <div className="mb-2">
                {signatureImage ? (
                    <img src={signatureImage} alt={`${sellerName} Signature`} className="h-16" />
                ) : (
                    <div className="text-gray-500 italic">No Signature Available</div>
                )}
            </div>
            <div className="text-center">
                <p className="font-semibold">{sellerName}</p>
                <p className="italic">Authorised Signatory</p>
            </div>
        </div>
    );
};

export default InvoiceSignature;
