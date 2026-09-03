import { GitBranch, Globe, Send } from "lucide-react";

export default function SocialDock({ isTheme }) {
  const socials = [
    {
      label: "GitHub: @AdeDevs",
      href: "https://github.com/AdeDevs",
      icon: GitBranch,
    },
    {
      label: "LinkedIn: /in/adeyemiakinyemi",
      href: "https://www.linkedin.com/in/adeyemiakinyemi/",
      icon: Globe,
    },
    {
      label: "Twitter/X: @iamadedevs",
      href: "https://x.com/iamadedevs",
      icon: Send,
    },
  ];

  return (
    <aside
      aria-label="Social connections dock"
      className={`fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-1.5 p-1.5 border shadow-lg backdrop-blur-md transition-all ${
        isTheme
          ? "bg-white/90 border-neutral-300 text-neutral-800"
          : "bg-[#090b0e]/90 border-neutral-800 text-neutral-200"
      }`}
    >
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
            className="p-2 transition-colors hover:text-emerald-500"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </aside>
  );
}
