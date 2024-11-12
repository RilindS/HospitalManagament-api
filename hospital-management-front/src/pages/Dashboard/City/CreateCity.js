import React from 'react';
import { Modal, Input, Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createCity } from '../../../services/requests/auth/city';

const CreateCityModal = ({ visible, onCancel, onCreateComplete }) => {
  const initialValues = {
    name: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('City name is required'),
  });

  return (
    <Modal
      title="Create City"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className='modal-title'
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await createCity(values);
            resetForm();
            onCreateComplete();
          } catch (error) {
            console.error('Error creating room:', error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="create-user-form" layout="vertical">
            <Field name="name">
              {({ field }) => (
                <div className="form-group">
                  <Input {...field} placeholder="City Name" />
                  {errors.name && touched.name && <div>{errors.name}</div>}
                </div>
              )}
            </Field>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save City'}
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateCityModal;
