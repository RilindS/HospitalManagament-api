// import { Button, Input, Select } from 'antd';
// import { Field, Form, Formik } from 'formik';
// import React, { useEffect, useState } from 'react';
// import * as Yup from 'yup';
// import { registerUser } from '../../../services/requests/auth/auth';
// import { fetchAllCities } from '../../../services/requests/city';
// import { fetchAllRooms } from '../../../services/requests/rooms';
// import './create.scss';

// const { Option } = Select;

// const CreatePatientPage = ({ onCreateComplete, initialData }) => {
//   const [cities, setCities] = useState([]);
//   const [rooms, setRooms] = useState([]);

//   // Load Cities and Rooms on Component Mount
//   useEffect(() => {
//     const loadCities = async () => {
//       try {
//         const response = await fetchAllCities();
//         setCities(response?.data || []);
//       } catch (error) {
//         console.error('Error fetching cities:', error);
//       }
//     };

//     const loadRooms = async () => {
//       try {
//         const response = await fetchAllRooms();
//         setRooms(response?.data || []);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     loadCities();
//     loadRooms();
//   }, []);

//   const initialValues = {
//     firstName: initialData?.firstName || '',
//     lastName: initialData?.lastName || '',
//     password: '',
//     age: '',
//     phoneNumber: initialData?.phoneNumber || '',
//     email: initialData?.email || '',
//     roomId: '',
//     cityId: '',
//   };

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('First name is required'),
//     lastName: Yup.string().required('Last name is required'),
//     password: Yup.string().required('Password is required'),
//     age: Yup.number().required('Age is required').integer().positive(),
//     phoneNumber: Yup.string().required('Phone number is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     roomId: Yup.string().required('Room is required'),
//     cityId: Yup.string().required('City is required'),
//   });

//   return (
//     <div className="create-patient-page">
//       <h1 className="page-title">Create Patient</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={async (values, { setSubmitting, resetForm }) => {
//           try {
//             const payload = { ...values, role: 'PATIENT' };
//             await registerUser(payload);
//             resetForm();
//             if (onCreateComplete) onCreateComplete();
//           } catch (error) {
//             console.error('Error creating patient:', error);
//           } finally {
//             setSubmitting(false);
//           }
//         }}
//       >
//         {({ isSubmitting, setFieldValue }) => (
//           <Form className="create-user-form">
//             <Field name="firstName">
//               {({ field }) => <Input {...field} placeholder="First Name" />}
//             </Field>
//             <Field name="lastName">
//               {({ field }) => <Input {...field} placeholder="Last Name" />}
//             </Field>
//             <Field name="email">
//               {({ field }) => <Input {...field} placeholder="Email" type="email" />}
//             </Field>
//             <Field name="password">
//               {({ field }) => <Input.Password {...field} placeholder="Password" />}
//             </Field>
//             <Field name="age">
//               {({ field }) => <Input {...field} placeholder="Age" type="number" />}
//             </Field>
//             <Field name="phoneNumber">
//               {({ field }) => <Input {...field} placeholder="Phone Number" />}
//             </Field>
//             <Field name="roomId">
//               {() => (
//                 <Select
//                   placeholder="Select Room"
//                   onChange={(value) => setFieldValue('roomId', value)}
//                 >
//                   {rooms?.map((room) => (
//                     <Option key={room.id} value={room.id}>
//                       {room.roomName}
//                     </Option>
//                   ))}
//                 </Select>
//               )}
//             </Field>
//             <Field name="cityId">
//               {() => (
//                 <Select
//                   placeholder="Select City"
//                   onChange={(value) => setFieldValue('cityId', value)}
//                 >
//                   {cities?.map((city) => (
//                     <Option key={city.id} value={city.id}>
//                       {city.name}
//                     </Option>
//                   ))}
//                 </Select>
//               )}
//             </Field>
//             <Button type="primary" htmlType="submit" loading={isSubmitting}>
//               Save Patient
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default CreatePatientPage;
