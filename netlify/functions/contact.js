exports.handler = async (event) => {

    const data =
    JSON.parse(event.body);

    const message = `
📩 NEW CONTACT MESSAGE

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
`;

    const url =
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(
        url,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                chat_id:
                process.env.TELEGRAM_CHAT_ID,
                text:message
            })
        }
    );

    return {
        statusCode:200,
        body:"ok"
    };

};