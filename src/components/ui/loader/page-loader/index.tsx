import Spinner from "@/components/ui/loader/spinner";

import styles from "./main.module.css";

const PageLoader = () => {
  return (
    <div className={styles.pageContainer}>
      <Spinner className={styles.spinnerClassName} />
    </div>
  );
};

export default PageLoader;