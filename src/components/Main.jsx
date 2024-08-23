import { Icon } from '@iconify/react'

function Main() {
    const icons = {
        play: 'solar:play-bold',
    }

    return (
        <main className='flex-1 p-6 bg-gradient-to-b from-emerald-900 via-zinc-950 to-zinc-950'>
            <h1 className='font-semibold text-3xl mb-6 text-zinc-50'>Boa noite</h1>
            <div className='grid grid-cols-3 gap-6'>
                <a href='' className='bg-white/10 hover:bg-white/20 transition-all rounded-md overflow-hidden flex gap-3 items-center group'>
                    <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4293385d324db8558179afd9/1/en/default" alt="Daily Mix 1" className='w-20 h-20' />
                    <strong className='text-zinc-50'>Daily Mix 1</strong>
                    <button className='p-2 rounded-full bg-emerald-500 drop-shadow-lg ml-auto mr-6 invisible group-hover:visible'>
                        <Icon icon={icons.play} className='size-4' text-zinc-950 />
                    </button>
                </a>
                <a href='' className='bg-white/10 hover:bg-white/20 transition-all rounded-md overflow-hidden flex gap-3 items-center group'>
                    <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba48397e590a1c70e2cda7728/2/en/default" alt="Daily Mix 2" className='w-20 h-20' />
                    <strong className='text-zinc-50'>Daily Mix 2</strong>
                    <button className='p-2 rounded-full bg-emerald-500 drop-shadow-lg ml-auto mr-6 invisible group-hover:visible'>
                        <Icon icon={icons.play} className='size-4 text-zinc-950' />
                    </button>
                </a>
                <a href='' className='bg-white/10 hover:bg-white/20 transition-all rounded-md overflow-hidden flex gap-3 items-center group'>
                    <img src="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0sabi8-default.jpg" alt="This Is Armin van Buuren" className='w-20 h-20' />
                    <strong className='text-zinc-50'>This Is Armin van Buuren</strong>
                    <button className='p-2 rounded-full bg-emerald-500 drop-shadow-lg ml-auto mr-6 invisible group-hover:visible'>
                        <Icon icon={icons.play} className='size-4 text-zinc-950' />
                    </button>
                </a>
                <a href='' className='bg-white/10 hover:bg-white/20 transition-all rounded-md overflow-hidden flex gap-3 items-center group'>
                    <img src="https://seeded-session-images.scdn.co/v2/img/540/r/artist/0NGAZxHanS9e0iNHpR8f2W/pt" alt="Alok Radio" className='w-20 h-20' />
                    <strong className='text-zinc-50'>Alok Radio</strong>
                    <button className='p-2 rounded-full bg-emerald-500 drop-shadow-lg ml-auto mr-6 invisible group-hover:visible'>
                        <Icon icon={icons.play} className='size-4 text-zinc-950' />
                    </button>
                </a>
                <a href='' className='bg-white/10 hover:bg-white/20 transition-all rounded-md overflow-hidden flex gap-3 items-center group'>
                    <img src="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2OMh1u-default.jpg" alt="This Is Dilsinho" className='w-20 h-20' />
                    <strong className='text-zinc-50'>This Is Dilsinho</strong>
                    <button className='p-2 rounded-full bg-emerald-500 drop-shadow-lg ml-auto mr-6 invisible group-hover:visible'>
                        <Icon icon={icons.play} className='size-4 text-zinc-950' />
                    </button>
                </a>
                <a href='' className='bg-white/10 hover:bg-white/20 transition-all rounded-md overflow-hidden flex gap-3 items-center group'>
                    <img src="https://i.scdn.co/image/ab67706f00000002f6a5989432b019dd9dbcc7b5" alt="Top Brasil" className='w-20 h-20' />
                    <strong className='text-zinc-50'>Top Brasil</strong>
                    <button className='p-2 rounded-full bg-emerald-500 drop-shadow-lg ml-auto mr-6 invisible group-hover:visible'>
                        <Icon icon={icons.play} className='size-4 text-zinc-950' />
                    </button>
                </a>
            </div>
        </main>
    )
}

export default Main