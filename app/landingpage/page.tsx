import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center  bg-subtle-pattern">
        <div className="text-center space-y-8 p-8 max-w-3xl animate-fade-in bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Simplify Your Academic Journey
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto">
            Calculate your CGPA effortlessly with BU Calc
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/mainpage">Calculate Your CGPA Now 🚀</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
