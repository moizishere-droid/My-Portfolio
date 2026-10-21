export default function ProjectVisual({ project, compact = false }) {
  return (
    <figure className={`project-visual project-screenshot${compact ? ' compact' : ''}`}>
      <img
        src={`${import.meta.env.BASE_URL}${project.screenshot}`}
        alt={project.screenshotAlt}
        width="1280"
        height="720"
        loading="lazy"
        decoding="async"
      />
      <figcaption>Actual application · {project.title}</figcaption>
    </figure>
  );
}
