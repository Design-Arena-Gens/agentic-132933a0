import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-3xl border border-ketch-deep/10 bg-white/90 p-8 shadow-subtle">
      <blockquote className="text-base leading-relaxed text-ketch-deep/80">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <Image
          src={image}
          alt={`${name} portrait`}
          width={64}
          height={64}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-ketch-deep">{name}</p>
          <p className="text-sm text-ketch-deep/60">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
