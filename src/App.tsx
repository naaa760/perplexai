import { useState } from "react";
import {
  Home,
  Search,
  Library,
  BookOpen,
  Globe,
  Paperclip,
  ArrowRight,
  Settings,
  ChevronDown,
} from "lucide-react";

const Index = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen flex bg-[#111111]">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-white/10 bg-[#111111]">
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-semibold">perplexity</span>
          </div>
          <button className="w-full px-4 py-2 flex items-center justify-between rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <span>New Thread</span>
            <span className="text-xs text-gray-400">Ctrl I</span>
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm rounded-lg bg-white/5 text-white"
          >
            <Home className="w-5 h-5 mr-3" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-400 hover:text-white"
          >
            <Search className="w-5 h-5 mr-3" />
            Discover
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-400 hover:text-white"
          >
            <Library className="w-5 h-5 mr-3" />
            Spaces
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-400 hover:text-white"
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Library
          </a>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="p-4 rounded-lg bg-white/5">
            <h3 className="font-semibold mb-2">Try Pro</h3>
            <p className="text-sm text-gray-400 mb-4">
              Upgrade for image upload, smarter AI, and more Pro Search.
            </p>
            <button className="w-full px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fadeIn">
          What do you want to know?
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative glass-effect rounded-lg p-2 animate-fadeIn">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Ask anything..."
              className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute right-2 top-2 flex items-center space-x-2">
              <button className="p-2 rounded-lg button-hover flex items-center space-x-2">
                <span>Auto</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg button-hover">
                <Globe className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg button-hover">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
          <div className="glass-effect p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">61°F</div>
              <div className="flex flex-col">
                <span className="text-sm">Clear</span>
                <span className="text-sm text-gray-400">Gwalior</span>
              </div>
            </div>
          </div>

          <div className="glass-effect p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm">OpenAI's GPT-5</span>
                <span className="text-sm text-gray-400">Roadmap</span>
              </div>
            </div>
          </div>

          <div className="glass-effect p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                ⚽
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Sports</span>
                <span className="text-sm text-gray-400">Choose your teams</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
