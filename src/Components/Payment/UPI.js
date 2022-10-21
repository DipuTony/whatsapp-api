import React from 'react'
import QRCode from 'react-qr-code';

function UPI() {

    const upiLink = () => {
        // upi://pay?pa=dsingh197@upi&am=201&pn=Dipu&cu=INR
    }

    return (
        <>
            <div>
                <p>=========== UPI Link For Mobile ============</p>
                <p className='underline text-blue-500'><a href="upi://pay?pa=dsingh197@upi&am=201&pn=Dipu&cu=INR"> payment link</a></p>
                <p><button className='border px-2 py-1'> Payment URL </button></p>
            </div>
            <div>
                <p>================== Dynamic UPI QR Code =============</p>
                <QRCode value="upi://pay?pa=dsingh197@upi&am=201&pn=Dipu&cu=INR" />
            </div>
        </>
    )
}

export default UPI



/*
https://www.npci.org.in/PDF/npci/upi/circular/2017/Circular18_BankCompliances_to_enbaleUPIMerchantecosystem_0.pdf


Fields	Description
pa	Payee address or business virtual payment address (VPA).
pn	Payee name or business name.
mc	Business retailer category code.
tr	Transaction reference ID. (Business specific ID. Must be unique for each request.)
url	Transaction reference URL.
am	Transaction amount. (Up to two decimal digits are allowed. This should be set in the details object instead of the supportedInstruments object.)
cu	Currency code. (This should be set in the details object instead of supportedInstruments object. Only the Indian rupee (INR) is currently supported.)
tid	Transaction ID generated by the payment service provider (PSP) of the business.
tn	Transaction note. It is the description appearing in the Google Pay payflow. (Maximum length is 80 characters)
gstBrkUp	Break-up of Goods and Services Tax. This should follow the format: `GST:amount
invoiceNo	Invoice Number. Identifier of a bill/invoice.
invoiceDate	The time of invoice in RFC 3339 format. Eg, 2017-02-15T16:20:30+05:30 for IST timezone).
gstIn	Business GSTIN. Goods and Services Tax Identification Number.

*/