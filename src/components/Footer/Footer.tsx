import { FC } from 'react';

const Footer: FC = () => {
	return <section className="bg-gradient-to-r from-gray-500 to-gray-500 ">
		<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
			<nav className="flex flex-wrap justify-center -mx-5 -my-2">
				<div className="px-5 py-2">
					<a href="https://github.com/LLpanov" className="text-base leading-6 text-gray-900 hover:text-gray-900">
						About
					</a>
				</div>
				<div className="px-5 py-2">
					<a href="https://github.com/LLpanov" className="text-base leading-6 text-gray-900 hover:text-gray-900">
						Blog
					</a>
				</div>
				<div className="px-5 py-2">
					<a href="https://github.com/LLpanov" className="text-base leading-6 text-gray-900 hover:text-gray-900">
						Team
					</a>
				</div>
				<div className="px-5 py-2">
					<a href="https://github.com/LLpanov" className="text-base leading-6 text-gray-900 hover:text-gray-900">
						Pricing
					</a>
				</div>
				<div className="px-5 py-2">
					<a href="https://github.com/LLpanov" className="text-base leading-6 text-gray-900 hover:text-gray-900">
						Contact
					</a>
				</div>
				<div className="px-5 py-2">
					<a href="https://github.com/LLpanov" className="text-base leading-6 text-gray-900 hover:text-gray-900">
						Terms
					</a>
				</div>
			</nav>
			<div className="flex justify-center mt-8 space-x-6">
				<a href="https://t.me/LLPanov" className="text-gray-200">
					<span className="sr-only">Telegram</span>
					<svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
						 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z"/>
						<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
					</svg>
				</a>
				<a href="https://www.linkedin.com/in/leonid-panov/" className="text-gray-200">
					<span className="sr-only">LinkId</span>
					<svg className="h-6 w-6 "  aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"
						 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
						<rect x="2" y="9" width="4" height="12"/>
						<circle cx="4" cy="4" r="2"/>
					</svg>
				</a>

				<a href="https://github.com/LLpanov" className="text-gray-200 ">
					<span className="sr-only">GitHub</span>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
						<path fillRule="evenodd"
							  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							  clipRule="evenodd"></path>
					</svg>
				</a>

			</div>
			<p className="mt-8 text-base text-gray-200 leading-6 text-center ">
				© 2022 Created by Leonid Panov
			</p>
		</div>
	</section>
};

export { Footer };
