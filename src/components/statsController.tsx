import { SettingContainer } from "./settingContainer";

const StatsController = () => {
	return (
		<div className="flex flex-col gap-4 md:gap-5 justify-between xl:flex-row pb-4 px-4 md:px-8 lg:px-28 border-b border-b-neutral-700">
			<div className="flex items-center justify-between md:justify-start">
				<div className="flex flex-col items-center justify-center flex-1 md:flex-none md:flex-row md:gap-3 md:pe-4">
					<span className="text-neutral-400 text-16 leading-120 md:text-20">
						WPM:
					</span>
					<span className="text-24 font-bold leading-100">0</span>
				</div>

				<div className="flex flex-col md:flex-row items-center flex-1 md:flex-none border-x border-x-neutral-700 md:gap-3 md:px-4">
					<span className="text-neutral-400 text-16 leading-120 md:text-20">
						Accuracy:
					</span>
					<span className="text-24 font-bold leading-100">100%</span>
				</div>

				<div className="flex flex-col md:flex-row items-center flex-1 md:flex-none md:gap-3 md:ps-4">
					<span className="text-neutral-400 text-16 leading-120 md:text-20">
						Time:
					</span>
					<span className="text-24 font-bold leading-100">0:60</span>
				</div>
			</div>

			<SettingContainer />
		</div>
	);
};

export default StatsController;
