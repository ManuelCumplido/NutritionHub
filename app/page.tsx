import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl"> Hola Mundo</span>

      <Link href='/acerca-de'>Quienes somos?</Link>
    </div>
  );
}
