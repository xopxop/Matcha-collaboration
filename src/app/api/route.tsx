export async function GET() {
  return new Response(JSON.stringify({ test: "get" }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST() {
  return new Response(JSON.stringify({ test: "post" }), {
    headers: { 'Content-Type': 'application/json' },
  })
}