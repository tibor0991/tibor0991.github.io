export default function Section({ title, children }) {
  return (
  <section className="container m-2 p-4 prose max-w-none rounded-lg bg-white bg-opacity-70">
    {title? <SectionTitle>{title}</SectionTitle> : null}
    {children}
  </section>)
}

export function SectionTitle({children}){
  return (<h1 className="text-center">{children}</h1>)
}