import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/booking-notification", async (req, res) => {
    const { email, name, date, service } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Nodemailer setup (optional, for salon admin notification)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: '"Halima Salon" <noreply@halimabeautysalon.ng>',
      to: email,
      subject: "Your Booking Request - Halima Beauty Salon",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h1 style="color: #E88EA2;">Hello, ${name || "Client"}!</h1>
          <p style="font-size: 16px; color: #4b2e2a;">
            We've received your booking request for <strong>${service}</strong> on <strong>${date}</strong>.
          </p>
          <p style="font-size: 16px; color: #4b2e2a;">
            Our team will review the slot and confirm with you via WhatsApp or SMS shortly.
          </p>
          <hr style="margin: 40px 0; border: none; border-top: 1px solid #edf2f7;" />
          <p style="font-size: 12px; color: #a0aec0;">
            Halima Beauty Salon & Spa - No 15 Gonan Ganye, Zaria.
          </p>
        </div>
      `,
    };

    try {
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
      }
      res.json({ message: "Notification processed" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.json({ message: "Processed with warning" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
