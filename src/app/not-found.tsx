import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-center text-muted">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-primary-hover"
      >
        Back to Home
      </Link>
    </section>
  );
}
