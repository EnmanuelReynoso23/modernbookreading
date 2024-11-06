import React from 'react';
import { Book } from '../types';
import { books } from '../data/books';

interface BookLibraryProps {
  onBookSelect: (book: Book) => void;
}

const BookLibrary: React.FC<BookLibraryProps> = ({ onBookSelect }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mi Biblioteca</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onBookSelect(book)}
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{book.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{book.author}</p>
              <div className="mt-3 flex items-center">
                <div className="h-2 bg-gray-200 rounded-full flex-1">
                  <div
                    className="h-2 bg-indigo-600 rounded-full"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">{book.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookLibrary;