

export async function sendEmail(formData: FormData): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el correo electrónico');
      }
  
      const result = await response.json();
  
      return {
        success: result.success,
        message: result.message || 'Correo enviado con éxito',
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Ocurrió un error desconocido',
      };
    }
  }
  