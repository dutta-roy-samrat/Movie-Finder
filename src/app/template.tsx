import ScrollToTop from "@/components/ui/scroll-to-top";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

export default RootTemplate;
