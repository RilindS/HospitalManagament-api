import { Button, Input, Modal, Select } from 'antd';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { createDoctor } from '../../../services/requests/doctor';
import { fetchAllDepartments } from '../../../services/requests/department';
import { fetchAllCities } from '../../../services/requests/city'; // New import for city API
import './create.scss';

const { Option } = Select;

const CreateDoctorModal = ({ visible, onCancel, onCreateComplete, initialData }) => {
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]); // State for cities

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const response = await fetchAllDepartments();
        if (response && Array.isArray(response.data)) {
          setDepartments(response.data); // Set the department list
        } else {
          console.error('Invalid response format for departments:', response);
          setDepartments([]);
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
        setDepartments([]);
      }
    };

    const loadCities = async () => {
      try {
        const response = await fetchAllCities(); // Fetch cities
        if (response && Array.isArray(response.data)) {
          setCities(response.data); // Set the city list
        } else {
          console.error('Invalid response format for cities:', response);
          setCities([]);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
        setCities([]);
      }
    };

    if (visible) {
      loadDepartments();
      loadCities();
    }
  }, [visible]);

  const initialValues = {
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    age: '',
    gender: 'male',
    phoneNumber: initialData?.phoneNumber || '',
    specialization: '',
    qualification: '',
    email: initialData?.email || '',
    departmentId: '',
    cityId: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    age: Yup.number().required('Age is required').typeError('Enter a valid age'),
    departmentId: Yup.string().required('Department is required'),
    cityId: Yup.string().required('City is required'),
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
        {({ isSubmitting, setFieldValue }) => (
          <Form className="create-user-form" layout="vertical">
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
            <Field name="email">
              {({ field }) => <Input {...field} placeholder="Email" type="email" />}
            </Field>
            <Field name="departmentId">
              {() => (
                <Select
                  placeholder="Select Department"
                  onChange={(value) => setFieldValue('departmentId', value)} // Save departmentId
                >
                  {Array.isArray(departments) &&
                    departments.map((dept) => (
                      <Option key={dept.id} value={dept.id}>
                        {dept.departamentName} {/* Display department name */}
                      </Option>
                    ))}
                </Select>
              )}
            </Field>
            <Field name="cityId">
              {() => (
                <Select
                  placeholder="Select City"
                  onChange={(value) => setFieldValue('cityId', value)} // Save cityId
                >
                  {Array.isArray(cities) &&
                    cities.map((city) => (
                      <Option key={city.id} value={city.id}>
                        {city.name} {/* Display city name */}
                      </Option>
                    ))}
                </Select>
              )}
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
