import React, { useContext } from 'react'
import RootLayout from '../../Layout/RootLayout'
import ContainerLayout from '../../Layout/ContainerLayout'
import toast, { Toaster } from 'react-hot-toast'
import Loading from '../../components/loading'
import { getOwnMovies } from '../../api/movies'
import { UserContext } from '../../context'
import useAuthVerification from '../../hooks/useAuthentication'
import OwnMovieCard from '../../components/own-movie-card'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const OwnMovies = () => {

  const { pageLoading: pageLoadingFromVerificationHook } =
    useAuthVerification(true);

  const { user } = useContext(UserContext);

  const [movie, setMovie] = React.useState([]);

  const [isPageLoading, setIsPageLoading] = React.useState<boolean>(false);

  const [reFetch, setReFetch] = React.useState(1);

  React.useEffect(() => {
    (async () => {
      try {
        setIsPageLoading(true);
        const { data } = await getOwnMovies(user?.token || "") as any;
        setMovie(data);
        setIsPageLoading(false);
      } catch (error) {
        console.log('error', error);
        toast.error('There was an error fetching movies, try refreshing!', {
          className: 'text-center',
        });
      }
    })();
  }, [user?.token, reFetch]);


  if (isPageLoading) {
    return (
      <>
        <Toaster />
        <RootLayout>
          <div className='w-screen h-screen flex items-center justify-center'>
            <Loading />
            <p className='mx-2'>Loading ...</p>
          </div>
        </RootLayout>
      </>
    );
  }

  if (pageLoadingFromVerificationHook) {
    return (
      <>
        <Toaster />
        <RootLayout>
          <div className='w-screen h-screen flex items-center justify-center'>
            <Loading />
            <p className='mx-2'>Loading ...</p>
          </div>
        </RootLayout>
      </>
    );
  }

  return (
    <>
      <RootLayout>
        <ContainerLayout>

          <div className='flex flex-col'>
            <div className='flex justify-center flex-wrap gap-3 sm:justify-between'>
              <h2 className='capitalize text-2xl font-bold md:text-3xl'>
                Your Movies
              </h2>
              <div className='flex gap-4'>
                <Link
                  to={"/"}
                  className='text-white bg-primaryRed hover:bg-secondaryRed hover:text-white font-medium rounded-lg text-sm px-4 py-2 text-center'
                >
                  Go back
                  <FontAwesomeIcon icon={faArrowRight} className='pl-2' />
                </Link>
              </div>
            </div>
            <main className='mx-auto max-w-7xl px-5 my-12'>
              <div className='grid grid-cols-1ta gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-7 lg:gap-y-14'>
                {
                  movie?.map((e: any) => {
                    return (
                      < OwnMovieCard imgUrl={e?.imgUrl} name={e?.name} releaseYear={e?.releaseYear} id={e._id} setIsPageLoading={setIsPageLoading} setReFetch={setReFetch} />
                    )
                  })
                }
              </div>
              {
                movie.length === 0 && (
                  <>
                    <p className='text-center font-medium'> You haven't created any movie yet :(</p>
                  </>
                )
              }
            </main>
          </div>


        </ContainerLayout>
      </RootLayout>

    </>
  )
}

export default OwnMovies