import { Button, Input, Modal, Select } from 'antd';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { registerUser } from '../../../services/requests/auth/auth';
import { fetchAllCities } from '../../../services/requests/city';
import { fetchAllDepartments } from '../../../services/requests/department';
import { fetchAllRooms } from '../../../services/requests/rooms'; // Corrected import for rooms
import './create.scss';

const { Option } = Select;

const CreateNurseModal = ({ visible, onCancel, onCreateComplete, initialData }) => {
  const [departments, setDepartments] = useState([]);
  const [cities, setCities] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const response = await fetchAllDepartments();
        setDepartments(response?.data || []);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    const loadCities = async () => {
      try {
        const response = await fetchAllCities();
        setCities(response?.data || []);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    const loadRooms = async () => {
      try {
        const response = await fetchAllRooms();
        setRooms(response?.data || []);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    if (visible) {
      loadDepartments();
      loadCities();
      loadRooms();
    }
  }, [visible]);

  const initialValues = {
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    password:'',
    age: '',
    gender: 'male',
    phoneNumber: initialData?.phoneNumber || '',
    email: initialData?.email || '',
    departmentId: '',
    roomId: '',
    cityId: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    age: Yup.number().required('Age is required').typeError('Enter a valid age'),
    departmentId: Yup.string().required('Department is required'),
    roomId: Yup.string().required('Room is required'),
    cityId: Yup.string().required('City is required'),
  });

  return (
    <Modal
      title={<div className="custom-modal-title">Create Nurse</div>}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            // Add role field to the payload
            const payload = { ...values, role: 'NURSE' };
            await registerUser(payload); // Call users/create endpoint
            resetForm();
            onCreateComplete();
          } catch (error) {
            console.error('Error creating nurse:', error);
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
            <Field name="email">
              {({ field }) => <Input {...field} placeholder="Email" type="email" />}
            </Field>
            <Field name="password">
              {({ field }) => <Input.Password {...field} placeholder="Password" />}
            </Field>
            <Field name="age">
              {({ field }) => <Input {...field} placeholder="Age" type="number" />}
            </Field>
            <Field name="gender">
              {({ field }) => (
                <Select
                  placeholder="Gender"
                  onChange={(value) => setFieldValue('gender', value)}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              )}
            </Field>
            <Field name="phoneNumber">
              {({ field }) => <Input {...field} placeholder="Phone Number" />}
            </Field>
            <Field name="departmentId">
              {() => (
                <Select
                  placeholder="Select Department"
                  onChange={(value) => setFieldValue('departmentId', value)}
                >
                  {departments.map((dept) => (
                    <Option key={dept.id} value={dept.id}>
                      {dept.departamentName}
                    </Option>
                  ))}
                </Select>
              )}
            </Field>
            <Field name="roomId">
              {() => (
                <Select
                  placeholder="Select Room"
                  onChange={(value) => setFieldValue('roomId', value)} // Set roomId as the selected value
                >
                  {rooms.map((room) => (
                    <Option key={room.id} value={room.id}>
                      {room.roomName} {/* Display roomName */}
                    </Option>
                  ))}
                </Select>
              )}
            </Field>

            <Field name="cityId">
              {() => (
                <Select
                  placeholder="Select City"
                  onChange={(value) => setFieldValue('cityId', value)}
                >
                  {cities.map((city) => (
                    <Option key={city.id} value={city.id}>
                      {city.name}
                    </Option>
                  ))}
                </Select>
              )}
            </Field>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Save Nurse
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateNurseModal;
