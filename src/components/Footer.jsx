import { Icon } from '@iconify/react'

function Footer() {
  const icons = {
    play: 'solar:play-bold',
    pause: 'solar:pause-bold',
    skip_previous: 'solar:skip-previous-bold',
    skip_next: 'solar:skip-next-bold',
    shuffle: 'solar:shuffle-linear',
    repeat: 'solar:repeat-bold',
    volume_small: 'solar:volume-small-linear',
    devices: 'solar:devices-linear',
  }

  const playAudio = () => {
    const playButton = document.getElementById('playButton')
    const pauseButton = document.getElementById('pauseButton')
    playButton.classList.add('hidden')
    pauseButton.classList.remove('hidden')
  }

  const pauseAudio = () => {
    const playButton = document.getElementById('playButton')
    const pauseButton = document.getElementById('pauseButton')
    pauseButton.classList.add('hidden')
    playButton.classList.remove('hidden')
  }
  
  return (
    <footer className='bg-zinc-900 border-t-2 border-zinc-800 flex items-center justify-between p-4'>
      <div className='flex items-center gap-3'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Chris_Brown_-_Indigo.png/220px-Chris_Brown_-_Indigo.png" alt="Capa da álbum" className='w-20 h-20 rounded' />
        <div className='flex flex-col'>
          <strong className='font-normal text-zinc-50 select-none'>No Guidance (feat. Drake)</strong>
          <span className='text-sm text-zinc-400 select-none'>Chris Brown, Drake</span>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex gap-6 items-center mb-3'>
          <button>
            <Icon icon={icons.shuffle} className='size-8 text-zinc-50' />
          </button>
          <button>
            <Icon icon={icons.skip_previous} className='size-8 text-zinc-50' />
          </button>
          <button id='playButton' onClick={playAudio}>
            <Icon icon={icons.play} className='size-8 text-zinc-950 bg-zinc-50 p-2 rounded-full' />
          </button>
          <button id='pauseButton' onClick={pauseAudio} className='hidden'>
            <Icon icon={icons.pause} className='size-8 text-zinc-950 bg-zinc-50 p-2 rounded-full' />
          </button>
          <button>
            <Icon icon={icons.skip_next} className='size-8 text-zinc-50' />
          </button>
          <button>
            <Icon icon={icons.repeat} className='size-8 text-zinc-50' />
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-sm text-zinc-400'>0:00</span>
          <input type="range" className='w-96 accent-emerald-500'/>
          <span className='text-sm text-zinc-400'>0:00</span>
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        <button>
          <Icon icon={icons.devices} className='size-6 text-zinc-50' />
        </button>
        <button>
          <Icon icon={icons.volume_small} className='size-6 text-zinc-50' />
        </button>
        <input type="range" min={0} max={1} step={0.01} className='accent-slate-50' />
      </div>
    </footer>
  )
}

export default Footer