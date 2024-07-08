import CategoryComponent from '@/components/HomepageComponents/CategoryComponent';
import HeroSectionComponent from '@/components/HomepageComponents/HeroSectionComponent';
import JobsComponent from '@/components/HomepageComponents/JobsComponent';

export default function Home() {
  return (
    <main className="dark:bg-[#000611]">
      <HeroSectionComponent />
      <CategoryComponent />
      <JobsComponent />
    </main>
  );
}
