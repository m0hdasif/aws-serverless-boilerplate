import AWS from 'aws-sdk';
import nodemailer from 'nodemailer';
import templates from '~src/config/ses/templates';
import { MSG } from '~src/config/constants/index';
import { EMailOptions } from "./index.interface";

// create Nodemailer SES transporter
const transporter = nodemailer.createTransport({
    SES: new AWS.SES({
        apiVersion: '2010-12-01'
    })
});


export const sendMail = async (params: EMailOptions) => {

    if (typeof params.html !== 'string' && typeof params.text !== 'string') {
        await updateOptionsForTemplate(params);
    }
    // Set default address for sender email address
    params.from = params.from || process.env.SENDER_EMAIL_ADDRESS;
    
    const emailResponse            = await transporter.sendMail(params);    
          emailResponse.rawContent = Buffer.from(emailResponse.raw).toString('utf-8');
    return emailResponse;
}


async function updateOptionsForTemplate(options: EMailOptions) {
    const template        = await getTemplateDefn(options.template);
    const isTemplateValid = isTemplateDataValid(template, options.templateData);
    if (isTemplateValid === true) {
        ['html', 'text', 'subject'].forEach((templateProp: string) => {
            options[templateProp] = replaceTemplateProps(template[templateProp], options.templateData);
        });

        options.from = options.from || template?.from;
    }
}

function isTemplateDataValid(template: any, templateData: any) {
    if (!(template && template.name)) {
        throw new Error(MSG.TEMPLATE_NOT_FOUND);
    } else if (typeof template.html !== 'string' || typeof template.text !== 'string') {
        throw new Error(MSG.TEMPLATE_INVALID);
    } else {
        const isPropsValid = isAllRequiredPropsAvailable(template.mandatoryProps, templateData);
        if (isPropsValid === false) {
            throw new Error(MSG.TEMPLATE_DATA_INVALID)
        }
        return true;
    }
}

function replaceTemplateProps(text: string, replacerObject: any = {}) {
    const replacerRegex = new RegExp(Object.keys(replacerObject).map(key => `{{${key}}}`).join("|"), "gi");
    return text.replace(replacerRegex, function (matched: string) {
        return replacerObject[matched.slice(2, -2)];
    });
}

async function getTemplateDefn(templateName: string) {
    const TEMPLATES_ARRAY = await templates();
    return TEMPLATES_ARRAY.find(template => template.name === templateName);
}

function isAllRequiredPropsAvailable(props: string[]=[], object: any = {}) {
    return props.every(prop => object.hasOwnProperty(prop) && object[prop] !== undefined);
}