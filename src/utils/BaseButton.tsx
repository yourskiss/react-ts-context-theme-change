interface PropInfo {
    state: boolean,
    text: string,
    clickwithargument?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BaseButton: React.FC<PropInfo> = ({ state,  text, clickwithargument }) => {
  return (
    <button 
      type="submit" 
      onClick={clickwithargument}
      disabled={state}
      className={`disabled:opacity-50 w-full flex items-center justify-center px-4 py-3 rounded text-white ${state ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-primary hover:bg-blue-primary cursor-pointer'}`}
    >
        { state && <em className="animate-spin rounded-full w-5 h-5 border border-b-0 border-white"></em> }
        <span className="ml-3 text-lg ">{ state ? 'Please wait...' : text}</span>
    </button>
  )
}
export default BaseButton;