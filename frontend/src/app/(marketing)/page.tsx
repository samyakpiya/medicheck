import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen space-x-2">
      <Button asChild>
        <Link href="/app/new">Medicheck</Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href="/app/old">Old System</Link>
      </Button>
    </main>
  );
}
