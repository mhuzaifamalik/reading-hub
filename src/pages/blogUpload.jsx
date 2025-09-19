import React, { useRef, useState } from "react";

function BlogUpload() {
  const [coverPreview, setCoverPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleCoverClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // open file picker
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file)); // preview the image
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-[Outfit]">
      {/* Header */}
      <div className="text-center mt-6">
        <p className="uppercase text-xs tracking-wide text-gray-400">
          Your words deserve a stage
        </p>
        <h1
          className="text-3xl font-[Unbounded] font-bold mt-2"
          style={{ color: "#FFA900" }}
        >
          WRITE & SHARE <br /> YOUR STORY
        </h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto mt-3">
          At The Reading Hub, we make storytelling easy. Use our editor to write,
          format, and upload your blog. Add images, choose categories, and publish
          directly to our community of readers.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-2xl bg-transparent mt-10 space-y-6">
        {/* Blog Title */}
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-500 focus:outline-none focus:border-[#FFA900]"
        />

        {/* Subtitle */}
        <input
          type="text"
          placeholder="Subtitle"
          className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-500 focus:outline-none focus:border-[#FFA900]"
        />

        {/* Blog Content */}
        <textarea
          placeholder="Blog Content"
          rows="8"
          style={{
            border: "1px solid #fff",
          }}
          className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:border-[#FFA900]"
        ></textarea>

        {/* Upload Cover Image */}
        <div
          className="border-2 border-dashed border-gray-500 rounded-lg flex flex-col items-center justify-center py-10 cursor-pointer hover:border-[#FFA900] transition"
          onClick={handleCoverClick}
        >
          {coverPreview ? (
            <img
              src={coverPreview}
              alt="Cover Preview"
              className="max-h-48 rounded-lg object-cover"
            />
          ) : (
            <>
              <span className="text-3xl">📂</span>
              <p className="text-sm text-gray-400">Upload your cover image</p>
            </>
          )}
          {/* Hidden input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleCoverChange}
            className="hidden"
          />
        </div>

        {/* Genres */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            "Drama",
            "Humor",
            "Thriller",
            "Horror",
            "Romance",
            "Historical Fiction",
          ].map((genre, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#FFA900]" /> {genre}
            </label>
          ))}
        </div>

        {/* Publish Button */}
        <div className="text-center">
          <button className="bg-[#FFA900] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogUpload;
