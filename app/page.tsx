async function getBills() {

  const res = await fetch(

    "https://accountablesystems.vercel.app/api/bills",

    { cache: "no-store" }

  );

  if (!res.ok) {

    return [];

  }

  return res.json();

}

export default async function Home() {

  const data = await getBills();

  return (

    <main style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>Accountable Systems</h1>

      <h2>Live Bills</h2>

      {!data?.length && <p>No bills found</p>}

      <ul>

        {data?.map((bill: any) => (

          <li key={bill.id} style={{ marginBottom: "10px" }}>

            <strong>{bill.Title}</strong> — {bill.State} ({bill.Status})

          </li>

        ))}

      </ul>

    </main>

  );

}
