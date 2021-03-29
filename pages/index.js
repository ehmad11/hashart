import Link from "next/link";

export default function Index() {
  return (
    <main>
      <h1>hashart</h1>
      <p>
        Art generated from{" "}
        <Link href="https://en.wikipedia.org/wiki/SHA-2">
          <a>SHA-256</a>
        </Link>{" "}
        hashes. by{" "}
        <Link href="https://jordanscales.com">
          <a>jdan</a>
        </Link>
        .
      </p>
      <p>Browse the collection:</p>
      <ul>
        <li>
          <Link href="/circles/Hello,%20World!">
            <a>Circles</a>
          </Link>
        </li>
      </ul>
    </main>
  );
}
