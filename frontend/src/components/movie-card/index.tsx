import { FC } from 'react';
import { Link } from 'react-router-dom';

type MovieCardProps = {
    title: string;
    imgUrl: string;
    releaseYear: string;
    genre: string;
    id: string;
    averageRating: number;
    reviewCount: number;
};

export const MovieCard: FC<MovieCardProps> = ({ title, imgUrl, releaseYear, genre, id, averageRating, reviewCount }) => {

    const staticQuality = 'HD';
    const staticLang = 'English';

    return (
        <div className='select-none group' style={{ width: '230px', height: "345px" }}>
            <div className='relative rounded-lg overflow-hidden'>
                <img src={imgUrl} alt={title} className='aspect-[2/3] w-[100%] h-[100%]' />
                <Link
                    to={`/movies/${id}`}
                    className='absolute inset-0 md:hidden'
                />
                <div className='absolute inset-0 bg-black/70 none flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 group-hover:opacity-100 duration-300 text-center hidden md:flex'>
                    <Link
                        to={`/movies/${id}`}
                        className='rounded-full border-2 text-primaryRed border-primaryRed w-36 px-6 py-2.5 bg-black/20 translate-y-3 group-hover:translate-y-0 duration-300 hover:bg-primary hover:text-primaryRed'
                    >
                        Watch
                    </Link>
                    <h3 className='flex items-center justify-between my-1.5 gap-5 md:my-3'>
                        <Link
                            to={`/movies/${id}`}
                            className='text-primaryRed hover:text-secondaryRed duration-150 text-lg font-bold truncate no-underline hover:underline'
                        >
                            <abbr title={title} className='no-underline'>
                                {`${title.charAt(0).toUpperCase() + title.slice(1)}`}
                            </abbr>
                        </Link>
                        <span className='text-primaryRed text-sm font-medium hidden md:block'>
                            {releaseYear}
                        </span>
                    </h3>
                    {staticQuality && (
                        <div className='flex flex-col gap-1.5 justify-between text-xs md:items-center md:flex-row'>
                            <div className='flex items-center gap-2'>
                                <span className='border-2 border-primaryRed px-2 py-0.5'>
                                    <strong className='text-white'>{staticQuality}</strong>
                                </span>
                                <span className=' px-2 py-1'>
                                    <strong className='text-white'>{staticLang}</strong>
                                </span>
                            </div>
                            <span className='text-white flex items-center gap-2 truncate'>
                                {`${genre.charAt(0).toUpperCase() + genre.slice(1)}`}
                            </span>
                        </div>
                    )}
                    <div className='flex flex-col gap-1.5 justify-between text-xs md:items-center md:flex-row'>
                        <div className='flex items-center gap-2'>
                            <span className=' px-2 py-1'>
                                <strong className='text-white'>Rating: {averageRating.toPrecision(2).toString()}/5</strong>
                            </span>
                            <span className=' px-2 py-1'>
                                <strong className='text-white'>Total Reviews: {reviewCount.toString()}</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

