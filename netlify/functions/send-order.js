exports.handler = async (event) => {

    try{

        const data =
        JSON.parse(event.body);

        const contactLabel = {
            email: "Email",
            whatsapp: "WhatsApp",
            signal: "Signal"
        };

        const selectedContactLabel =
        contactLabel[data.contact_method] || "Contact";

        const message = `
    🐾 New CompanionReviewHub Order
        Name: ${data.name}
        Preferred Contact Method: ${selectedContactLabel}
        ${selectedContactLabel}: ${data.contact}
        Country: ${data.country}
        Payment: ${data.payment}
        `;

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

        return {

            statusCode:200,

            body:JSON.stringify({

                success:true,

                telegram:result

            })

        };

    }

    catch(error){

        return {

            statusCode:500,

            body:JSON.stringify({

                success:false,

                error:error.message

            })

        };

    }

};