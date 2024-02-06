export default function InpunUploadFile({ text, id }) {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <label htmlFor={id} className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white rounded-lg cursor-pointer bg-accent" >
                <div className='flex flex-col items-center justify-center pt-5 pb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><path fill="" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z" /></svg>
                    <p className='mb-2 mt-3 text-sm text-white'>{text}</p>
                    <p className='text-xs text-white'>Click to Upload or drag and drop</p>
                </div>
                <input id={id} type="file" className="hidden" />
            </label>
        </div>
    )
}