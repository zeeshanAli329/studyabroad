import next from "next";
import Reveal from "@/components/shared/Reveal";

export function MissionVision() {
  return (
    <section className="max-w-[1320px] mx-auto px-0 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <Reveal y={30}>
          <div className="bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] lg:rounded-2xl rounded-none h-40 p-8 text-white">
            <h3 className="font-serif text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              Make free and affordable quality education accessible to every eligible Pakistani student.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} y={30}>
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] lg:rounded-2xl rounded-none h-40 p-8 text-white">
            <h3 className="font-serif text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be Pakistan's most trusted study abroad and scholarship consultancy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
