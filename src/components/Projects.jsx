import ProjectsSection from "./ProjectsSection";

export default function ProjectsPage() {
  const isTheme = typeof window !== "undefined" && localStorage.getItem("lulu") 
    ? JSON.parse(localStorage.getItem("lulu")) 
    : false;

  return (
    <div className={`min-h-screen p-6 ${isTheme ? "bg-[#fafafa] text-neutral-900" : "bg-[#090b0e] text-neutral-100"}`}>
      <div className="max-w-7xl mx-auto">
        <ProjectsSection isTheme={isTheme} />
      </div>
    </div>
  );
}
