import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className=" bg-cover h-screen justify-center flex items-center "
      style={{ backgroundImage: "url('/bg-img.jpg')" }}
    >

        <div className="bg-black  text-center bg-opacity-20 text-white">
          <h1 className="text-4xl mb-4 font-bold">MindMender</h1>
          <p className=" md-text-xl mb-7">
          Get deep insights into your emotional state in seconds. <br/>
          Our AI-powered system helps you understand <br/> what you're feeling — and what to do next.
          </p>

          <button onClick={() => navigate('/analyze')} className="bg-purple-600 rounded hover:bg-purple-500 font-semibold text-1.5xl px-3 py-3 ">Getting Started</button>

        </div>
      
     
    </div>
  );
}
