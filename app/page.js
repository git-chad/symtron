import Link from "next/link"

export default function page() {
  return (
    <main className="text-[30rem] tracking-tighter">
      <h1 className="font-black">symtron</h1>
        <Link href="/home" className="hover:underline mt-[-300px] absolute">go to home</Link>
    </main>
  )
}
