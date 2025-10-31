"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
		<main className="min-h-dvh bg-white">


			{/* Tab-like header: Resume Templates | CV Templates | My Documents */}
			<section className="mx-auto mt-4 max-w-6xl px-4">
				<div className="mx-auto w-full max-w-md rounded-full bg-zinc-100 px-1.5 py-1">
					<nav className="grid grid-cols-3 text-center text-xs font-medium text-gray-700">
						<Link href="#templates" className="rounded-full bg-white px-3 py-1.5 shadow-sm hover:text-cyan-700">
							Resume Templates
						</Link>
						<Link href="#cv" className="px-3 py-1.5 hover:text-cyan-700">
							CV Templates
						</Link>
						<Link href="#docs" className="px-3 py-1.5 hover:text-cyan-700">
							My Documents
						</Link>
					</nav>
				</div>
			</section>





			

			{/* Templates grid with Try For Free title */}
			<section id="templates" className="mx-auto mt-8 max-w-6xl px-4">
				<h2 className="text-center text-sm font-semibold text-gray-800">Try For Free</h2>
				<div className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6">
					{Array.from({ length: 5 }).map((_, idx) => (
						<div key={idx} className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm">
							<div className="aspect-[4/5] w-full rounded-xl bg-zinc-100" />
						</div>
					))}
					{/* More Templates card */}
					<div className="flex items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-2">
						<div className="flex flex-col items-center justify-center rounded-full border border-zinc-300 bg-white px-10 py-12 text-gray-700">
							<span className="text-2xl">+</span>
							<span className="mt-1 text-xs">More Templates</span>
						</div>
					</div>
				</div>

				{/* CTA bar */}
        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/login"
						className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-cyan-500"
					>
						Build Your Resume Fast And Easy
					</Link>
				</div>
			</section>

			{/* Features section: cyan numbered circles with text blocks */}
			<section className="mx-auto mt-10 max-w-6xl px-4 pb-16">
				<div className="space-y-10">
					{/* Row 1: 1 (left) | text (right) */}
					<div className="grid items-center gap-8 md:grid-cols-2">
						<div className="flex items-center justify-center">
							<div className="flex h-60 w-60 items-center justify-center rounded-full bg-cyan-400 text-5xl font-semibold text-white ring-2 ring-cyan-500">1</div>
						</div>
						<div className="rounded-3xl bg-zinc-100 p-6 text-[13px] leading-6 text-gray-700">
							<p>"Lorem Ipsum" is simply dummy text of the printing and typesetting industry.</p>
						</div>
					</div>

					{/* Row 2: text (left) | 2 (right) */}
					<div className="grid items-center gap-8 md:grid-cols-2">
						<div className="rounded-3xl bg-zinc-100 p-6 text-[13px] leading-6 text-gray-700">
							<p>"Lorem Ipsum" is simply dummy text of the printing and typesetting industry.</p>
						</div>
						<div className="flex items-center justify-center">
							<div className="flex h-60 w-60 items-center justify-center rounded-full bg-cyan-400 text-5xl font-semibold text-white ring-2 ring-cyan-500">2</div>
						</div>
					</div>

					{/* Row 3: 3 (left) | text (right) */}
					<div className="grid items-center gap-8 md:grid-cols-2">
						<div className="flex items-center justify-center">
							<div className="flex h-60 w-60 items-center justify-center rounded-full bg-cyan-400 text-5xl font-semibold text-white ring-2 ring-cyan-500">3</div>
						</div>
						<div className="rounded-3xl bg-zinc-100 p-6 text-[13px] leading-6 text-gray-700">
							<p>"Lorem Ipsum" is simply dummy text of the printing and typesetting industry.</p>
						</div>
					</div>

					{/* Row 4: text (left) | 4 (right) */}
					<div className="grid items-center gap-8 md:grid-cols-2">
						<div className="rounded-3xl bg-zinc-100 p-6 text-[13px] leading-6 text-gray-700">
							<p>"Lorem Ipsum" is simply dummy text of the printing and typesetting industry.</p>
						</div>
						<div className="flex items-center justify-center">
							<div className="flex h-60 w-60 items-center justify-center rounded-full bg-cyan-400 text-5xl font-semibold text-white ring-2 ring-cyan-500">4</div>
						</div>
					</div>
				</div>
			</section>

			{/* Customer Reviews */}
			<section className="mx-auto max-w-6xl px-4 pt-2">
				<div className="flex items-center justify-center">
					<div className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow">
						Customer Reviews
					</div>
				</div>
				<div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
					{[
						{ name: "Sophia Bennett" },
						{ name: "Ethan Carter" },
						{ name: "Ishika Nagar" },
					].map((r, i) => (
						<div key={i} className="rounded-3xl bg-zinc-100 p-4 shadow-sm">
							<div className="flex items-center gap-3">
								<div className="h-8 w-8 rounded-full bg-zinc-300" />
								<div className="text-sm font-semibold text-gray-800">{r.name}</div>
							</div>
							<p className="mt-3 text-[12px] leading-5 text-cyan-700">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</p>
							<div className="mt-3 flex gap-1">
								{Array.from({ length: 5 }).map((_, s) => (
									<svg key={s} viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400"><path d="M9.048 2.927c.3-.921 1.604-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 0 0-1.176 0L6.616 16.283c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.068-3.292Z"/></svg>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Premium Features */}
			<section className="mx-auto mt-10 max-w-6xl px-4 pb-16">
				<div className="flex items-center justify-center">
					<div className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow">
						Premium Features
					</div>
				</div>
				<div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="relative">
							<div className="absolute -top-6 left-1/2 -translate-x-1/2">
								<svg viewBox="0 0 20 20" className="h-8 w-8 fill-amber-400 drop-shadow"><path d="M9.048 2.927c.3-.921 1.604-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 0 0-1.176 0L6.616 16.283c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.068-3.292Z"/></svg>
							</div>
							<div className="rounded-2xl bg-zinc-100 px-16 pt-12 pb-10 text-center text-[14px] leading-7 text-gray-800 shadow-sm min-h-[180px]">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
								used by designers to preview layouts and visual mockups before final copy is available.
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="mt-2 w-full bg-zinc-100">
				<div className="mx-auto max-w-6xl px-4 py-10">
					{/* Banner with CTA overlay (matches Figma: button on image) */}
					<div className="relative overflow-hidden rounded-md">
						<Image src="/footer-banner.jpg" alt="Footer banner" width={1600} height={400} className="h-40 w-full object-contain" priority />
						<div className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2">
							<Link href="/login" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-50">
								<span>Build My Resume</span>
								<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
								</svg>
          </Link>
        </div>
      </div>

					{/* Links + Contact */}
					<div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
						<div>
							<h3 className="text-xl font-semibold text-cyan-600">Contact</h3>
							<p className="mt-3 text-[13px] leading-6 text-gray-700">
								500 Terry Francine Street<br />San Francisco, CA 94158
							</p>
							<p className="mt-3 text-[13px] leading-6 text-gray-700">
								Mail: abcd@gmail.com<br />Tel: 123-456-7890
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold text-cyan-600">Support</h3>
							<ul className="mt-3 space-y-2 text-[13px] text-gray-700">
								<li><Link href="#" className="hover:text-cyan-700">Help Center</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Contact Support</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Status</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-semibold text-cyan-600">Shop</h3>
							<ul className="mt-3 space-y-2 text-[13px] text-gray-700">
								<li><Link href="#" className="hover:text-cyan-700">Templates</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Cover Letters</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Bundles</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-semibold text-cyan-600">Collections</h3>
							<ul className="mt-3 space-y-2 text-[13px] text-gray-700">
								<li><Link href="#" className="hover:text-cyan-700">Modern</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Creative</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Professional</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-semibold text-cyan-600">Philosophy</h3>
							<ul className="mt-3 space-y-2 text-[13px] text-gray-700">
								<li><Link href="#" className="hover:text-cyan-700">About</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Blog</Link></li>
								<li><Link href="#" className="hover:text-cyan-700">Careers</Link></li>
							</ul>
						</div>
					</div>

					{/* Socials */}
					<div className="mt-8">
						<h4 className="text-lg font-semibold text-cyan-600">Follow Us</h4>
						<div className="mt-3 flex items-center gap-3">
							<Link href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-purple-500 to-pink-500 text-white text-xs font-bold">IG</Link>
							<Link href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0A66C2] text-white text-xs font-bold">in</Link>
							<Link href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white text-xs font-bold">X</Link>
							<Link href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#1877F2] text-white text-xs font-bold">f</Link>
						</div>
					</div>
				</div>
			</footer>
    </main>
  );
}
