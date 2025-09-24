export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="flex flex-col min-h-[80vh]">
      <h1>ID: {id}</h1>
    </main>
  )
}