'use client';

import { LoadingRoot } from '@/components/LoadingRoot';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { UseGitRepoIssuesFindAll } from '../services/github/UseGitRepoIssuesFindAll';
import { UseIssuesFindAll } from '../services/github/UseIssuesFindAll';
import { GitIssues } from '../types/Issues';
import { Repositorio } from '../types/Repositorio';

import { AppExeption } from '@/utils/AppExeption';
import { toast } from 'react-toastify';
import ImgDefault from '../../../public/images/default-image.png';

type StateProps = 'open' | 'closed' | 'all';
type FilterProps = {
  state: 'open' | 'closed' | 'all';
  label: string;
  active: boolean;
};

export default function RepositorioPage() {
  const [repo, setRepo] = useState<Repositorio>({} as Repositorio);
  const [issues, setIssues] = useState<GitIssues[]>([]);
  const [page, setPage] = useState(1);
  const [filterState, setFilterState] = useState('open' as StateProps);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterProps[]>([
    { state: 'all', label: 'Todas', active: true },
    { state: 'open', label: 'Abertas', active: false },
    { state: 'closed', label: 'Fechadas', active: false }
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  const params = usePathname();
  const name = params.slice(13, 34);

  const handleStateOpen = useCallback((index: number) => {
    setFilterIndex(index);
  }, []);

  const handlePage = useCallback(
    (action: string) => {
      setPage(action === 'back' ? page - 1 : page + 1);
    },
    [page]
  );

  useEffect(() => {
    try {
      (async function loading() {
        const [repo, isusses] = await UseGitRepoIssuesFindAll({
          name,
          state: filters[filterIndex].state,
          per_page: 5
        });
        if (repo.data) {
          setRepo(repo.data);
        } else {
          console.log('Não há repositórios');
        }

        if (isusses.data) {
          setIssues(isusses.data);
        } else {
          console.log('Não há issues');
        }
      })();
    } catch (error) {
      const isAppError = error instanceof AppExeption;
      const msg = isAppError
        ? error.message
        : 'Não foi possível carregar os detalhes do exercícios.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, [name, filters, filterIndex]);

  useEffect(() => {
    try {
      (async function loadingIsusses() {
        const response = await UseIssuesFindAll({
          name,
          state: filters.find(f => f.active)?.state,
          page,
          per_page: 5
        });
        setIssues(response.data);
      })();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [name, page, filters]);

  if (loading) {
    return (
      <div className='w-full min-h-screen flex items-center justify-center bg-black bg-opacity-70'>
        <LoadingRoot className='text-green-500 w-10 h-10' />
      </div>
    );
  }

  return (
    <div className='bg-blue-400 min-h-screen flex items-center py-8 md:py-4 px-8 md:px-0 '>
      <div className='max-w-xl mx-auto  py-8 md:py-4 px-10 md:px-8 bg-white rounded-md shadow-xl'>
        <header className='py-5'>
          <Link className='flex max-w-8 h-8' href='/github'>
            <FaAngleLeft
              width={32}
              height={32}
              className='text-gray-700 w-8 h-8'
            />
          </Link>
        </header>
        <main>
          <section className='flex flex-col justify-center items-center'>
            <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full p-1'>
              {loading ? (
                <LoadingRoot className='text-white w-10 h-10' />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={
                    repo.owner?.avatar_url ? repo.owner?.avatar_url : ImgDefault
                  }
                  alt={repo.owner?.login ? repo.owner.login : ''}
                  className='w-24 h-24 rounded-full p-1.5 bg-white'
                />
              )}
            </div>
            <h1 className='text-gray-500 text-3xl font-bold mt-3'>
              {repo.name}
            </h1>
            <p className='text-gray-500 text-xl text-center mb-4'>
              {repo.description}
            </p>

            <div className='w-full flex items-center my-5 gap-3'>
              {filters.map((filter, index) => (
                <button
                  key={filter.label}
                  className={`text-gray-500 border border-gray-500 px-3 py-2 hover:bg-gray-700 hover:text-white rounded-mdmin-w-28 ${
                    filterIndex === index
                      ? 'bg-blue-500 text-white border-none hover:bg-blue-700'
                      : ''
                  }`}
                  onClick={() => handleStateOpen(index)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </section>
          <section className=''>
            {issues.map(i => (
              <article key={i.id} className='flex gap-3 mb-2 items-center'>
                <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full p-1'>
                  {loading ? (
                    <LoadingRoot />
                  ) : (
                    <Image
                      className='w-10 h-10 rounded-full'
                      width={20}
                      height={20}
                      src={i.user?.avatar_url ? i.user?.avatar_url : ImgDefault}
                      alt={i.user.login}
                    />
                  )}
                </div>
                <div className='flex flex-col flex-1'>
                  <h2 className='text-gray-700 text-xl flex-1 font-semibold'>
                    {i.user.login}
                  </h2>
                  <p className='text-gray-500 '>
                    <Link
                      className='text-gray-500 hover:text-blue-500 transition duration-150 mr-3 truncate-overflow'
                      target='_blank'
                      href={i.html_url}
                    >
                      {i.title}
                    </Link>
                  </p>
                  <div className='my-1 '>
                    {i.labels.map(l => (
                      <span
                        className='bg-gray-700 text-white font-semibold px-2 py-1 rounded-sm text-xs uppercase mr-2 text-center'
                        key={l.id}
                      >
                        {l.name}
                      </span>
                    ))}
                  </div>
                  <div className='flex items-center gap-2 my-2'>
                    <span className='text-gray-500'>State</span>
                    <span
                      className={`${
                        i.state === 'open' ? 'bg-green-500' : 'bg-red-500'
                      } w-3 h-3 rounded-full`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </section>
          <div className='flex items-center justify-between py-3'>
            <button
              onClick={() => handlePage('back')}
              className='px-3 py-2 bg-gray-700 rounded-md disabled:cursor-not-allowed'
              disabled={page < 2}
            >
              Voltar
            </button>
            <button
              onClick={() => handlePage('next')}
              className='px-3 py-2 bg-gray-700 rounded-md'
            >
              Próxima
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
