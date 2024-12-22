import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { sendEmail } from '../../utils/email';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        required
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        required
      />
      <TextArea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        required
        rows={5}
      />
      <div className="flex items-center gap-4">
        <Button 
          type="submit" 
          disabled={status === 'sending'}
          className="w-full sm:w-auto"
        >
          <Send className="w-4 h-4 mr-2" />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>
        {status === 'success' && (
          <span className="text-green-500">Message sent successfully!</span>
        )}
        {status === 'error' && (
          <span className="text-red-500">Failed to send message. Please try again.</span>
        )}
      </div>
    </form>
  );
}