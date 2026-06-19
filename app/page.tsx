async function getBills() {

  const res = await fetch("/api/bills", {

    cache: "no-store",

  });

  return res.json();

}

export default async function Home() {

  const { data } = await getBills();

  return (

    <main style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>AccountableSystems (ADC)</h1>

      <h2>Live Bills</h2>

      {!data?.length && <p>No bills found</p>}

      <ul>

        {data?.map((bill: any) => (

          <li key={bill.id}>

            <strong>{bill.title}</strong> — {bill.state} ({bill.status})

          </li>

        ))}

      </ul>

    </main>

  );

}
