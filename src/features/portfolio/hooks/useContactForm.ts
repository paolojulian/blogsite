import { useMutation } from "@tanstack/react-query";
import apiClient from "lib/axios";
import { IContactForm } from "../components/Forms/ContactForm";

const useContactForm = () => {
  const { mutateAsync: handleSubmit, isLoading } = useMutation({
    mutationFn: async (form: IContactForm) => {
      const response = await apiClient.post('/api/email/contact-me', form);
      if (!response.ok) {
        throw response;
      }
    }
  })

  return { handleSubmit, isLoading }
}

export default useContactForm;