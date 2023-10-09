import { Course } from "@scripts/soc";
import CourseDisplay from "@components/CourseDisplay";

interface Props {
    courses: Course[];
}

export default function MultipleCourseDisplay(props: Props) {
    const courses = props.courses.map((course: Course) => (
        <CourseDisplay
            key={course.uid}
            course={course}
        />
    ));

    return <div className="my-1">{courses}</div>;
}
