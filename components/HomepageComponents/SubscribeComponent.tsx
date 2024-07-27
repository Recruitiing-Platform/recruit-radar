import { Button } from '../ui/button';
import { Send } from 'lucide-react';

const SubscribeComponent = () => {
  return (
    <div className="mx-5 sm:hidden md:flex text-center md:text-left md:mx-auto md:w-[90%] md:pb-20 lg:w-[80%] xl:w-[70%] p-5 lg:px-14  lg:pb-14 lg:pt-20 rounded-3xl bg-[#071E41] md:absolute md:-top-40 md:left-[5%] md:right-[5%] left-[15%] right-[15%] lg:left-[10%] lg:right-[10%] xl:left-[15%] xl:right-[15%] flex flex-col md:flex-row justify-between md:items-end gap-10 md:gap-0 lg:gap-5 mb-10 md:mb-0 text-recLight">
      <div>
        <h2 className="text-headerSix md:text-headerThree font-recSemiBold pb-3">
          Subscribe to our newletter
        </h2>
        <p className="text-sm md:text-[18px] font-recMedium">
          Get the latest career and job related updates right in your inbox!{' '}
        </p>
      </div>
      <Button className="flex gap-2 w-52">
        <h1 className="font-recSemiBold">Subscribe</h1>
        <Send />
      </Button>
    </div>
  );
};

export default SubscribeComponent;
