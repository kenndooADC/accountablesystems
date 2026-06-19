export async function GET() {

  return Response.json([

    { id: 1, title: "Test Bill 1", state: "NY", status: "open" },

    { id: 2, title: "Test Bill 2", state: "NJ", status: "paid" }

  ]);

}
