/* eslint-disable react/prop-types */

// react/prop-types
const EduExpItem = ({ school, degree, duration, logo }) => {
  return (
    <div className="mb-6">
      <div
          className="flex items-center justify-between cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="size-11 rounded-full overflow-hidden bg-white/10">
              <img
                src={logo}
                alt={school}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-white">{school}</h3>
                
              </div>
              <p className="text-gray-400 font-light text-sm">{degree}</p>
            </div>
          </div>
          <span className="text-gray-400 text-sm">{duration}</span>
        </div>
    </div>
  );
};

const EduExp = () => {
  const eduaction = [
    {
      school: "University of Mumbai",
      degree: "Bacholer's Degree in Computer Science",
      duration: "June 2021 - May 2024",
      logo: "/uni.jpg",
    },
  ];

  return (
    <div className=" flex flex-col items-center p-8 pb-0">
      <div className="max-w-xl w-full">
        <h2 className="text-white font-medium text-lg mb-4">Education</h2>
        {eduaction.map((exp, index) => (
          <EduExpItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default EduExp;
