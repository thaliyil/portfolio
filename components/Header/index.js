import style from "../Header/header.css";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://github.com/thaliyil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
