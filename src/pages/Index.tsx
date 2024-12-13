import { useState, useEffect } from 'react';
import { Mail, Phone, Facebook } from 'lucide-react';

const Index = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const projects = [
		{
			title: 'Project 1',
			description: 'Lorem ipsum dolor sit amet',
			tags: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			title: 'Project 2',
			description: 'Lorem ipsum dolor sit amet',
			tags: ['Design', 'UI/UX', 'Figma'],
		},
		{
			title: 'Project 3',
			description: 'Lorem ipsum dolor sit amet',
			tags: ['Figma', 'CSS', 'JavaScript'],
		},
	];

	const skills = [
		'HTML5',
		'CSS3',
		'JavaScript',
		'Figma',
		'Wordpress',
		'Tailwind CSS',
		'UI/UX Design',
		'Responsive Design',
	];

	return (
		<div className='min-h-screen'>
			{/* Navigation */}
			<nav className='fixed top-0 w-full bg-cream/80 backdrop-blur-xs z-50 shadow-md h-20'>
				<div className='container mx-auto px-6 py-6'>
					<div className='flex justify-between items-center'>
						<span className='text-2xl font-bold text-brown-primary'>
							Jayciel De Lara
						</span>
						<div className='hidden md:flex space-x-14 text-xl font-semibold'>
							<a href='#home' className='nav-link'>
								Home
							</a>
							<a href='#about' className='nav-link'>
								About
							</a>
							<a href='#projects' className='nav-link'>
								Projects
							</a>
							<a href='#skills' className='nav-link'>
								Skills
							</a>
							<a href='#contact' className='nav-link'>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id='home'
				className={`pt-60 pb-52 transition-opacity duration-1000 ${
					isVisible ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<div className='container mx-auto px-6'>
					<div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
						<div className='relative'>
							<div className='absolute inset-0 bg-brown-light/20 rounded-blob transform -rotate-6'></div>
							<div className='relative w-80 h-80 md:w-80 md:h-80 rounded-blob overflow-hidden'>
								<img
									src='/dangdang_pic.png'
									alt='Profile'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
						<div className='max-w-xl text-center md:text-left'>
							<h1 className='text-4xl md:text-6xl font-bold text-brown-primary mb-6'>
								Hello, I'm Jayciel
							</h1>
							<p className='text-xl md:text-2xl text-brown-dark/80 mb-8'>
								A passionate web developer crafting beautiful digital
								experiences
							</p>
							<a
								href='#contact'
								className='text-lg inline-block bg-brown-primary text-white px-8 py-3 rounded-full hover:bg-brown-dark transition-colors duration-300'
							>
								Get in Touch
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-32 bg-white'>
				<div className='container mx-auto px-6'>
					<h2 className='section-title text-center mb-8'>About Me</h2>
					<div className='max-w-4xl mx-auto'>
						<p className='text-xl leading-relaxed mb-6'>
							I'm an aspiring frontend developer with a passion for creating beautiful and
							functional websites. Currently, I'm an IT student of Zamboanga Peninsula Polytechnic State University (ZPPSU).
						</p>
						<p className='text-xl leading-relaxed mb-6'>
							As long as it is very necessary to me, I am
							focused on anything my mind sets its sights on. I could focus
							entirely on my task and pick things up quickly. I always aim to increase my
							chances of success by sharing and contributing all of my skills
							and expertise so that I can put my excellent organizing abilities
							to use to impart for my coworkers.
						</p>
						<p className='text-xl leading-relaxed'>
							When I'm not coding, you can find me exploring new design trends,
							contributing to open-source projects, or sharing my knowledge
							through blog posts and tutorials.
						</p>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id='projects' className='py-36'>
				<div className='container mx-auto px-6'>
					<h2 className='section-title text-center mb-8'>My Projects</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{projects.map((project, index) => (
							<div
								key={index}
								className='project-card animate-slide-up py-14 px-12'
								style={{ animationDelay: `${index * 200}ms` }}
							>
								<h3 className='text-xl font-bold mb-5 text-brown-primary'>
									{project.title}
								</h3>
								<p className='text-brown-dark/80 mb-5 text-lg'>{project.description}</p>
								<div className='flex flex-wrap gap-5'>
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className='text-md bg-brown-light/20 text-brown-primary px-4 py-2 rounded-full'
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id='skills' className='py-32 bg-white'>
				<div className='container mx-auto px-6'>
					<h2 className='section-title text-center'>Skills</h2>
          {/* <p className='text-center text-lg font-semibold '>Along the years of studying as an IT student I've learned the basics of:</p> */}
          <p className='text-center text-lg mb-6'>Along the years of studying as an IT student, I've learned the basics of:</p>
					<div className='flex flex-wrap justify-center gap-10 max-w-3xl mx-auto'>
						{skills.map((skill, index) => (
							<span
								key={index}
								className='text-lg font-semibold skill-item animate-fade-in transform hover:scale-150 hover:bg-brown-light/30 hover:border-brown-primary transition-all duration-300 cursor-default'
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id='contact' className='py-20'>
				<div className='container mx-auto px-6'>
					<h2 className='section-title text-center'>Get in Touch</h2>
					<div className='max-w-xl mx-auto space-y-4'>
						<div className='flex flex-col items-center space-y-6'>
							<div className='text-xl flex items-center gap-2 group hover:bg-cream p-3 rounded-lg transition-all duration-300 cursor-pointer'>
								<Mail
									className='text-brown-primary group-hover:scale-110 transition-transform duration-300'
									size={24}
								/>
								<span className='font-semibold text-brown-primary'>
									Email:{' '}
								</span>
								<a
									href='mailto:jaycieldelara9@gmail.com'
									className='font-semibold text-brown-dark hover:text-brown-primary transition-colors duration-300'
								>
									jaycieldelara9@gmail.com
								</a>
							</div>
							<div className='text-xl flex items-center gap-2 group hover:bg-cream p-3 rounded-lg transition-all duration-300 cursor-pointer'>
								<Phone
									className='text-brown-primary group-hover:scale-110 transition-transform duration-300'
									size={24}
								/>
								<span className='font-semibold text-brown-primary'>
									Phone:{' '}
								</span>
								<span className='font-semibold text-brown-dark'>09530557556</span>
							</div>
							<div className='text-xl flex items-center gap-2 group hover:bg-cream p-3 rounded-lg transition-all duration-300 cursor-pointer'>
								<Facebook
									className='text-brown-primary group-hover:scale-110 transition-transform duration-300'
									size={24}
								/>
								<span className='font-semibold text-brown-primary'>
									Facebook:{' '}
								</span>
								<a
									href='https://www.facebook.com/Jciel0'
									target='_blank'
									rel='noopener noreferrer'
									className='font-semibold text-brown-dark hover:text-brown-primary transition-colors duration-300'
								>
									Jayciel De Lara
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Tiil */}
			<footer className='bg-white py-8'>
				<div className='container mx-auto px-6 text-center text-brown-dark/80'>
					<p>&copy; 2024 Jayciel. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Index;
