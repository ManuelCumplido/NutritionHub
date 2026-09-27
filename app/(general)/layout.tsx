import { Navbar, Footer } from "@/components";

interface Props {
  children: React.ReactNode;
}

export default function GeneralLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}