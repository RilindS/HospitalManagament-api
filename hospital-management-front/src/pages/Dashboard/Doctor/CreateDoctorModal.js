import React from 'react';
import { Modal, Input, Button, Select } from 'antd';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createDoctor } from '../../../services/requests/doctor';

const { Option } = Select;

const CreateDoctorModal = ({ visible, onCancel, onCreateComplete }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    phoneNumber: '',
    specialization: '',
    qualification: '',
    // isActive: true,
    departamentId: '',
    cityId: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    age: Yup.number().required('Age is required').typeError('Enter a valid age'),
  });

  return (
    <Modal title="Create Doctor" visible={visible} onCancel={onCancel} footer={null}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await createDoctor(values);
            resetForm();
            onCreateComplete();
          } catch (error) {
            console.error('Error creating doctor:', error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form layout="vertical">
            <Field name="firstName">
              {({ field }) => <Input {...field} placeholder="First Name" />}
            </Field>
            <Field name="lastName">
              {({ field }) => <Input {...field} placeholder="Last Name" />}
            </Field>
            <Field name="age">
              {({ field }) => <Input {...field} placeholder="Age" type="number" />}
            </Field>
            <Field name="gender">
              {({ field }) => (
                <Select {...field} placeholder="Gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              )}
            </Field>
            <Field name="phoneNumber">
              {({ field }) => <Input {...field} placeholder="Phone Number" />}
            </Field>
            <Field name="specialization">
              {({ field }) => <Input {...field} placeholder="Specialization" />}
            </Field>
            <Field name="qualification">
              {({ field }) => <Input {...field} placeholder="Qualification" />}
            </Field>
            {/* <Field name="isActive">
              {({ field }) => (
                <Select {...field} placeholder="Active Status">
                  <Option value={true}>Active</Option>
                  <Option value={false}>Inactive</Option>
                </Select>
              )}
            </Field> */}
            <Field name="departamentId">
              {({ field }) => <Input {...field} placeholder="Department ID" type="number" />}
            </Field>
            <Field name="cityId">
              {({ field }) => <Input {...field} placeholder="City ID" type="number" />}
            </Field>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Save Doctor
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateDoctorModal;
