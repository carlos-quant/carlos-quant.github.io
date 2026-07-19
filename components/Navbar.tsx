export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 border-b">
      <a href="/" className="font-semibold">
        Carlos Vega
      </a>

      <div className="hidden md:flex gap-8">
        <a href="/research">Research</a>
        <a href="/articles">Articles</a>
        <a href="/projects">Projects</a>
        <a href="/notes">Notes</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
