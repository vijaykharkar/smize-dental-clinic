import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Smize Dental Atelier API", version="1.0.0")

# CORS — allow frontend origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:5174").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- ENV CONFIG ----------
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")          # sender gmail address
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")   # gmail app password
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL", "smizedentalcare@gmail.com")


# ---------- MODELS ----------
class AppointmentRequest(BaseModel):
    full_name: str
    phone: str
    email: EmailStr
    dob: str = ""
    preferred_date: str
    preferred_time: str
    service: str
    doctor: str = "No preference"
    notes: str = ""


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    reason: str = "General Inquiry"
    message: str


# ---------- EMAIL HELPERS ----------
def send_email(subject: str, html_body: str) -> None:
    """Send an HTML email to the clinic's configured receiver address."""
    if not SMTP_USER or not SMTP_PASSWORD:
        raise HTTPException(
            status_code=500,
            detail="Email server is not configured. Please set SMTP_USER and SMTP_PASSWORD.",
        )

    msg = MIMEMultipart("alternative")
    msg["From"] = SMTP_USER
    msg["To"] = RECEIVER_EMAIL
    msg["Subject"] = subject
    msg.attach(MIMEText(html_body, "html"))

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_USER, RECEIVER_EMAIL, msg.as_string())
    except smtplib.SMTPException as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")


def build_appointment_email(data: AppointmentRequest) -> str:
    return f"""
    <html>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; color: #111c2d;">
        <div style="background: linear-gradient(135deg, #005d90, #0077b6); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">🦷 New Appointment Request</h1>
            <p style="color: #7cf8dd; margin: 4px 0 0; font-size: 14px;">Smize Dental Atelier — Tathawade, Pune</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #e7eeff; border-top: none; border-radius: 0 0 12px 12px; padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr><td style="padding: 10px 0; color: #707881; width: 140px;">Patient Name</td><td style="padding: 10px 0; font-weight: 600;">{data.full_name}</td></tr>
                <tr><td style="padding: 10px 0; color: #707881;">Phone</td><td style="padding: 10px 0; font-weight: 600;">{data.phone}</td></tr>
                <tr><td style="padding: 10px 0; color: #707881;">Email</td><td style="padding: 10px 0; font-weight: 600;">{data.email}</td></tr>
                <tr><td style="padding: 10px 0; color: #707881;">Date of Birth</td><td style="padding: 10px 0; font-weight: 600;">{data.dob or 'Not provided'}</td></tr>
                <tr style="background: #f0f9ff;"><td style="padding: 10px; color: #707881;">Preferred Date</td><td style="padding: 10px; font-weight: 600; color: #005d90;">{data.preferred_date}</td></tr>
                <tr style="background: #f0f9ff;"><td style="padding: 10px; color: #707881;">Preferred Time</td><td style="padding: 10px; font-weight: 600; color: #005d90;">{data.preferred_time}</td></tr>
                <tr><td style="padding: 10px 0; color: #707881;">Service</td><td style="padding: 10px 0; font-weight: 600;">{data.service}</td></tr>
                <tr><td style="padding: 10px 0; color: #707881;">Doctor</td><td style="padding: 10px 0; font-weight: 600;">{data.doctor}</td></tr>
            </table>
            {"<div style='margin-top: 16px; padding: 14px; background: #f8fafc; border-radius: 8px; font-size: 14px;'><strong>Notes:</strong><br/>" + data.notes + "</div>" if data.notes else ""}
            <hr style="border: none; border-top: 1px solid #e7eeff; margin: 20px 0;" />
            <p style="font-size: 12px; color: #707881; margin: 0;">Received at {datetime.now().strftime("%B %d, %Y — %I:%M %p")}</p>
        </div>
    </body>
    </html>
    """


def build_contact_email(data: ContactRequest) -> str:
    return f"""
    <html>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; color: #111c2d;">
        <div style="background: linear-gradient(135deg, #006b5b, #00897b); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">📩 New Contact Message</h1>
            <p style="color: #7cf8dd; margin: 4px 0 0; font-size: 14px;">Smize Dental Atelier — Website Contact Form</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #e7eeff; border-top: none; border-radius: 0 0 12px 12px; padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr><td style="padding: 10px 0; color: #707881; width: 140px;">Name</td><td style="padding: 10px 0; font-weight: 600;">{data.name}</td></tr>
                <tr><td style="padding: 10px 0; color: #707881;">Email</td><td style="padding: 10px 0; font-weight: 600;">{data.email}</td></tr>
                <tr><td style="padding: 10px 0; color: #707881;">Reason</td><td style="padding: 10px 0; font-weight: 600;">{data.reason}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; font-size: 14px; line-height: 1.6;">
                <strong>Message:</strong><br/>{data.message}
            </div>
            <hr style="border: none; border-top: 1px solid #e7eeff; margin: 20px 0;" />
            <p style="font-size: 12px; color: #707881; margin: 0;">Received at {datetime.now().strftime("%B %d, %Y — %I:%M %p")}</p>
        </div>
    </body>
    </html>
    """


# ---------- ROUTES ----------
@app.get("/")
def root():
    return {"status": "ok", "service": "Smize Dental Atelier API"}


@app.post("/api/appointment")
def book_appointment(data: AppointmentRequest):
    subject = f"New Appointment — {data.full_name} | {data.service}"
    html = build_appointment_email(data)
    send_email(subject, html)
    return {"success": True, "message": "Appointment request sent successfully. We will confirm within 24 hours."}


@app.post("/api/contact")
def contact_message(data: ContactRequest):
    subject = f"Contact Form — {data.name} | {data.reason}"
    html = build_contact_email(data)
    send_email(subject, html)
    return {"success": True, "message": "Your message has been sent. We will get back to you shortly."}
