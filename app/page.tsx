import CategoryComponent from "@/components/CategoryComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";

export default function Home() {
  return (
    <main className="dark:bg-[#000611]">
      <HeroSectionComponent />
      <CategoryComponent />
    </main>
  );
}
