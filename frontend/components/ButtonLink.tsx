import Link from "next/link";

const styles = {
  primary: "bg-leaf text-canvas hover:bg-leaf-light",
  ghost: "border border-line text-ink hover:border-leaf",
};

export default function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-light " +
        styles[variant]
      }
    >
      {children}
    </Link>
  );
}