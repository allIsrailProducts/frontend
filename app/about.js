// app/about.js
import Link from 'next/link';
import { useRouter } from 'next/router';

function AboutPage() {
  const router = useRouter();

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}

export default AboutPage;