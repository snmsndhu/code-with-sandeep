import Link from "next/link";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/tutorial">Tutorials</Link>
        </li>
        <li>
          <Link href="/tutorial">Blogs</Link>
        </li>
        <li>
          <Link href="/tutorial">GitHub</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
