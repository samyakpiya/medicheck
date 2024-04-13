import Link from "next/link";

function AppFooter() {
  return (
    <footer className="mt-auto border-t border-black/5 py-5">
      <small className="opacity-50">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.linkedin.com/in/samyakpiya"
          className="hover:underline underline-offset-1"
        >
          MediCheck
        </Link>
        . All rights reserved.
      </small>
    </footer>
  );
}

export default AppFooter;
