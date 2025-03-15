import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Use environment variables for security
        pass: process.env.EMAIL_PASS,
    },
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    // Basic validation to prevent empty inputs
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    // Prevents basic XSS attempts
    const escapeHtml = (str) => {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    const sanitizedMessage = escapeHtml(message);

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER, // Always use your authenticated email
            to: "3ixledutech@gmail.com",
            replyTo: email, // Set user's email here so you can reply
            subject: `New Contact Message from ${name}`,
            text: sanitizedMessage,
        });
        

        return res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return res.status(500).json({ error: "Failed to send message." });
    }
}
