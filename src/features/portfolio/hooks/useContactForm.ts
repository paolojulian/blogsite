import apiClient from "lib/axios";
import { IContactForm } from "../components/Forms/ContactForm";

const useContactForm = () => {
  const handleSubmit = async (form: IContactForm) => {
    const response = await apiClient.post('/api/email/contact-me', form);
    if (!response.ok) {
      // TODO: Handle ror
      throw response;
    }
    console.log({ response });
  }

  return { handleSubmit }
}

export default useContactForm;