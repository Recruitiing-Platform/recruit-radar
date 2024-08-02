import FooterComponent from '@/components/FooterComponent';
import CategoryComponent from '@/components/HomepageComponents/CategoryComponent';
import ChooseComponent from '@/components/HomepageComponents/ChooseComponent';
import HeroSectionComponent from '@/components/HomepageComponents/HeroSectionComponent';
import HireComponent from '@/components/HomepageComponents/HireComponent';
import JobsComponent from '@/components/HomepageComponents/JobsComponent';
import MobileSubscribeComponent from '@/components/HomepageComponents/MobileSubscribeComponent';
import SubscribeComponent from '@/components/HomepageComponents/SubscribeComponent';
import TestimonialComponent from '@/components/HomepageComponents/TestimonialComponent';
import NavBarComponent from '@/components/NavBarComponent';
import ScrollButton from '@/components/ScrollButton';

export default function Home() {
  return (
    <main className="dark:bg-[#000611] relative">
      <NavBarComponent />
      <HeroSectionComponent />
      <CategoryComponent />
      <JobsComponent />
      <ChooseComponent />
      <HireComponent />
      <TestimonialComponent />
      <MobileSubscribeComponent />
      <div className="relative">
        <FooterComponent />
        <SubscribeComponent />
      </div>
      <ScrollButton sectionId="hero" />
    </main>
  );
}
