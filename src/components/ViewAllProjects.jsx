import { Link } from "react-router-dom";

const ViewAllProjects = () => {
  return (
    <section className="flex justify-center py-16 px-6 bg-[var(--bg-alt)]">
      <Link
        to="/projects"
        className="font-semibold text-[var(--bg)] bg-[var(--accent)] py-3 px-8 rounded-md hover:bg-[var(--accent-dim)] transition-colors"
      >
        View All Projects
      </Link>
    </section>
  );
};
export default ViewAllProjects;
