module.exports = (url, subject, mode) => {

    let mainHeading = "";
    let info = "";
    let footer = "";

    if(mode === "VERIFY"){
        mainHeading = "Verify your email to sign up for ";
        info = "To complete the signup process";
        footer = "If you didn't attempt to sign up ";
    }

    if(mode === "RESET") {
        mainHeading = "Password reset request received on ";
        info = "To reset your account password";
        footer = "If you didn't initiated password reset ";
    }

    return (`<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>${subject}</title>
</head>

<body>

    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%!important">
        <tbody>
            <tr>
                <td align="center">
                    <table style="border:1px solid #eaeaea;border-radius:5px;margin:40px 0" width="600" border="0"
                        cellspacing="0" cellpadding="40">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <div
                                        style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;text-align:left;width:465px">

                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            style="width:100%!important">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <div><img
                                                                src="https://lh3.googleusercontent.com/a/AAcHTtfq65fiu7DgnyhczMzvFgaa1hvAoKF3vEvPuIyE=s96-c-rg-br100"
                                                                width="40" height="37" alt="Vercel" class="CToWUd"
                                                                data-bit="iit"></div>
                                                        <h1
                                                            style="color:#000;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:24px;font-weight:normal;margin:30px 0;padding:0">
                                                            ${mainHeading}<b><span style="color: #5766c7;">Braintube</span></b></h1>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <p
                                            style="color:#000;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:14px;line-height:24px">
                                            ${info}, please click on the button below.
                                            <br>
                                            This link will expire in 20 minutes.
                                        </p>
                                        <br>

                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            style="width:100%!important">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <div>

                                                            <a href="${url}"
                                                                style="background-color:#5766c7;border-radius:5px;color:#fff;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:14px;font-weight:500;line-height:50px;text-align:center;text-decoration:none;width:200px"
                                                                target="_blank">${mode}</a>

                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <br>
                                        <p
                                            style="color:#000;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:14px;line-height:24px">
                                            Or copy and paste this URL into a new tab of your browser:</p>
                                        <p
                                            style="color:#000;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:14px;line-height:24px">
                                            <a href="${url}"
                                                style="color:#067df7;text-decoration:none" target="_blank">${url}</a>
                                        </p>
                                        <br>
                                        <p>
                                            <b>
                                                - Braintube Team
                                            </b>
                                        </p>
                                        <hr style="border:none;border-top:1px solid #eaeaea;margin:26px 0;width:100%">
                                        <p
                                            style="color:#666666;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:12px;line-height:24px">
                                            ${footer}but received this email, please ignore this email. If you are concerned about your account's safety, please reply
                                            to this email to get in touch with us.</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>`);
}