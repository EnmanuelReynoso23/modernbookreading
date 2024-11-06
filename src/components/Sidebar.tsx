import React from 'react';
import { BookOpen, Library, BookMarked, Settings } from 'lucide-react';

interface SidebarProps {
  view: 'library' | 'reader';
  setView: (view: 'library' | 'reader') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ view, setView }) => {
  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8">
      <div className="mb-12">
        <BookOpen className="w-8 h-8 text-indigo-600" />
      </div>
      <nav className="flex flex-col gap-8">
        <button
          onClick={() => setView('library')}
          className={`p-3 rounded-xl transition-colors ${
            view === 'library' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
          }`}
        >
          <Library className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-xl text-gray-500 hover:text-indigo-600">
          <BookMarked className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-xl text-gray-500 hover:text-indigo-600">
          <Settings className="w-6 h-6" />
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;