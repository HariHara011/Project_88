import React from 'react';
import { ContactForm } from './ContactForm';
import { SectionTitle } from '../ui/SectionTitle';

export function ContactSection() {
  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a question or want to work together?"
        />
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}