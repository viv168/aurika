// Calculate the net amount for an item
export const calculateNetAmount = (unitPrice, quantity, discount) => {
    if (unitPrice < 0 || quantity < 0) {
        throw new Error('Unit price and quantity must be non-negative.');
    }
    return (unitPrice * quantity) - (discount || 0);
};

// Calculate tax based on the place of supply and place of delivery
export const calculateTax = (netAmount, taxRate, placeOfSupply, placeOfDelivery) => {
    if (netAmount < 0) {
        throw new Error('Net amount must be non-negative.');
    }

    let tax = {
        CGST: 0,
        SGST: 0,
        IGST: 0,
    };

    if (placeOfSupply === placeOfDelivery) {
        // Split tax into CGST and SGST if the places match
        tax.CGST = (netAmount * taxRate) / 2;
        tax.SGST = (netAmount * taxRate) / 2;
    } else {
        // Apply IGST if the places are different
        tax.IGST = netAmount * taxRate;
    }

    return tax;
};

// Calculate the total for a list of items
export const calculateTotals = (items, placeOfSupply, placeOfDelivery) => {
    if (!Array.isArray(items)) {
        throw new Error('Items must be an array.');
    }

    let totalNetAmount = 0;
    let totalCGST = 0;
    let totalSGST = 0;
    let totalIGST = 0;

    items.forEach(item => {
        if (!item.unitPrice || !item.quantity) {
            throw new Error('Each item must have unitPrice and quantity.');
        }

        const netAmount = calculateNetAmount(item.unitPrice, item.quantity, item.discount);
        const taxRate = 0.18; // Example tax rate of 18%
        const tax = calculateTax(netAmount, taxRate, placeOfSupply, placeOfDelivery);

        totalNetAmount += netAmount;
        totalCGST += tax.CGST;
        totalSGST += tax.SGST;
        totalIGST += tax.IGST;
    });

    const totalTax = totalCGST + totalSGST + totalIGST;
    const totalAmount = totalNetAmount + totalTax;

    return {
        totalNetAmount,
        totalCGST,
        totalSGST,
        totalIGST,
        totalAmount
    };
};
