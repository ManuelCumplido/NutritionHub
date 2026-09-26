import { Navbar } from "@/components";

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
    </>
  );
}