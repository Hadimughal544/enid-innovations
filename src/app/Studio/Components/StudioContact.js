import Link from "next/link";

export default function StudioContact() {
  return (
    <div className="mt-12 mb-20 w-full max-w-4xl md:max-w-7xl mx-auto px-4">
  <div className="bg-black text-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Text */}
    <div className="text-center md:text-left max-w-4xl">
      <h2 className="text-3xl font-bold mb-2">Bring Your Vision to Life</h2>
      <p className="text-md md:text-justify">
       Make your brand and product dreams a reality! With our professional setup and creative guidance,
        it’s easy to capture stunning visuals. You focus on your story we’ll handle the shoot. Today’s 
        the perfect day to get started.
      </p>
    </div>

    {/* Button */}
    <div>
      <Link href="/Studio/Contactform">
        <button className="bg-white hover:bg-[#bf202f] text-black hover:text-white cursor-pointer font-medium px-6 py-3 rounded-lg shadow-md transition-all">
          BOOKING NOW
        </button>
      </Link>
    </div>
  </div>
</div>
  );
}
