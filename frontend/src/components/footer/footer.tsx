import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
                <footer className='fixed bottom-0 w-full text-center py-3 text-sm bg-black max-h-fit'>
                    {"Developed by"}
                    <span className='tertiary-text underline' >
                        <Link to={"https://www.linkedin.com/in/iamhurera/"} target="_blank" rel="noopener noreferrer" className="underline mx-1">
                            Hurera
                        </Link>
                    </span>
                    {":)"}
                </footer>
        </>
    )
}

export default Footer