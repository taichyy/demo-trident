'use client'
import { useState } from 'react'

const sections = [
    { id: 'feature', label: '白頭翁的特性' },
    { id: 'effect', label: '白頭翁的效率' },
    { id: 'beauty', label: '白頭翁的美照' },
    { id: 'danger', label: '白頭翁的危機' },
]

const TextBlock = ({ type }: { type: "appearance" | "live" | "eat" }) => {

    let title = "";
    let text = ""

    switch (type) {
        case "appearance":
            title = "外觀";
            text = "白頭鵯體長約17至22公分，額至頭頂純黑色而富有光澤，兩眼上方至候枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽（後頭部）更潔白，所以又叫「白頭翁」。";
            break;
        case "live":
            title = "棲地";
            text = "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。"
            break;
        case "eat":
            title = "食性";
            text = "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是蝴蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。"
            break;
    }


    return (
        <div className='flex gap-8'>
            <div>
                <h2 className="font-bold text-4xl mb-2 relative">
                    {title}
                    <span className="absolute -right-3.5 -bottom-3 h-[25px] aspect-square donut-mask bg-[#AA6666]/60 pointer-events-none rounded-full" />
                </h2>
            </div>
            <p>
                {text}
            </p>
        </div>
    )
}

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <main className="min-h-screen flex flex-col md:flex-row font-serif">
            {/* Sidebar / Top bar */}
            <aside className="bg-whit w-full items md:w-[340px] flex md:flex-col md:items-start border-b md:border-r border-zinc-200 relative z-10">
                <div className="font-bold text-3xl text-center w-full h-[90px] md:mt-20 md:mb-0 flex justify-between items-center md:block">
                    <div className="md:hidden w-[70px]">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                    白頭翁不吃小米
                    <div className='w-[70px]'>
                        <div className="logo">
                            <div className="bird_body" />
                            <div className="bird_head" />
                            <div className="bird_eye" />
                            <div className="bird_mouth" />
                        </div>
                    </div>
                </div>


                <nav className={` md:mt-2 text-sm absolute md:relative bg-white ${menuOpen ? 'mt-[90px]' : '-mt-[300px]'} md:block w-full duration-300`}>
                    <ul className='flex justify-center items-center flex-col mb-10 md:mb-0'>
                        {sections.map((s) => (
                            <li
                                key={s.id}
                                className="cursor-pointer text-sm leading-10 duration-200 decoration-2 underline-offset-6 hover:underline hover:text-[#AA6666] hover:font-extrabold decoration-[#AA6666]"
                                onClick={() => scrollTo(s.id)}
                            >
                                {s.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Hero Section */}
                <section className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden">
                    <img
                        src="http://i.imgur.com/KfUmCKk.jpg"
                        alt="白頭翁"
                        className="absolute inset-0 w-full h-full object-cover object-center scale-160"
                    />
                    <div className="absolute bottom-6 right-2 md:right-6 text-white">
                        <h1 className="text-5xl font-bold text-right">
                            白頭翁 <span>(Chinese bulbul)</span>
                        </h1>
                        <p className="text-lg md:text-base text-right mt-2">
                            又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類，壽命約 8~10 年。
                        </p>
                    </div>
                </section>

                {/* Description Section - 撐滿剩餘高度 */}
                <section className="flex-1 pt-11 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 lg:gap-28 bg-rose-50 p-10 text-zinc-800 text-sm leading-relaxed">
                    <TextBlock type="appearance" />
                    <TextBlock type="live" />
                    <TextBlock type="eat" />
                </section>
            </div>

        </main>
    )
}
