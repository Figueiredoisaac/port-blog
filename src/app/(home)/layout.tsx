import Footer from "@/components/Common/Footer";

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer className="mt-10" />
    </>
  );
}
