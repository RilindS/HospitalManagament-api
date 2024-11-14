import { Button, Input, Modal, Select } from 'antd';
import { Field, Form, Formik } from 'formik';
import './create.scss';
import React from 'react';
import * as Yup from 'yup';
import { createDoctor } from '../../../services/requests/doctor';

const { Option } = Select;

const CreateDoctorModal = ({ visible, onCancel, onCreateComplete, initialData }) => {
  const initialValues = {
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    age: '',
    gender: 'male',
    phoneNumber: initialData?.phoneNumber || '',
    specialization: '',
    qualification: '',
    email: initialData?.email || '',
    departamentId: '',
    cityId: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    age: Yup.number().required('Age is required').typeError('Enter a valid age'),
  });

  return (
    <Modal
      title={<div className="custom-modal-title">Create Doctor</div>}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
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
          <Form className="create-user-form" layout="vertical">
            <Field name="firstName">
              {({ field }) => <Input {...field} placeholder={initialData?.firstName || "First Name"} />}
            </Field>
            <Field name="lastName">
              {({ field }) => <Input {...field} placeholder={initialData?.lastName || "Last Name"} />}
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
              {({ field }) => <Input {...field} placeholder={initialData?.lastName || "Phone Number"} />}
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
            <Field name="email">
              {({ field }) => <Input {...field} placeholder={initialData?.lastName || "email"} type="email" />}
            </Field>
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
