const templates = async (options?: any) => [{
    name          : 'test_email_1',
    subject       : 'Node mailer {{name}}',
    html          : '<h1>I hope this message gets sent by {{name}}!</h1>',
    text          : 'I hope this message gets sent! {{name}}',
    mandatoryProps: ['name'],
}, {
    name   : 'test_email_2',
    subject: 'Test email 2: {{name}}',
    html   : '<h1>I hope this message gets sent by {{name}}!</h1>',
    text   : 'I hope this message gets sent! {{name}}',
    from   : process.env.SECONDARY_EMAIL
}];

export = templates;