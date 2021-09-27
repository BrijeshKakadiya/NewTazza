import styles from "./Forminput.module.css";

const Forminput = (props) => {
  return (
    <input
      {...props}
      className={`border-radius-0 ${styles["custom-control"]} form-control`}
    />
  );
};

export default Forminput;
