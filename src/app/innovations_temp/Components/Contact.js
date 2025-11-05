import Link from "next/link";
import SlideUpSection from "./Slideup";

export default function ContactCTA() {
  return (
    <SlideUpSection>
    <div className="mt-12 w-full max-w-4xl md:max-w-6xl mx-auto px-4">
  <div className="bg-[#0b6a6b] text-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Text */}
    <div className="text-center md:text-left max-w-2xl">
      <h2 className="text-2xl font-semibold mb-2">Have a project in mind?</h2>
      <p className="text-md md:text-justify">
       Let’s talk about how Enid Innovations can help you grow. From strategy to execution, we’re
        here to turn your ideas into impact.
      </p>
    </div>

    {/* Button */}
    <div>
      <Link href="/innovations/contactform">
        <button className="bg-white hover:bg-[#bf202f] text-[#0b6a6b] hover:text-white cursor-pointer font-medium px-6 py-3 rounded-lg shadow-md transition-all">
          Get a Quote
        </button>
      </Link>
    </div>
  </div>
</div>
</SlideUpSection>
  );
}
