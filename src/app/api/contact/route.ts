import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Visi lauki ir obligāti' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Nederīga e-pasta adrese' },
        { status: 400 }
      );
    }
    
    // Validate field lengths
    if (body.name.length < 2 || body.name.length > 100) {
      return NextResponse.json(
        { error: 'Vārds jābūt no 2 līdz 100 simboliem' },
        { status: 400 }
      );
    }
    
    if (body.message.length < 10 || body.message.length > 1000) {
      return NextResponse.json(
        { error: 'Ziņojums jābūt no 10 līdz 1000 simboliem' },
        { status: 400 }
      );
    }
    
    // If no API key is set, return success for development
    if (!process.env.RESEND_API_KEY || !resend) {
      console.warn('Development mode: Contact form submission received', {
        name: body.name,
        email: body.email,
        message: body.message.substring(0, 50) + '...'
      });
      
      return NextResponse.json({
        success: true,
        message: 'Ziņojums nosūtīts veiksmīgi (dev mode)'
      });
    }
    
    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: 'kontakti@lashbloomstudio.com',
      to: 'info@lashbloomstudio.com',
      subject: `Jauns kontakta ziņojums no ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C1A1A; font-size: 24px; margin-bottom: 20px;">
            Jauns kontakta ziņojums
          </h2>
          
          <div style="background: #FAF8F7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Vārds:</strong> ${body.name}</p>
            <p style="margin: 0 0 10px 0;"><strong>E-pasts:</strong> ${body.email}</p>
          </div>
          
          <div style="background: #EEDDE2; padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 10px 0;"><strong>Ziņojums:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${body.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #D9C2C8; color: #666; font-size: 14px;">
            <p>Šis ziņojums tika nosūtīts no Lash Bloom Studio kontaktu formas.</p>
          </div>
        </div>
      `,
      text: `
Jauns kontakta ziņojums

Vārds: ${body.name}
E-pasts: ${body.email}

Ziņojums:
${body.message}

---
Nosūtīts no Lash Bloom Studio kontaktu formas.
      `
    });
    
    if (emailResult.error) {
      console.error('Resend error:', emailResult.error);
      return NextResponse.json(
        { error: 'Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlāk.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Ziņojums nosūtīts veiksmīgi!'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Servera kļūda. Lūdzu, mēģiniet vēlāk.' },
      { status: 500 }
    );
  }
}
