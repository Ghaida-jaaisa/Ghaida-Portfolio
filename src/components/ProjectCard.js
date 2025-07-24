// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
import { Col } from "react-bootstrap";
import githubIcon from "../assets/img/github-brands.svg"; 
import liveIcon from "../assets/img/live-icon.png"; // Assuming you have a live demo icon

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl,}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ position: "relative" }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        {/* GitHub icon bottom right */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repo"
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              zIndex: 2,
              background: "#fff",
              borderRadius: "6px",
              padding: "2px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid #eee"
            }}
          >
            {/* <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg> */}
            <img src={githubIcon} alt="GitHub" style={{ width: "28px", height: "28px" }} />
          </a>
        )}



        {/* Live demo icon bottom left */}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "6px",
              padding: "2px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid #eee"
            }}
          >
            <img src={liveIcon} alt="Live Demo" style={{ width: "28px", height: "28px" }} />
          </a>
        )}
      </div>
    </Col>
  );
}
