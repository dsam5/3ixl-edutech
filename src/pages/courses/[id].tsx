import { useRouter } from 'next/router';
import { Container, Card, Button } from 'react-bootstrap';

// Dummy course details (will be fetched later)
const courseData: Record<string, { title: string; instructor: string; price: string; description: string }> = {
  "1": { title: "Full-Stack Web Development", instructor: "John Doe", price: "₵1500", description: "Learn React, Node.js, and databases in this full-stack bootcamp." },
  "2": { title: "Cybersecurity Bootcamp", instructor: "Jane Smith", price: "₵2000", description: "Become a cybersecurity expert with hands-on training in ethical hacking and network security." },
  "3": { title: "Data Science & AI", instructor: "David Kwesi Sam", price: "₵1800", description: "Master data science, Python, and AI applications in real-world projects." },
};

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is a valid string
  const courseId = typeof id === "string" ? id : undefined;

  if (!courseId || !(courseId in courseData)) {
    return <p>Course not found.</p>;
  }

  const course = courseData[courseId];

  return (
    <Container className="mt-5">
      <Card className="p-4">
        <h2>{course.title}</h2>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Price:</strong> {course.price}</p>
        <p>{course.description}</p>
        <Button variant="success">Pay Now</Button>
      </Card>
    </Container>
  );
}
