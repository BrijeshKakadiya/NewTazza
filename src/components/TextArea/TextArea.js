import styles from "./TextArea.module.css";

const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className={`border-radius-0 ${styles["custom-control"]} form-control`}
    />
  );
};

export default TextArea;
