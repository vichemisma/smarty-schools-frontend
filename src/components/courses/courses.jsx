import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseCard from "./course-card";
import courses from "@/helpers/data/courses.json";

const Courses = ({ featured }) => {
	let arrCourses = courses;

	if (featured) {
		arrCourses = arrCourses.filter((item) => item.featured);
	}

	return (
		<Container>
			<Row xs={1} sm={2} md={3} lg={4} className="g-4" >
				{arrCourses.map((item) => (
					<Col key={item.id}>
						<CourseCard {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Courses;
