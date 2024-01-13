import courses from "../../data/courses";
import {Link, useLocation, useNavigate} from "react-router-dom";
import querystring from "query-string";
import {useEffect, useState} from "react";

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses (courses, key) {
    const sortedCourses = [...courses];
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses;
    }
    sortedCourses.sort((a, b) => a[key] - b[key]);
    return sortedCourses;
}
const Courses = () => {
    const location = useLocation();
    const query = querystring.parse(location.search);
    const navigate = useNavigate();
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey));

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigate('.');
            setSortKey(undefined);
            setSortedCourses([...courses]);
        }
    }, [sortKey, navigate]);

    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
            {sortedCourses.map((course) => (
                <div key={course.id}>
                    <Link className="courseLink" to={course.slug}>{course.title}</Link>
                </div>
            ))}
        </>
    );
};

export default Courses;