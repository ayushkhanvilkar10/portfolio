import Link from "next/link";

export default function Sidebar() {
  const links = [
    { name: "Home", href: "#" },
    { name: "My Work", href: "#" },
    { name: "Storytelling", href: "#" },
  ];

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col bg-gray-50 border-r border-gray-200 p-6">
      <nav className="flex flex-col gap-4 mt-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
