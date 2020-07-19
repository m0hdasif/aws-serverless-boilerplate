import { MailOptions } from "nodemailer/lib/ses-transport";

export interface EMailOptions extends MailOptions{
    /** Template name for which html, text and Subject already defined*/
    template?:string,
    /** Template data required to replace it in html and subject */
    templateData?:object,
    [index: string]: any
}