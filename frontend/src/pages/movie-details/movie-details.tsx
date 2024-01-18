import React from 'react';
import { useParams } from 'react-router-dom';
import RootLayout from '../../Layout/RootLayout';
import ContainerLayout from '../../Layout/ContainerLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFilm,
    faGlobe,
    faShareNodes,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCalendar,
    faClock,
    faClosedCaptioning,
} from '@fortawesome/free-regular-svg-icons';

function MovieDetails() {
    const { id } = useParams();
    const isFavourite = false;
    console.log(id);
    return (
        <>
            <RootLayout>
                <div
                    style={{
                        backgroundImage: `url(${'https://image.tmdb.org/t/p/w185/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg'})`,
                    }}
                    className='bg-cover w-full aspect-video relative bg-center lg:max-h-[800px]'
                >
                    <div className='inset-0 bg-black/90 px-4 pb-10 pt-24 flex items-center lg:absolute'>
                        <div className='w-full max-w-7xl mx-auto flex flex-col items-center gap-12 md:flex-row'>
                            <img src={'https://image.tmdb.org/t/p/w185/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg'}
                                alt={'Inglorious Bastards'}
                                className='aspect-[2/3] rounded w-full max-w-[300px]'
                            />
                            <div className='w-full'>
                                <h2 className='text-4xl font-extrabold lg:text-5xl'>
                                    {'Inglorious Bastards'}
                                </h2>
                                {/* <span className="text-primary font-bold">
                                        {"movie.origin_name"}
                                    </span> */}
                                <div className='font-medium flex flex-col gap-5 my-4 lg:flex-row lg:items-center'>
                                    <div className='flex items-center gap-2 text-xs font-bold'>
                                        <span className='bg-primaryRed px-2.5 py-1 text-black'>
                                            Full
                                        </span>
                                        <span className='border-2 border-primaryRed px-2.5 py-0.5'>
                                            HD
                                        </span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <span className='flex items-center gap-2'>
                                        <FontAwesomeIcon
                                            icon={faCalendar}
                                            height={16}
                                            color='red'
                                        />
                                        {'2022'}
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <FontAwesomeIcon icon={faClock} height={16} color='red' />
                                        {'1h 22m'}
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <FontAwesomeIcon
                                            icon={faClosedCaptioning}
                                            height={16}
                                            color='red'
                                        />

                                        {'English'}
                                    </span>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <span className='flex items-center gap-2'>
                                        <FontAwesomeIcon icon={faFilm} height={16} color='red' />
                                        Thriller
                                    </span>
                                    <div className='flex items-center gap-2 my-2'>
                                        <FontAwesomeIcon icon={faGlobe} height={16} color='red' />
                                        Hollywood
                                    </div>
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: `lorem ipsum gracias que pasa vamos`,
                                    }}
                                    className='text-sm'
                                />
                                <div className='border border-white/5 bg-white/5 px-4 py-4 flex items-center w-max rounded-lg mt-8 gap-1.5 md:gap-5 md:px-7'>
                                    <button className='flex-col justify-center items-center gap-1 text-sm flex hover:text-primary'>
                                        <FontAwesomeIcon
                                            icon={faShareNodes}
                                            className='h-5'
                                            height={20}
                                            color='red'
                                        />
                                        Share
                                    </button>
                                    <span className='h-12 w-0.5 bg-white/10 md:block' />
                                    <div className='flex items-center gap-3 text-sm font-bold'>
                                        <button className='rounded-full bg-primaryRed text-white px-8 py-3 disabled:bg-zinc-600 disabled:hover:bg-zinc-600 disabled:text-white'>
                                            <FontAwesomeIcon
                                                icon={faVideo}
                                                className='h-4 mr-1'
                                                height={16}
                                                color='white'
                                            />
                                            Trailer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContainerLayout>
                    <div className='mx-auto max-w-7xl flex flex-col'>
                        <div className='text-sm px-5'>
                            <ul key={'server.server_name'}>
                                <p className='text-[24px] font-bold mb-4 mt-8'>
                                    Watch Online
                                </p>
                                <li
                                    className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 text-center gap-2'
                                    key={'server.server_name'}
                                >
                                    <button
                                        className={`${'bg-yellow-400 text-black'} duration-200 py-1`}
                                        disabled={true}
                                    >
                                        Full HD
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='justify-self-center self-center my-8'>
                            <iframe
                                className='w-[85vw] h-[315px] sm:w-[85vw] md:w-[560px] lg:w-[560px] xl:w-[560px] 2xl:w-[560px]'
                                src='https://www.youtube.com/embed/KnrRy6kSFF0?si=I0m8o91IJ9DUpCvt'
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </ContainerLayout>
            </RootLayout>
        </>
    );
}

export default MovieDetails;
