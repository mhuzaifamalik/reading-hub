import React from "react";

export default function BloggerProfileForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-2xl bg-black border border-gray-800 rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-blue-600 text-xs tracking-wider font-semibold px-3 py-1 rounded-full uppercase">
            Start your journey as a storyteller
          </span>
          <h1 className="mt-4 text-3xl font-bold text-yellow-400">
            Create Your Blogger Profile
          </h1>
          <p className="mt-3 text-gray-400 text-sm">
            Welcome to The Reading Hub! By creating your blogger profile, you’ll
            join a community of passionate readers and writers. Your profile
            helps others discover your work, follow your journey, and engage
            with your stories.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name (required)"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:border-yellow-400 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last Name (required)"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:border-yellow-400 outline-none"
              required
            />
          </div>

          {/* Username */}
          <input
            type="text"
            placeholder="Username (unique handle for profile URL)"
            className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:border-yellow-400 outline-none"
            required
          />

          {/* Email & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Address (required for account & verification)"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:border-yellow-400 outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password (unique password to log in)"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:border-yellow-400 outline-none"
              required
            />
          </div>

          {/* Upload Profile Picture */}
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-yellow-400">
            <span className="inline-block text-3xl text-yellow-400">+</span>
            <p className="mt-2 text-sm text-gray-400">
              Upload your profile picture
            </p>
            <input type="file" className="hidden" />
          </div>

          {/* Short Bio */}
          <textarea
            rows="4"
            placeholder="Short Bio (Tell readers who you are in 200–300 words)"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-yellow-400 outline-none"
          ></textarea>

          {/* Occupation */}
          <input
            type="text"
            placeholder="Occupation (Writer, Student, Teacher, Professional, etc.)"
            className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:border-yellow-400 outline-none"
          />

          {/* Genres */}
          <div>
            <p className="mb-2 font-semibold">Genres</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                "Drama",
                "Humor",
                "Thriller",
                "Horror",
                "Romance",
                "Historical Fiction",
              ].map((genre) => (
                <label
                  key={genre}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="accent-yellow-400 w-4 h-4"
                  />
                  {genre}
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition"
            >
              Create Profile
            </button>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-yellow-400 transition"
            >
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
