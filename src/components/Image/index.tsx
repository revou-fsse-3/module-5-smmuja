import Image from 'next/image'

const Img = () => {

    return (
        <Image 
            src=""
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            style={{
                maxWidth: "100%",
                height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
        />
    )
}

export default Img