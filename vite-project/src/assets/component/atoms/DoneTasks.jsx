import Text from "./Text"

const DoneTasks = () => {
  return (
    <div>
        <div className="flex  items-center gap-[15px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                <path d="M6 11.3812L8.73464 14L15 8" stroke="white" strokeWidth="2"/>
            </svg>
                <Text 
                    text="Product discovery and building what matters"
                    textColor="text-[#242742]"
                />
        </div>                
        <div className="flex items-center gap-[15px] py-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                <path d="M6 11.3812L8.73464 14L15 8" stroke="white" strokeWidth="2"/>
            </svg>
            <p>
                <Text 
                    text="Measuring to ensure updates are a success"
                    textColor="text-[#242742]"
                />
            </p>
        </div>
        <div className="flex  items-center gap-[15px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                <path d="M6 11.3812L8.73464 14L15 8" stroke="white" strokeWidth="2"/>
            </svg>
            <p>
                <Text 
                    text="And much more!"
                    textColor="text-[#242742]"
                />
            </p>
        </div>
    </div>
  )
}

export default DoneTasks