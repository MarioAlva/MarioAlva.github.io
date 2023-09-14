import giesecke from "../img/giesecke.jpg";
import acceleralia from "../img/acceleralia.png";
import ikea from "../img/ikea.png";
import mcdonalds from "../img/mcdonalds.png";

const workExperience = [
    {
        title: "Software QA Tester Engineer",
        period: "2023 March - Present",
        description: "Responsible for test automation in the R&D team, covering integration tests using Java and frameworks like Cucumber.",
        skills: ["Java", "Cucumber", "SCRUM", "Spring Boot", "Jenkins", "Git"],
        logo: giesecke,
    },
	{
		title: "Full Stack Developer",
		period: "2022 - 2023",
		description: "I worked as a Full Stack Developer in the R&D team, developing new features for the company's products.",
		skills: ["VueJS", "PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "JQuery"],
		logo: acceleralia,
	},
	{
		title: "Logistics Assistant",
		period: "2021 June - 2021 September",
		description: "I worked as a Logistics Assistant in the IKEA store in L'Hospitalet Gran Via.",
		skills: ["Work in group", "Responsability", "Organization", "Teamwork", "Customer service"],
		logo: ikea,
	},
	{
		title: "Crew Member",
		period: "2019 - 2020",
		description: "I worked as a Crew Member in the McDonald's restaurant in L'Hospitalet Gran Via.",
		skills: ["Work in group", "Responsability", "Organization", "Teamwork", "Customer service"],
		logo: mcdonalds,
	}
];

export default workExperience;