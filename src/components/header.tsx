const Header = () => {
	return (
		<header className="flex items-center justify-between mb-8 px-4 md:px-8 lg:px-28 md:mb-10 lg:mb-16">
			<img
				src="/assets/images/logo-large.svg"
				className="hidden md:block"
				alt="large logo"
			/>
			<img
				src="/assets/images/logo-small.svg"
				className="md:hidden"
				alt="small logo"
			/>

			<div className="flex items-center gap-2">
				<img src="/assets/images/icon-personal-best.svg" alt="trophy icon" />

				<div className="flex items-center gap-1 text-16 leading-120 md:text-18">
					<div className="md:hidden text-neutral-400">Best:</div>
					<div className="hidden md:block text-neutral-400">Personal best:</div>

					<div>92 WPM</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
