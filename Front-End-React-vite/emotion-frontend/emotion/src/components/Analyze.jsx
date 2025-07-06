import React, { useState } from 'react';
import { create } from '../service/AnalyzeService';

export default function Analyze() {
  const [input, setInput] = useState({ text: '' });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await create(input.text);
      setMessage(res);
      setInput({ text: '' });
    } catch (err) {
      console.error(err, 'failed to send message');
    }
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center tracking-tight text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
        🔮 Emotion Analyzer
      </h1>

      {/* Subtext */}
      <p className="text-base md:text-xl mb-10 text-center max-w-2xl text-gray-300 leading-relaxed">
        Unlock insights into your emotional world. Just describe your current state, and let our AI uncover what's going on beneath the surface.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <textarea
          name="text"
          placeholder="How are you feeling right now? Pour your thoughts..."
          value={input.text}
          onChange={handleChange}
          rows="6"
          className="w-full bg-gray-900 text-white rounded-xl border border-gray-700 p-5 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none placeholder-gray-400 shadow-md"
        />
        <button
          type="submit"
          className="mt-5 w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 py-3 text-lg font-semibold rounded-xl shadow-lg"
        >
          Analyze Emotion
        </button>
      </form>

      {/* Result */}
      {message && (
        <div className="mt-16 w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-800 rounded-2xl shadow-2xl p-10 animate-fade-in-up transition-all duration-500">
          <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">
            🧠 Emotional Insights
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            {/* Emotion */}
            <div>
              <p className="text-lg font-medium text-purple-300 mb-2">Emotion Detected</p>
              <div className="text-3xl font-bold bg-purple-700/20 text-purple-100 px-6 py-3 rounded-xl shadow-inner">
                {message.emotion}
              </div>
            </div>

            {/* Confidence */}
            <div>
              <p className="text-lg font-medium text-green-300 mb-2">Confidence Level</p>
              <div className="text-2xl font-semibold bg-green-700/20 text-green-100 px-6 py-3 rounded-xl shadow-inner">
                {message.confidence}
              </div>
            </div>
          </div>

          {/* Tip Section */}
          <div className="mt-10 p-6 rounded-xl border-l-4 border-purple-500 bg-purple-900/30 text-purple-100 shadow-md">
            <h3 className="text-lg font-semibold mb-2">💡 AI Tip for You</h3>
            <p className="text-base leading-relaxed">
              {message.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
