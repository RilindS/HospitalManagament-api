import { Button, Input, Select } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { createFeedBack } from "../../../services/requests/feedBack";
import { fetchAllNurses } from "../../../services/requests/nurse";
import { fetchAllDoctors } from "../../../services/requests/doctor"; // Add the fetch function for doctors

const CreateFeedBack = ({ onCreateComplete }) => {
  const [nurses, setNurses] = useState([]);
  const [doctors, setDoctors] = useState([]); // State to store doctors

  const initialValues = {
    comment: "",
    rating: "",
    doctorId: "",
    nurseId: "",
  };

  const validationSchema = Yup.object({
    comment: Yup.string().required("Your comment is required"),
    rating: Yup.number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating must be at most 5")
      .required("Rating is required"),
    doctorId: Yup.string().notRequired(),
    nurseId: Yup.string().notRequired(),
  });

  useEffect(() => {
    console.log("CreateFeedBack component mounted");

    const fetchNurses = async () => {
      try {
        const response = await fetchAllNurses();
        setNurses(response); // Assuming response is an array of nurses
      } catch (error) {
        console.error("Error fetching nurses:", error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await fetchAllDoctors();
        console.log("Doctors fetched:", response); // Log the response to see the structure
        if (Array.isArray(response)) {
          setDoctors(response); // Ensure response is an array before setting the state
        } else {
          console.error("Doctors response is not an array", response);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchNurses();
    fetchDoctors(); // Fetch doctors
  }, []);

  return (
    <div className="create-feedback-form">
      <h2>Create FeedBack</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await createFeedBack(values); // Send doctorId in the payload
            resetForm();
            onCreateComplete();
          } catch (error) {
            console.error("Error creating feedback:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <Form className="create-user-form" layout="vertical">
            <Field name="comment">
              {({ field }) => (
                <div>
                  <label>Comment</label>
                  <Input {...field} placeholder="Your comment" />
                  {errors.comment && touched.comment && (
                    <div className="error">{errors.comment}</div>
                  )}
                </div>
              )}
            </Field>

            <Field name="rating">
              {({ field }) => (
                <div>
                  <label>Rating</label>
                  <Input
                    {...field}
                    type="number"
                    placeholder="Rating (1-5)"
                    min={1}
                    max={5}
                  />
                  {errors.rating && touched.rating && (
                    <div className="error">{errors.rating}</div>
                  )}
                </div>
              )}
            </Field>

            <Field name="doctorId">
              {({ field }) => (
                <div>
                  <label>Doctor</label>
                  <Select
                    {...field}
                    placeholder="Select Doctor"
                    onChange={(value) => setFieldValue("doctorId", value)}
                  >
                    {doctors && doctors.length > 0 ? (
                      doctors.map((doctor) => (
                        <Select.Option key={doctor.id} value={doctor.id}>
                          {doctor.name} {/* Display doctor name */}
                        </Select.Option>
                      ))
                    ) : (
                      <Select.Option value={""}>No doctors available</Select.Option>
                    )}
                  </Select>
                  {errors.doctorId && touched.doctorId && (
                    <div className="error">{errors.doctorId}</div>
                  )}
                </div>
              )}
            </Field>

            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save FeedBack"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateFeedBack;
