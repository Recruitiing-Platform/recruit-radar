import CategoryComponent from '@/components/HomepageComponents/CategoryComponent';
import ChooseComponent from '@/components/HomepageComponents/ChooseComponent';
import HeroSectionComponent from '@/components/HomepageComponents/HeroSectionComponent';
import HireComponent from '@/components/HomepageComponents/HireComponent';
import JobsComponent from '@/components/HomepageComponents/JobsComponent';

export default function Home() {
  return (
    <main className="dark:bg-[#000611]">
      <HeroSectionComponent />
      <CategoryComponent />
      <JobsComponent />
      <ChooseComponent />
      <HireComponent />
    </main>
  );
}
