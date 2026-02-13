export type WorkExperienceEntryType = {
	companyName: string;
	dateStart: string;
	isCurrent: boolean;
	wasInternship: boolean;
	dateEnd: string;
	specialization: string;
	translations: {
		[key: string]: {
			description: string;
			responsibilites: string[];
		};
	};
};
