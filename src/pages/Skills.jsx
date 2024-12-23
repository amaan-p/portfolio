const Skills = () => {

const allskills=["React","Node.js","Javascript","Flutter","Python","Docker","Svelte","Java","Postgres","SQL","MongoDB","Figma","Wordpress"]
  return (
    <>
      <div className="flex flex-col items-center p-8 pt-0">
        <div className="max-w-2xl w-full">
        <div className="text-white font-medium text-lg">Skills</div>
        <div className="flex flex-wrap gap-3 pt-3">
            {allskills.map((skill, index) => (
              <div key={index} className="font-medium bg-white text-xs rounded-md pt-1 pb-1 pr-3 pl-3">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default Skills;
