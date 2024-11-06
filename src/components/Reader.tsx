import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Book } from '../types';

interface ReaderProps {
  book: Book | null;
  onClose: () => void;
}

const Reader: React.FC<ReaderProps> = ({ book, onClose }) => {
  const [fontSize, setFontSize] = useState(18);

  if (!book) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{book.title}</h1>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
        <div
          className="prose prose-lg mx-auto"
          style={{ fontSize: `${fontSize}px` }}
        >
          {book.content}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setFontSize(size => Math.max(14, size - 2))}
            className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm"
          >
            A-
          </button>
          <button
            onClick={() => setFontSize(size => Math.min(24, size + 2))}
            className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm"
          >
            A+
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reader;