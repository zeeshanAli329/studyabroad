export const metadata = {
  title: "RouteX | Universities",
  description: "Explore top universities around the world for your study abroad journey."
};

export default function UniversitiesPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
        <h1 className="font-serif text-4xl text-[var(--text-primary)] lg:text-5xl">
          Universities
        </h1>
        <p className="mt-4 text-lg text-[var(--text-secondary)]">
          Explore top universities around the world for your study abroad journey.
        </p>
      </div>
    </main>
  );
}
