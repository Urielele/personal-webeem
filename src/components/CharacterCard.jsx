export default function CharacterCard({ name, image, onClick }) {

  return (
    <div
      onClick={onClick}
      className="mx-2 relative w-36 border-2 border-[#5ecfa3] cursor-pointer select-none rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-110"
    >
      <div
        className="relative w-full overflow-hidden"
      >
  
          <img
            src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7csvPWMdfAHEAnhIRTdJKCK5SPK4cHfskow&s"} 
            alt={name}
            className="w-full h-full aspect-square object-cover object-top bg-[#e8f7f0]"
          />

      </div>

      <div className="p-2 flex items-center justify-center bg-">
        <p
        className="m-0 text-sm font-bold text-[#3a7d6e] font-serif"
        >
          {name || "Unknown"}
        </p>

      </div>
    </div>
  );
}