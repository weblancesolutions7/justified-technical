import emailjs from "@emailjs/browser";
import companyData from "@/content/company.json";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  serviceLabel: string;
  details: string;
  kva?: string;
  sector?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMultiline(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function row(label: string, value: string): string {
  if (!value.trim()) return "";
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e8ecf1;color:#6b7280;font-size:13px;font-weight:700;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e8ecf1;color:#001C55;font-size:14px;vertical-align:top;">${value}</td>
    </tr>`;
}

/** HTML body for EmailJS template variable `message_html`. */
export function buildContactEmailHtml(payload: ContactFormPayload): string {
  const submittedAt = new Date().toLocaleString("en-AE", {
    timeZone: "Asia/Dubai",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const optionalRows = [
    row("Capacity (kVA)", payload.kva ? escapeHtml(payload.kva) : ""),
    row("Industry sector", payload.sector ? escapeHtml(payload.sector) : ""),
  ].join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#001C55;padding:20px 24px;">
              <p style="margin:0;color:#ffffff;font-size:18px;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;">
                ${escapeHtml(companyData.legalName.full)}
              </p>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">New website contact form submission</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 8px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${row("Name", escapeHtml(payload.name))}
                ${row("Email", `<a href="mailto:${escapeHtml(payload.email)}" style="color:#1a56db;text-decoration:none;">${escapeHtml(payload.email)}</a>`)}
                ${row("Phone", escapeHtml(payload.phone))}
                ${row("Service", escapeHtml(payload.serviceLabel))}
                ${optionalRows}
                ${row("Project details", formatMultiline(payload.details))}
                ${row("Submitted", escapeHtml(submittedAt))}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 24px 20px;background:#eef2f7;border-top:1px solid #e8ecf1;">
              <p style="margin:0;color:#6b7280;font-size:12px;line-height:1.5;">
                Reply directly to this message using the sender&apos;s email above.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

export function buildContactEmailSubject(payload: ContactFormPayload): string {
  const company = companyData.legalName.full;
  return `[${company}] Contact from ${payload.name}`;
}

function getEmailJsConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL;

  if (!serviceId || !templateId || !publicKey || !toEmail) {
    throw new Error(
      "Email is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, and NEXT_PUBLIC_CONTACT_TO_EMAIL."
    );
  }

  return { serviceId, templateId, publicKey, toEmail };
}

/** Sends contact form via EmailJS (matches "Contact Us" template variables). */
export async function sendContactEmail(payload: ContactFormPayload): Promise<void> {
  const { serviceId, templateId, publicKey, toEmail } = getEmailJsConfig();

  const templateParams = {
    subject: buildContactEmailSubject(payload),
    message_html: buildContactEmailHtml(payload),
    to_email: toEmail,
    from_name: payload.name,
    reply_to: payload.email,
  };

  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
