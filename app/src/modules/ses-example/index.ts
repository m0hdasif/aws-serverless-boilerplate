import { sendMail } from '@utils/ses/index';

export const sesSendMail = async (event: any, context: any) => {
    
    const emailParams: any = {
        // from: Verified Email Address
        to: process.env.SECONDARY_EMAIL,
        // html:string
        // text:string
        subject: 'hello',
        template:'test_email_2',
        templateData:{
            name:'asif'
        },
        attachments: [], // array of attachment urls
        ses: { // optional extra arguments for SendRawEmail
            Tags: [{
                Name: 'stage',
                Value: 'dev'
            }]
        }
    }

    const emailResponse = await sendMail(emailParams);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            // / input: event,
            emailResponse:emailResponse
        }),
    };
};