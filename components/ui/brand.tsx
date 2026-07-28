import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({ className = "w-9", priority = false }: BrandMarkProps) {
  return (
    <span className={`relative block aspect-[841/718] shrink-0 ${className}`}>
      <Image
        src="/vajrix-mark.png"
        alt=""
        fill
        priority={priority}
        sizes="96px"
        className="object-contain drop-shadow-[0_0_8px_rgba(49,87,255,.34)]"
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
    <span className={`brand-wordmark ${compact ? "text-[12px]" : "text-[24px]"}`}>
      Vajrix <span className="brand-gradient-text ml-[.16em]">AI</span>
    </span>
  );
}

export function BrandLockup({ compact = false, priority = false }: BrandLockupProps) {
  return (
    <span className="inline-flex items-center gap-4">
      <BrandMark className={compact ? "w-8" : "w-16"} priority={priority} />
      <BrandWordmark compact={compact} />
    </span>
  );
}
