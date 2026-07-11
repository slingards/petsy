exports.handler = async (event) => {

    if(event.httpMethod !== "POST"){

        return {
            statusCode:405,
            body:JSON.stringify({
                success:false,
                error:"Method not allowed"
            })
        };

    }

    try{

        const data =
        JSON.parse(
            event.body || "{}"
        );

        const items =
        Array.isArray(data.items)
        ?
        data.items
        :
        [];

        const itemLines =
        items.length
        ?
        items.map((item,index)=>{

            const quantity =
            Number(item.quantity || 1);

            const unitPrice =
            Number(item.price || 0);

            const lineTotal =
            Number(
                item.line_total ||
                unitPrice * quantity
            );

            return `${index + 1}. ${quantity} × ${item.name || "Selected Profile"}
   Unit estimate: $${unitPrice.toLocaleString()}
   Line estimate: $${lineTotal.toLocaleString()}`;

        }).join("\n\n")
        :
        "No animal profiles were included.";

        const message = `
💳 NEW CompanionReviewHub PAYMENT PROOF

CUSTOMER
Name: ${data.customer_name || "Not provided"}
Country: ${data.customer_country || "Not provided"}
Contact method: ${data.contact_method || "Not provided"}
Contact: ${data.contact || "Not provided"}

SELECTED ANIMALS
Total animals: ${Number(data.total_quantity || 0)}

${itemLines}

PAYMENT
Method: ${data.payment_method || "Not provided"}
Category: ${data.payment_category || "Not provided"}
Grand request total: $${Number(data.grand_total || 0).toLocaleString()}
Amount submitted: $${Number(data.amount_paid || 0).toLocaleString()}
Proof uploaded to Netlify Form: ${data.proof_uploaded ? "Yes" : "No"}

${data.payment_category === "bank"
?
`BANK TRANSFER DETAILS
Sender name: ${data.bank_sender_name || "Not provided"}
Sender bank: ${data.bank_name || "Not provided"}
Transfer reference: ${data.bank_transfer_reference || "Not provided"}
Transfer date: ${data.bank_transfer_date || "Not provided"}`
:
`CRYPTO PAYMENT DETAILS
Transaction hash/reference: ${data.crypto_transaction_id || "Not provided"}
Proof type: Screenshot uploaded to Netlify Form` }

ELIGIBILITY
18 or older: ${data.eligibility?.age_confirmed ? "Confirmed" : "Not confirmed"}
Veterinary access: ${data.eligibility?.veterinary_access ? "Confirmed" : "Not confirmed"}
Responsible-care agreement: ${data.eligibility?.responsible_care ? "Confirmed" : "Not confirmed"}

NOTE
${data.payment_note || "No additional note"}

STATUS
${data.payment_status || "Waiting for manual verification"}
        `.trim();

        const response =
        await fetch(
            `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    chat_id:
                    process.env.CHAT_ID,

                    text:
                    message
                })
            }
        );

        const result =
        await response.json();

        if(!response.ok || !result.ok){

            throw new Error(
                result.description ||
                "Telegram payment notification failed"
            );

        }

        return {
            statusCode:200,
            body:JSON.stringify({
                success:true,
                telegram:result
            })
        };

    }

    catch(error){

        console.error(
            "send-payment error:",
            error
        );

        return {
            statusCode:500,
            body:JSON.stringify({
                success:false,
                error:error.message
            })
        };

    }

};
