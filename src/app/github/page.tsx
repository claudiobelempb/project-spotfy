'use client';
import { LoadingRoot } from '@/components/LoadingRoot';
import { Menu, Trash } from 'lucide-react';
import Link from 'next/link';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState
} from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { UseGitFindAll } from '../services/github/UseGitFindAll';
import { Repositorio } from '../types/Repositorio';

export default function GitHubPage() {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState<Repositorio[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewRepo(e.target.value);
  };

  const handleDelete = useCallback(
    (id: number) => {
      try {
        const find = repositorios.filter(r => r.id !== id);
        setRepositorios(find);
        // localStorage.removeItem('@github:repositorios');
        toast.success('Repositório deletado com sucesso!');
      } catch (error) {
        toast.error('Error ao deletado o Repositório!');
      }
    },
    [repositorios]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      async function submit() {
        setLoading(true);
        try {
          if (newRepo === '') {
            toast.error(`Voçê precisa indicar um repositório`);
            return;
          }

          const resp = await UseGitFindAll(newRepo);
          const { id, name, full_name } = resp.data;
          const data: Repositorio[] = [
            ...repositorios,
            {
              id,
              name,
              fullName: full_name
            }
          ];

          const hasRepo = repositorios.find(repo => repo.fullName === newRepo);

          if (hasRepo) {
            toast.error(`Repositório duplicado!`);
            return;
          }

          setRepositorios(data);
          localStorage.setItem('@github:repositorios', JSON.stringify(data));
          setNewRepo('');
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },
    [newRepo, repositorios]
  );

  useEffect(() => {
    (async function loading() {
      try {
        const storage = localStorage.getItem('@github:repositorios');
        const repositorio = storage ? JSON.parse(storage) : [];
        setRepositorios(repositorio);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <main className='bg-blue-500 p-10 min-h-screen'>
        <div className='container mx-auto pt-10 max-w-2xl bg-white p-4 rounded-md shadow-lg shadow-gray-500'>
          <div className='flex items-center mb-4 gap-2'>
            <FaGithub className='text-gray-700 text-2xl' />
            <h1 className='text-gray-700 font-semibold text-xl'>
              Meus Repositorios
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className='flex items-center border border-gray-300 rounded-md h-10'
          >
            <input
              className='w-full px-3 h-auto rounded-tl-md rounded-bl-md placeholder:text-gray-500 outline-none text-gray-500 text-sd text-lg'
              placeholder='Adicionar Repositórios'
              type='text'
              onChange={handleInputChange}
              value={newRepo}
            />
            {loading ? (
              <>
                <button
                  type='submit'
                  className='flex items-center justify-center bg-blue-700 rounded-tr-md rounded-br-md border-none 
                hover:cursor-pointer disabled:hover:cursor-not-allowed disabled:bg-blue-300 p-2'
                  disabled={newRepo.length <= 0}
                >
                  <LoadingRoot className='w-5 h-5 text-white' />
                </button>
              </>
            ) : (
              <button
                type='submit'
                className='flex items-center justify-center w-10 h-10 bg-blue-500 p-2 rounded-tr-md rounded-br-md border-none 
                hover:cursor-pointer disabled:hover:cursor-not-allowed disabled:bg-blue-300 '
                disabled={newRepo.length <= 0}
              >
                <FaPlus className='w-5 h-5 text-white text-2xl' />
              </button>
            )}
          </form>
          <div>
            <ul className='py-5 divide-y-2'>
              {loading ? (
                <div className='flex flex-col items-center justify-center'>
                  <LoadingRoot className='text-green-500 w-10 h-10' />
                </div>
              ) : (
                <>
                  {repositorios.map(repo => (
                    <div key={repo.id}>
                      <li className='flex items-center py-2'>
                        <button
                          onClick={() => handleDelete(repo.id)}
                          className='w-10 h-10 text-gray-700 flex items-center justify-center'
                        >
                          <Trash />
                        </button>
                        <p className='text-gray-500 w-full'>{repo.fullName}</p>
                        <Link
                          className='w-10 h-10 text-gray-700 flex items-center justify-center border-0 '
                          href={`repositorio/${repo.fullName}`}
                        >
                          <Menu />
                        </Link>
                      </li>
                    </div>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
