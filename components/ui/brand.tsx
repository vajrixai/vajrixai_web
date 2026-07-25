import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className = "w-9", priority = false }: BrandMarkProps) {
  return (
    <span className={`relative block aspect-[145/114] shrink-0 overflow-hidden ${className}`}>
      <Image
        src="/vajrix-mark.webp"
        alt=""
        fill
        priority={priority}
        sizes="96px"
        className="object-cover mix-blend-screen"
      />
    </span>
  );
}

type BrandLockupProps = {
  compact?: boolean;
  priority?: boolean;
};

export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-wordmark ${compact ? "text-[12px]" : "text-[14px]"}`}>
      Vajrix <span className="brand-gradient-text ml-[.16em]">AI</span>
    </span>
  );
}

export function BrandLockup({ compact = false, priority = false }: BrandLockupProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark className={compact ? "w-8" : "w-10"} priority={priority} />
      <BrandWordmark compact={compact} />
    </span>
  );
}
