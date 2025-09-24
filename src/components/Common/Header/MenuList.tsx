import MenuItem from "./MenuItem";

const links = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
];

export default function MenuList() {
  return (
    <nav className="flex items-center gap-6 font-title">
      {links.map((link) => (
        <MenuItem key={link.label} href={link.href}>
          {link.label}
        </MenuItem>
      ))}
    </nav>
  );
}

