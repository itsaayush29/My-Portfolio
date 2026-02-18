import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

const socialLinks = [
  ['LinkedIn', 'https://www.linkedin.com/in/aayush-gupta-9b25a421a/'],
  ['GitHub', 'https://github.com/itsaayush29'],
  ['Twitter', '#'],
];

const skillIcons = [
  ['javascript.png', 'JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
  ['react.png', 'React', 'https://react.dev/'],
  ['html5.png', 'HTML5', 'https://www.w3.org/html/'],
  ['css3.png', 'CSS3', 'https://www.w3schools.com/css/'],
  ['bootstrap.png', 'Bootstrap', 'https://getbootstrap.com/'],
  ['tailwind-css.png', 'Tailwind CSS', 'https://tailwindcss.com/'],
  ['c-logo.png', 'C++', 'https://www.w3schools.com/cpp/'],
  ['mysql-logo-1.png', 'MySQL', 'https://www.mysql.com/'],
  ['python-logo.png', 'Python', 'https://www.python.org/'],
  ['playwright.svg', 'Playwright', 'https://playwright.dev/'],
];

const projects = [
  ['StudyNotion – EdTech Learning Platform', 'StudyNotion.png', 'Full Stack', '#'],
  ['Tour and Travel', 'Tour.jpg', 'React.js', 'https://tour-and-travel-flame-nine.vercel.app/'],
  ['Weather-App', 'Weather-App.png', 'JavaScript', 'https://itsaayush29.github.io/Weather-App/'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = useMemo(() => ['Software Developer', 'Frontend Engineer'], []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex((prev) => (prev + 1) % words.length), 1800);
    return () => clearInterval(interval);
  }, [words]);

  const e = React.createElement;
  const sectionTitle = 'text-3xl md:text-4xl font-bold text-white';

  return e('div', { className: 'min-h-screen bg-slate-950 text-slate-100' }, [
    e('header', { className: 'sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur', key: 'header' }, [
      e('nav', { className: 'mx-auto flex max-w-6xl items-center justify-between px-6 py-4', key: 'nav' }, [
        e('a', { href: '#home', className: 'text-xl font-bold text-white', key: 'logo' }, ['Portfo', e('span', { className: 'text-accent', key: 's' }, 'lio.')]),
        e('button', { type: 'button', className: 'rounded-md border border-slate-700 px-3 py-1 text-sm md:hidden', onClick: () => setMenuOpen(!menuOpen), key: 'btn' }, 'Menu'),
        e('ul', { className: 'hidden items-center gap-7 text-sm font-medium md:flex', key: 'menu' }, navItems.map(([id, label]) => e('li', { key: id }, e('a', { href: `#${id}`, className: 'transition hover:text-accent' }, label))))
      ]),
      menuOpen && e('ul', { className: 'space-y-2 border-t border-slate-800 px-6 py-4 md:hidden', key: 'mobile' }, navItems.map(([id, label]) => e('li', { key: id }, e('a', { href: `#${id}`, className: 'block rounded bg-slate-900 px-3 py-2 text-sm', onClick: () => setMenuOpen(false) }, label))))
    ]),

    e('main', { key: 'main' }, [
      e('section', { id: 'home', className: 'mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-24', key: 'home' }, [
        e('div', { className: 'space-y-5', key: 'left' }, [
          e('p', { className: 'text-lg text-slate-300', key: 'p1' }, "Hello 👋 I'm"),
          e('h1', { className: 'text-5xl font-black leading-tight text-white md:text-6xl', key: 'h1' }, 'Aayush Gupta'),
          e('p', { className: 'text-xl text-slate-200', key: 'p2' }, ['And I\'m a ', e('span', { className: 'inline-block min-w-52 border-r-2 border-accent pr-1 font-semibold text-accent', key: 'w' }, words[wordIndex])]),
          e('a', { href: 'https://www.linkedin.com/in/aayush-gupta-9b25a421a/', target: '_blank', rel: 'noreferrer', className: 'inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5', key: 'hire' }, "I'm looking to hire")
        ]),
        e('img', { src: './images/bannernew.jpg', alt: 'Portfolio Banner', className: 'mx-auto h-60 w-full max-w-md rounded-2xl object-contain shadow-2xl md:h-80 md:max-w-lg', key: 'img' })
      ]),

      e('section', { id: 'about', className: 'mx-auto max-w-6xl px-6 py-16', key: 'about' }, [
        e('h2', { className: sectionTitle, key: 'title' }, 'About me'),
        e('div', { className: 'mt-8 grid gap-8 md:grid-cols-[280px_1fr]', key: 'grid' }, [
          e('div', { className: 'space-y-5', key: 'col1' }, [
            e('img', { src: './images/Aayush Gupta.JPG', alt: 'Aayush Gupta', className: 'mx-auto h-64 w-full max-w-[260px] rounded-2xl object-contain', key: 'aimg' }),
            e('div', { className: 'flex flex-wrap gap-2', key: 'social' }, socialLinks.map(([label, href]) => e('a', { key: label, href, target: '_blank', rel: 'noreferrer', className: 'rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-accent hover:text-accent' }, label)))
          ]),
          e('div', { className: 'space-y-4', key: 'col2' }, [
            e('h3', { className: 'text-2xl font-semibold text-white', key: 'h3' }, ["I'm Aayush and I'm a ", e('span', { className: 'text-accent', key: 's' }, words[wordIndex])]),
            e('p', { className: 'max-w-3xl text-slate-300 leading-7', key: 'desc' }, 'I am a dedicated software developer focused on creating attractive and user-friendly websites. I am passionate about translating design concepts into interactive digital experiences and continuously improving my skill set to stay updated with the latest industry trends.')
          ])
        ])
      ]),

      e('section', { id: 'experience', className: 'mx-auto max-w-6xl px-6 py-16', key: 'experience' }, [
        e('h2', { className: sectionTitle, key: 'title' }, '💼 Experience'),
        e('div', { className: 'mt-8 space-y-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8', key: 'card' }, [
          e('div', { className: 'space-y-2', key: 'head' }, [
            e('h3', { className: 'text-2xl font-semibold text-white', key: 'role' }, 'Software Test Engineer'),
            e('p', { className: 'text-slate-300', key: 'company' }, 'Globussoft | June 2025 – Present'),
            e('p', { className: 'text-slate-300 leading-7', key: 'summary' }, 'Currently working as a Software Test Engineer, contributing to the quality assurance of products like EmpMonitor, PowerAdSpy, and AdGPT. I am responsible for ensuring stable, high-quality releases through comprehensive manual and automated testing.')
          ]),
          e('div', { className: 'space-y-4', key: 'contributions' }, [
            e('h4', { className: 'text-xl font-semibold text-accent', key: 'title' }, '🔹 Key Responsibilities & Contributions'),
            e('ul', { className: 'list-disc space-y-3 pl-6 text-slate-300 leading-7', key: 'list' }, [
              e('li', { key: 'end' }, 'Performed end-to-end testing including functional, UI/UX, back-end, and API validation.'),
              e('li', { key: 'cases' }, 'Designed, wrote, and executed 500+ test cases, identifying and reporting 1000+ bugs, significantly improving product stability.'),
              e('li', { key: 'features' }, 'Conducted thorough testing of new features across both front-end UI and back-end APIs, followed by post-deployment production verification.'),
              e('li', { key: 'automation' }, 'Implemented automation testing using Playwright, reducing repetitive manual efforts and improving testing efficiency and reliability.'),
              e('li', { key: 'postman' }, [
                'Performed API and back-end testing using Postman, including:',
                e('ul', { className: 'mt-2 list-disc space-y-2 pl-6', key: 'sublist' }, [
                  e('li', { key: 'json' }, 'JSON response validation'),
                  e('li', { key: 'status' }, 'Status code verification'),
                  e('li', { key: 'workflow' }, 'API workflow testing'),
                  e('li', { key: 'sql' }, 'SQL queries for database validation'),
                  e('li', { key: 'integrity' }, 'Data integrity checks')
                ])
              ]),
              e('li', { key: 'support' }, 'Provided technical support to customers and clients by identifying, troubleshooting, and resolving product-related issues.')
            ])
          ]),
          e('div', { className: 'space-y-4', key: 'tools' }, [
            e('h4', { className: 'text-xl font-semibold text-accent', key: 'title' }, '🔹 Tools & Technologies'),
            e('ul', { className: 'list-disc space-y-2 pl-6 text-slate-300 leading-7', key: 'list' }, [
              e('li', { key: 'playwright' }, 'Automation: Playwright'),
              e('li', { key: 'api' }, 'API Testing: Postman'),
              e('li', { key: 'db' }, 'Database: SQL'),
              e('li', { key: 'validation' }, 'Validation: JSON, Status Codes, Data Integrity Checks'),
              e('li', { key: 'types' }, 'Testing Types: Functional, Regression, UI/UX, API, Back-end Testing')
            ])
          ])
        ])
      ]),

      e('section', { id: 'skills', className: 'bg-slate-900/40 py-16', key: 'skills' }, e('div', { className: 'mx-auto max-w-6xl px-6' }, [
        e('h2', { className: sectionTitle, key: 'title' }, 'My skills'),
        e('div', { className: 'mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5', key: 'icons' }, skillIcons.map(([file, label, href]) => e('a', { key: label, href, target: '_blank', rel: 'noreferrer', className: 'group rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-center transition hover:-translate-y-1 hover:border-accent' }, [e('img', { src: `./images/${file}`, alt: label, className: 'mx-auto h-16 w-16 object-contain', key: 'img' }), e('p', { className: 'mt-2 text-sm text-slate-300 group-hover:text-accent', key: 't' }, label)])))
      ])),

      e('section', { id: 'projects', className: 'mx-auto max-w-6xl px-6 py-16', key: 'projects' }, [
        e('h2', { className: sectionTitle, key: 'title' }, 'My Projects'),
        e('div', { className: 'mt-8 grid gap-6 md:grid-cols-3', key: 'cards' }, projects.map(([title, image, tag, href]) => e('article', { key: title, className: 'overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition hover:-translate-y-1 hover:border-accent' }, e('a', { href, target: '_blank', rel: 'noreferrer' }, [e('div', { className: 'flex h-52 items-center justify-center bg-slate-950/70 p-3', key: 'frame' }, e('img', { src: `./images/${image}`, alt: title, className: 'h-full w-full object-contain', key: 'img' })), e('div', { className: 'space-y-2 p-4', key: 'txt' }, [e('h3', { className: 'font-semibold text-white', key: 'h' }, title), e('p', { className: 'text-sm text-accent', key: 'p' }, tag)])]))))
      ]),

      e('section', { id: 'contact', className: 'bg-slate-900/40 py-16', key: 'contact' }, e('div', { className: 'mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2' }, [
        e('div', { key: 'left' }, [
          e('h2', { className: sectionTitle, key: 'h' }, 'Contact me'),
          e('p', { className: 'mt-4 max-w-3xl text-slate-300', key: 'p' }, 'Discuss a project or just want to say hi? My inbox is open.'),
          e('div', { className: 'mt-6 space-y-3 text-slate-300', key: 'meta' }, [
            e('p', { key: 'n' }, [e('span', { className: 'font-semibold text-white' }, 'Name: '), 'Aayush Gupta']),
            e('p', { key: 'a' }, [e('span', { className: 'font-semibold text-white' }, 'Address: '), 'Raipur, India']),
            e('p', { key: 'e' }, [e('span', { className: 'font-semibold text-white' }, 'Email: '), e('a', { href: 'mailto:itsaayush2912@gmail.com', className: 'text-accent' }, 'itsaayush2912@gmail.com')])
          ])
        ]),
        e('form', { className: 'space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6', key: 'form' }, [
          e('h3', { className: 'text-xl font-semibold text-white', key: 'h' }, 'Message me'),
          e('div', { className: 'grid gap-4 sm:grid-cols-2', key: 'row' }, [
            e('input', { className: 'rounded-lg border border-slate-700 bg-slate-900 px-3 py-2', placeholder: 'Name', required: true, key: 'n' }),
            e('input', { className: 'rounded-lg border border-slate-700 bg-slate-900 px-3 py-2', type: 'email', placeholder: 'Email', required: true, key: 'em' })
          ]),
          e('input', { className: 'w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2', placeholder: 'Subject', required: true, key: 's' }),
          e('textarea', { className: 'h-32 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2', placeholder: 'Describe Project...', required: true, key: 't' }),
          e('button', { type: 'submit', className: 'rounded-lg bg-accent px-5 py-2 font-semibold text-slate-950 transition hover:brightness-110', key: 'b' }, 'Send Message')
        ])
      ]))
    ]),

    e('footer', { className: 'border-t border-slate-800 py-6 text-center text-sm text-slate-400', key: 'footer' }, ['Created By ', e('a', { href: 'https://www.linkedin.com/in/aayush-gupta-9b25a421a/', target: '_blank', rel: 'noreferrer', className: 'text-accent', key: 'link' }, 'Aayush Gupta'), ` | © ${new Date().getFullYear()} All rights reserved`]),

    showTop && e('button', { type: 'button', className: 'fixed bottom-6 right-6 rounded-full bg-accent px-4 py-3 font-bold text-slate-950 shadow-glow', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), key: 'top' }, '↑'),
  ]);
}

createRoot(document.getElementById('root')).render(React.createElement(App));
