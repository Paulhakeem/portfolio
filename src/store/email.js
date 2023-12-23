import { defineStore } from 'pinia'
import { Resend } from 'resend';

export const useEmailStore = defineStore('email', () => {
    const resend = new Resend(process.env.RESEND_API_KEY)
   
  const sendEmails = async () => {
    try {
        const data = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['delivered@resend.dev'],
          subject: 'Hello world',
          html: '<strong>It works!</strong>',
        });
    
        return data;
      } catch (error) {
        return { error };
      }
  }
    return {sendEmails }
  })