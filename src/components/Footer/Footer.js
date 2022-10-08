import s from '../Footer/Footer.module.css';
export const Footer = () => {
  return (
    <>
      <h3 className={s.createdBy}>
        Created by <span className="text-black">THE_SNEG</span>
      </h3>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/sasha-kravchuk/"
        className={s.linkedin}
      >
        LinkedIn
      </a>
    </>
  );
};
