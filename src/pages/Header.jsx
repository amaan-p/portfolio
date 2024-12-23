const Header = () => {
  return (
    <div className=" flex flex-col items-center p-8 pb-2 ">
      <div className="max-w-2xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <div className="text-2xl font-bold text-white mb-[0.4rem] md:text-4xl tracking-tight mt-6">
              Hi, I{"'"}m Amaan 👋
            </div>
            <p className="text-md text-white md:text-md  tracking-tight leading-snug">
              Full-Stack Developer with 1 year of internship experience and a passion for creating diverse AI models.
            </p>
          </div>
          <div className="ml-8">
            <div className="w-24 h-24 rounded-full overflow-hidden ">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
