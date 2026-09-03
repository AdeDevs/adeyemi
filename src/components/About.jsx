import AboutSection from "./AboutSection";

export default function AboutPage() {
  const isTheme = typeof window !== "undefined" && localStorage.getItem("lulu") 
    ? JSON.parse(localStorage.getItem("lulu")) 
    : false;

  return (
    <div className={`min-h-screen p-6 ${isTheme ? "bg-[#fafafa] text-neutral-900" : "bg-[#090b0e] text-neutral-100"}`}>
      <div className="max-w-7xl mx-auto">
        <AboutSection isTheme={isTheme} />
      </div>
    </div>
  );
}
