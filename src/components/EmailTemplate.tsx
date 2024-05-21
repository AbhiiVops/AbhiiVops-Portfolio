interface EmailTemplateProps {
    email: string;
    subject: string;
    message: string;
};

export const EmailTemplate = ({ email, subject, message }: EmailTemplateProps) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h2 style={{ color: '#0070f3', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>New Contact Form Submission</h2>
            <p><strong style={{ color: '#0070f3' }}>Email:</strong> {email}</p>
            <p><strong style={{ color: '#0070f3' }}>Subject:</strong> {subject}</p>
            <p><strong style={{ color: '#0070f3' }}>Message:</strong></p>
            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
                <p>{message.split('\n').map((line, index) => (<span key={index}>{line}<br /></span>))}</p>
            </div>
            <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#999' }}>This message was sent from your portfolio contact form.</p>
        </div>
    )
}