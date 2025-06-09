import { cn } from "@/utils/classname";

import styles from "./main.module.css";

const Spinner = ({ className }: { className?: string }) => {
  return <div className={cn(styles.spinnerClassName, className)} />;
};

export default Spinner;
