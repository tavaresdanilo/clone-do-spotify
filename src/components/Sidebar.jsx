import { Icon } from '@iconify/react'

function Sidebar() {
    const icons = {
        home: 'hugeicons:home-03',
        search: 'hugeicons:search-02',
        folder_library: 'hugeicons:folder-library',
        add: 'hugeicons:add-circle'
    }
    return (
        <aside className='bg-zinc-950 w-64 text-zinc-50 p-3'>
            <nav className='flex gap-3 flex-col'>
                <div className='p-3 rounded-lg bg-zinc-800'>
                    <div className='flex gap-2 items-center'>
                        <Icon icon={icons.search} className='size-6' />
                        <input type="text" placeholder='Buscar' className='placeholder:text-zinc-50 text-sm font-normal bg-transparent outline-none w-full' />
                    </div>
                </div>
                <div className='flex px-2'>
                    <button className='flex gap-2 items-center w-fit'>
                        <Icon icon={icons.home} className='size-6' />
                        <span className='text-sm font-normal'>Início</span>
                    </button>
                </div>
                <div className='flex items-center px-2'>
                    <button className='flex gap-2 items-center'>
                        <Icon icon={icons.folder_library} className='size-6' />
                        <span className='text-sm font-normal'>Sua Biblioteca</span>
                    </button>
                    <button className='ml-auto p-2 rounded-full hover:bg-zinc-800' title='Criar playlist ou pasta'>
                        <Icon icon={icons.add} className='size-5' />
                    </button>
                </div>
                <div className='pt-4 border-t-2 border-zinc-800'>
                    <nav className='flex gap-3 flex-col'>
                        <a href="" className='w-fit font-extralight text-sm text-zinc-400'>Playlist</a>
                        <a href="" className='w-fit font-extralight text-sm text-zinc-400'>Playlist</a>
                        <a href="" className='w-fit font-extralight text-sm text-zinc-400'>Playlist</a>
                        <a href="" className='w-fit font-extralight text-sm text-zinc-400'>Playlist</a>
                        <a href="" className='w-fit font-extralight text-sm text-zinc-400'>Playlist</a>
                    </nav>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar