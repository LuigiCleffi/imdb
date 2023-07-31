"use client"
import { useEffect, useState } from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import { useForm, Resolver } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormValues = {
  searchQuery: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.searchQuery ? values : {},
    errors: !values.searchQuery
      ? {
        searchQuery: {
          type: 'required',
          message: 'This is required.',
        },
      }
      : {},
  };
};

const SearchInput: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    if (!data) return;
    router.push(`/search/${data.searchQuery}`);
  });

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full">
      <form onSubmit={onSubmit}>
        <div className="flex items-center">
          <input
            autoComplete="off"
            type="search"
            className={`border bg-transparent border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-500`}
            placeholder="Search keyword..."
            {...register('searchQuery')}
          />
          {errors?.searchQuery && <p>{errors.searchQuery.message}</p>}
          <div className="absolute right-0 pr-3">
            <button type="submit">
              <IoSearchCircle
                style={{ fontSize: '2rem' }}
                className="cursor-pointer text-amber-600"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
