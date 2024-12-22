interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  const mailtoLink = `mailto:your@email.com?subject=Portfolio Contact from ${data.name}&body=${encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
  )}`;
  
  window.location.href = mailtoLink;
}