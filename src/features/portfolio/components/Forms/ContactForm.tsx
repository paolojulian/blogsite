import AppButton from 'components/Buttons/AppButton';
import TextAreaInput from 'components/Forms/TextAreaInput';
import TextInput from 'components/Forms/TextInput';
import { Formik } from 'formik';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import * as Yup from 'yup';

export type ContactFormProps = {
  onSubmit: (form: IContactForm) => Promise<void>;
  isSubmitting?: boolean;
};

export const contactFormSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  email: Yup.string().email().required().max(320).label('Email'),
  message: Yup.string().required().max(5000).label('Message'),
});
export type IContactForm = Yup.InferType<typeof contactFormSchema>;
const initialValues: IContactForm = {
  name: '',
  email: '',
  message: '',
};

const ContactForm: FunctionComponent<ContactFormProps> = ({
  onSubmit,
  isSubmitting = false,
}) => {
  return (
    <Formik
      onSubmit={(form, actions) => {
        onSubmit(form).then(() => {
          actions.setSubmitting(false);
          actions.resetForm();
        });
      }}
      initialValues={initialValues}
      validationSchema={contactFormSchema}
    >
      {({ values, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} method='POST' noValidate>
          <Stack className='space-y-2 w-full max-w-md mx-auto px-8'>
            <TextInput
              label='Name'
              name='Name'
              value={values.name}
              onChange={(e) => setFieldValue('name', e.target.value)}
              theme='white'
              openOnDefault
            />
            <TextInput
              label='Email'
              name='Email'
              value={values.email}
              onChange={(e) => setFieldValue('email', e.target.value)}
              theme='white'
              openOnDefault
            />
            <TextAreaInput
              label='Message'
              name='Message'
              value={values.message}
              onChange={(e) => setFieldValue('message', e.target.value)}
              theme='white'
              rows={8}
            />
            <AppButton type='submit' isLoading={isSubmitting}>
              <span className='font-bold uppercase'>Submit</span>
            </AppButton>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
