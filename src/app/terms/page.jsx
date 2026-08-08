export const metadata = {
  title: "RouteX | Terms of Service",
  description: "Read our terms of service for using RouteX study abroad and visa consulting services."
};

export default function TermsPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
        <h1 className="font-serif text-4xl text-[var(--text-primary)] lg:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-[var(--text-secondary)]">
          Last updated: January 2026
        </p>
        <div className="mt-8 prose max-w-none">
          <p className="text-[var(--text-secondary)]">
            By using our study abroad and visa consulting services, you agree to these terms of service. Please read them carefully.
          </p>
        </div>
      </div>
    </main>
  );
}
