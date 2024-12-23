/* eslint-disable react/prop-types */

// react/prop-types
const CertItem = ({ school, degree, duration, logo }) => {
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
  
  const Certifications = () => {
    const Cert = [
      {
        school: "AWS Cloud Fundamentals",
        degree: "Amazon Web Services",
        duration: "October 2024",
        logo: "/aws.jpg",
      },
      {
        school: "Google Cloud Data Analytics",
        degree: "Google Cloud",
        duration: "May 2024",
        logo: "/gcloud.jpg",
      },
      {
        school: "OCI AI Foundations",
        degree: "Oracle",
        duration: "May 2024",
        logo: "/oracle.png",
      },

    ];
  
    return (
      <div className=" flex flex-col items-center p-8 pb-0">
        <div className="max-w-xl w-full">
          <h2 className="text-white font-medium text-lg mb-4">Certifications</h2>
          {Cert.map((exp, index) => (
            <CertItem key={index} {...exp} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Certifications;
  