import User from '@/models/User';
import nodemailer from 'nodemailer';
// import bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from "uuid";
export const sendEmail = async ({email, emailType, userId}) => {
    try {
        
        // const token = await bcryptjs.hash(userId.toString(), 10);

        const token = uuidv4();

        if (emailType == "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: token,
                verifyTokenExpiry: Date.now() + 3600000 // 1 hour
            });

        } else if (emailType == "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: token,
                forgotPasswordTokenExpiry: Date.now() + 3600000 // 1 hour
            });
        }


        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to :email,
            subject: emailType == "VERIFY"? 'Verify your email' : 'Reset your password',
            html: `<p>Click <a href="${process.env.BASE_URL}/auth/${emailType.toLowerCase()}/${token}">here</a> to ${emailType == "VERIFY"? 'verify your email' : 'reset your password'}
                or copy and paste the following link in your browser. 
                <br>
                ${process.env.BASE_URL}/auth/${emailType.toLowerCase()}/${token}
            </p>`
        };

        const resp = await transporter.sendMail(mailOptions);
        return resp;
    } catch (error) {
        console.error(error);

        throw new Error('Error sending email: ' + error.message);
    }
}